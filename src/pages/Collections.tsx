import { useState, useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SocialDock from "@/components/SocialDock";
import { Button } from "@/components/ui/button";
import { MessageCircle, ChevronRight } from "lucide-react";
import { getAllProducts } from "@/utils/productData";

// Simple image preload helper shared across the page
const preloaded = new Set<string>();
const preloadImageLink = (url: string, priority: 'high' | 'low' = 'low') => {
  if (!url || preloaded.has(url)) return;
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'image';
  link.href = url;
  link.setAttribute('fetchpriority', priority);
  document.head.appendChild(link);
  preloaded.add(url);
};

// Helper to prefer a front-facing image by filename pattern
const pickFrontImage = (images: string[] = []): string => {
  if (!images?.length) return '/placeholder.svg';
  const patterns = [
    /(front|t-1\.png|\/1\.png)$/i, // common front
    /t-3\.png|\/3\.png/i,          // alternate front/sitting front
    /t-2\.png|\/2\.png/i,          // side as fallback
    /t-4\.png|\/4\.png/i,
    /t-5\.png|\/5\.png/i,
  ];
  const lower = images.map((s) => s.toLowerCase());
  for (const p of patterns) {
    const idx = lower.findIndex((s) => p.test(s));
    if (idx !== -1) return images[idx];
  }
  return images[0];
};

const Collections = () => {
  const navigate = useNavigate();
  const [sortBy, setSortBy] = useState("featured");
  const products = getAllProducts();

  useEffect(() => {
    window.scrollTo(0, 0);
    // Preload first 12 products' first two images in the background
    const primaries = sortedProducts.slice(0, 12);
    primaries.forEach((p, i) => {
      if (p?.images?.[0]) preloadImageLink(p.images[0], i < 4 ? 'high' : 'low');
      if (p?.images?.[1]) preloadImageLink(p.images[1], 'low');
    });
  }, []);

  const sortedProducts = [...products].sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    return 0; // featured / newest - keep original order
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Breadcrumb */}
      <div className="relative z-40 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-6 py-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-accent transition-colors">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">Collections</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-8 lg:py-12">
        {/* Main Content */}
        <main className="w-full">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4 mb-6 sm:mb-10">
            <div>
              <p className="text-base sm:text-lg font-medium text-foreground">{products.length} products</p>
            </div>

            {/* Sort */}
            <div className="w-full sm:w-auto">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 bg-card border-2 border-border rounded-md text-sm sm:text-base text-foreground font-medium focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent uppercase tracking-wide cursor-pointer hover:border-accent/50 transition-colors"
              >
                <option value="featured">SORT BY: FEATURED</option>
                <option value="price-low">SORT BY: PRICE LOW TO HIGH</option>
                <option value="price-high">SORT BY: PRICE HIGH TO LOW</option>
                <option value="newest">SORT BY: NEWEST</option>
              </select>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-6">
            {sortedProducts.map((product, index) => (
              <div
                key={product.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <ProductCard product={product} navigate={navigate} index={index} />
              </div>
            ))}
          </div>
        </main>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919994104442?text=Hi%20DOMINE!%20I'm%20interested%20in%20men's%20tees."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[9998] bg-[#25D366] hover:bg-[#20BA5A] text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
      <Footer />
    </div>
  );
};

interface ProductCardProps {
  product: any;
  navigate: any;
  index: number;
}

const ProductCard = ({ product, navigate, index }: ProductCardProps) => {
  const eager = index < 6; // first rows load eagerly
  const cardRef = useRef<HTMLDivElement | null>(null);
  const frontSrc = pickFrontImage(product?.images);

  const doPreload = () => {
    if (frontSrc) preloadImageLink(frontSrc, index < 4 ? 'high' : 'low');
  };

  useEffect(() => {
    if (!cardRef.current) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          doPreload();
          obs.disconnect();
        }
      },
      { rootMargin: '300px' }
    );
    obs.observe(cardRef.current);
    return () => obs.disconnect();
  }, []);

  const handleClick = () => {
    doPreload();
    window.scrollTo({ top: 0, behavior: 'auto' });
    navigate(`/collections/${product.slug}`);
  };

  return (
    <div
      ref={cardRef}
      className="group cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
      onClick={handleClick}
      onTouchStart={doPreload}
      onPointerDown={doPreload}
    >
      <div className="relative overflow-hidden rounded-lg bg-muted mb-3 aspect-[3/4] transition-all duration-500 hover:shadow-xl hover:shadow-accent/10">
        <img
          src={frontSrc}
          alt={`${product.displayName} - Front view`}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          width={960}
          height={1280}
          sizes="(max-width:640px) 50vw, (max-width:1024px) 33vw, 20vw"
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src = '/placeholder.svg';
          }}
        />
      </div>

      {/* Product Info */}
      <div className="space-y-1.5 sm:space-y-2">
        <h3 className="font-medium text-xs sm:text-sm line-clamp-2 group-hover:text-accent transition-colors duration-300">
          {product.name}
        </h3>
        
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <p className="font-bold text-sm sm:text-base lg:text-lg text-accent">₹{product.price.toLocaleString('en-IN')}</p>
            <p className="text-[10px] sm:text-xs text-muted-foreground line-through">₹{product.originalPrice}</p>
          </div>
        </div>

        {/* Color Dots */}
        <div className="flex gap-1 sm:gap-1.5">
          {product.colors.slice(0, 4).map((color: string, index: number) => (
            <div
              key={index}
              className="w-3 h-3 sm:w-4 sm:h-4 rounded-full border border-border group-hover:border-accent transition-colors"
              style={{ backgroundColor: color }}
              title={product.displayName}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collections;
