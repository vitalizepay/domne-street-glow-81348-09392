import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { cartStore } from "@/utils/cartStore";
import { getAllProducts, Product } from "@/utils/productData";

// Helper to prefer a front-facing image by filename pattern
const pickFrontImage = (images: string[] = []): string => {
  if (!images?.length) return '/placeholder.svg';
  const patterns = [
    /(front|t-1\.png|\/1\.png)$/i,
    /t-2\.png|\/2\.png/i,
    /t-3\.png|\/3\.png/i,
    /t-5\.png|\/5\.png/i,
    /t-4\.png|\/4\.png/i,
  ];
  const lower = images.map((s) => s.toLowerCase());
  for (const p of patterns) {
    const idx = lower.findIndex((s) => p.test(s));
    if (idx !== -1) return images[idx];
  }
  return images[0];
};


const Essentials = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedSizes, setSelectedSizes] = useState<Record<string, string>>({});

  const sizes = ["S", "M", "L", "XL", "XXL"];

  // Get specific products from collections for essentials
  const allProducts = getAllProducts();
  
  // Map essential products based on the PDF requirements
  const essentialProductSlugs = [
    "g-t",                // Teal
    "mauve-t",            // Biscuit
    "m-t-ab",             // Maroon
    "mint-green-t",       // Sage Green
    "dusty-rose-t",       // Peach
    "black-t",            // Black Plain
    "plane-white-t",      // White Plain
    "plane-black-t",      // Black Puff Print
    "dark-grey",          // Grey HD Print
  ];

  const essentialProducts = allProducts.filter(p => 
    essentialProductSlugs.includes(p.slug)
  );

  const handleAddToCart = (product: Product) => {
    const selectedSize = selectedSizes[product.id];
    if (!selectedSize) {
      toast({
        title: "Please select a size",
        description: "Choose a size before adding to cart",
        variant: "destructive",
      });
      return;
    }

    cartStore.addToCart({
      productId: product.id,
      productName: product.name,
      productSlug: product.slug,
      price: product.price,
      size: selectedSize,
      image: product.images[0],
    });

    toast({
      title: "Added to cart",
      description: `${product.displayName} - Size ${selectedSize}`,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 sm:px-6 py-8 mt-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Essential Collection</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Premium basics crafted with 100% cotton. Timeless pieces designed for everyday comfort and style.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {essentialProducts.map((product) => (
            <div 
              key={product.id} 
              className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Product Image */}
              <div 
                className="aspect-[3/4] bg-muted relative overflow-hidden group cursor-pointer"
                onClick={() => { window.scrollTo({ top: 0, behavior: 'auto' }); navigate(`/collections/${product.slug}`); }}
              >
                <img
                  src={pickFrontImage(product.images)}
                  alt={`${product.displayName} - Front view`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-accent text-background px-3 py-1 rounded-full text-sm font-semibold">
                  70% OFF
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="font-semibold text-lg">{product.name}</h3>
                  <p className="text-sm text-muted-foreground">{product.displayName}</p>
                </div>

                {/* Color Dots */}
                <div className="flex gap-2">
                  {product.colors.map((color, idx) => (
                    <div
                      key={idx}
                      className="w-6 h-6 rounded-full border-2 border-border"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold">₹{product.price}</span>
                  <span className="text-lg text-muted-foreground line-through">₹{product.originalPrice}</span>
                </div>

                {/* Size Selection */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Select Size</label>
                  <div className="flex gap-2 flex-wrap">
                    {sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSizes({ ...selectedSizes, [product.id]: size })}
                        className={`px-4 py-2 border rounded-md transition-colors ${
                          selectedSizes[product.id] === size
                            ? "bg-primary text-primary-foreground border-primary"
                            : "bg-background hover:bg-muted border-border"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Add to Cart Button */}
                <Button 
                  onClick={() => handleAddToCart(product)}
                  className="w-full"
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Essentials;
