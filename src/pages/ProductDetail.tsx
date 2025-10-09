import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { cartStore } from "@/utils/cartStore";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SocialDock from "@/components/SocialDock";
import { Button } from "@/components/ui/button";
import { ChevronRight, Check, Droplets, Wind, Sparkles, Shirt, MessageCircle, ChevronLeft } from "lucide-react";
import { getProductBySlug, getRandomProducts } from "@/utils/productData";

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const product = slug ? getProductBySlug(slug) : null;
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedImage, setSelectedImage] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [user, setUser] = useState<any>(null);

  const nextImage = () => {
    if (product) {
      setSelectedImage((prev) => (prev + 1) % product.images.length);
    }
  };

  const prevImage = () => {
    if (product) {
      setSelectedImage((prev) => (prev - 1 + product.images.length) % product.images.length);
    }
  };

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast({
        title: "Please select a size",
        description: "Choose a size before adding to cart",
        variant: "destructive",
      });
      return;
    }

    if (!product) return;

    cartStore.addToCart({
      productId: product.id,
      productName: product.name,
      productSlug: product.slug,
      price: product.price,
      size: selectedSize,
      image: product.images[0],
    });

    // Redirect to WhatsApp with order details
    const message = encodeURIComponent(
      `Hi DOMINE! I would like to order:\n\nProduct: ${product.name}\nColor: ${product.displayName}\nSize: ${selectedSize}\nPrice: ₹${product.price}\n\nFind my order details`
    );
    window.open(`https://wa.me/919791881884?text=${message}`, '_blank');

    toast({
      title: "Redirecting to WhatsApp!",
      description: `${product.name} (${selectedSize}) added to your cart`,
    });
  };

  const handleBuyNow = () => {
    if (!user) {
      navigate("/auth", { state: { from: `/collections/${slug}` } });
      return;
    }
    
    toast({
      title: "Proceeding to checkout",
      description: "Taking you to checkout...",
    });
    // TODO: Navigate to checkout page
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
          <Link to="/collections" className="text-accent hover:underline">
            Back to Collections
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = getRandomProducts(product.slug, 4);
  const sizes = ["S", "M", "L", "XL", "2XL"];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Breadcrumb */}
      <div className="sticky top-[73px] z-40 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-6 py-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-accent transition-colors">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link to="/collections" className="hover:text-accent transition-colors">Collections</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">{product.displayName}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        {/* Product Details */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Left - Image Carousel */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-[3/4] bg-muted rounded-lg overflow-hidden group">
              <img
                src={product.images[selectedImage]}
                alt={`${product.displayName} - View ${selectedImage + 1}`}
                className={`w-full h-full object-cover transition-transform duration-500 cursor-zoom-in ${
                  isZoomed ? 'scale-150' : 'hover:scale-110'
                }`}
                onClick={() => setIsZoomed(!isZoomed)}
                onError={(e) => {
                  e.currentTarget.src = '/placeholder.svg';
                }}
              />
              
              {/* Navigation Arrows */}
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="h-6 w-6 text-accent" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-label="Next image"
                  >
                    <ChevronRight className="h-6 w-6 text-accent" />
                  </button>
                </>
              )}
              
              {/* Image Counter */}
              <div className="absolute bottom-4 right-4 bg-background/80 px-3 py-1 rounded-full text-sm">
                {selectedImage + 1} / {product.images.length}
              </div>
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square bg-muted rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === index ? 'border-accent' : 'border-transparent hover:border-border'
                  }`}
                >
                  <img
                    src={img}
                    alt={`${product.displayName} thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = '/placeholder.svg';
                    }}
                  />
                </button>
              ))}
            </div>

            {/* Feature Icons */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              {[
                { icon: Shirt, text: "Super Soft" },
                { icon: Wind, text: "100% Premium Cotton" },
                { icon: Droplets, text: "Quick Dry" },
                { icon: Droplets, text: "Moisture Wicking" },
                { icon: Sparkles, text: "Anti-Wrinkle" },
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                  <feature.icon className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-sm">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold mb-2">{product.name}</h1>
              <div className="flex items-center gap-3">
                <p className="text-xl text-muted-foreground line-through">₹{product.originalPrice}</p>
                <p className="text-2xl font-bold text-accent">₹{product.price.toLocaleString('en-IN')}</p>
              </div>
            </div>

            {/* Color Options */}
            <div>
              <h3 className="font-semibold mb-3 text-sm uppercase tracking-wide">Color: {product.displayName}</h3>
              <div className="flex gap-3">
                {product.colors.map((color, index) => (
                  <div
                    key={index}
                    className="w-10 h-10 rounded-full border-2 border-accent cursor-pointer"
                    style={{ backgroundColor: color }}
                    title={product.displayName}
                  />
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="font-semibold mb-3 text-sm uppercase tracking-wide">Select Size</h3>
              <div className="flex gap-3">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-6 py-3 border-2 rounded-lg font-semibold transition-all ${
                      selectedSize === size
                        ? 'border-accent bg-accent text-background'
                        : 'border-border hover:border-accent'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-4">
              <Button 
                size="lg" 
                className="flex-1 bg-accent hover:bg-accent/90 text-background font-bold"
                onClick={handleAddToCart}
              >
                Add to Cart
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="flex-1 border-2 border-accent text-accent hover:bg-accent hover:text-background font-bold"
                onClick={handleBuyNow}
              >
                Buy Now
              </Button>
            </div>

            {/* Key Features */}
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="font-bold mb-4 text-lg">Key Features</h3>
              <ul className="space-y-2">
                {[
                  "Breathable",
                  "Flex-Fit Technology",
                  "Stretchable",
                  "Quick Dry",
                  "Moisture Wicking",
                  "Anti-Wrinkle",
                  "Tailored Fit for Trendy Style"
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-accent flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Deals & Offers */}
            <div className="border-2 border-accent p-6 rounded-lg bg-accent/5">
              <h3 className="font-bold mb-4 text-lg">Deals & Offers</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-xl">🎁</span>
                  <span className="text-sm">Free Gift with every order</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-xl">🏷️</span>
                  <span className="text-sm">First Order: 15% OFF via UPI</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-xl">💬</span>
                  <span className="text-sm">WhatsApp Enquiry: +91 96001 10557</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        <div>
          <h2 className="text-2xl lg:text-3xl font-bold mb-8">You May Also Like</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <div
                key={relatedProduct.id}
                className="group cursor-pointer"
                onClick={() => navigate(`/collections/${relatedProduct.slug}`)}
              >
                <div className="relative overflow-hidden rounded-lg bg-muted mb-4 aspect-[3/4]">
                  <img
                    src={relatedProduct.images[0]}
                    alt={relatedProduct.displayName}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.src = '/placeholder.svg';
                    }}
                  />
                </div>
                <h3 className="font-semibold text-sm line-clamp-2 mb-2 group-hover:text-accent transition-colors">
                  {relatedProduct.name}
                </h3>
                <p className="font-bold">₹{relatedProduct.price.toLocaleString('en-IN')}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/9791881884?text=Hi%20DOMINE!%20I'm%20interested%20in%20men's%20tees."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[9998] bg-[#25D366] hover:bg-[#20BA5A] text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </a>

      <SocialDock />
      <Footer />
    </div>
  );
};

export default ProductDetail;
