import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SocialDock from "@/components/SocialDock";
import { Button } from "@/components/ui/button";
import { MessageCircle, ChevronRight } from "lucide-react";
import { getAllProducts } from "@/utils/productData";

const Collections = () => {
  const navigate = useNavigate();
  const [sortBy, setSortBy] = useState("featured");
  const products = getAllProducts();

  const sortedProducts = [...products].sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    return 0; // featured / newest - keep original order
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Breadcrumb */}
      <div className="sticky top-20 z-40 bg-background/95 backdrop-blur-sm border-b border-border">
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
                <ProductCard product={product} navigate={navigate} />
              </div>
            ))}
          </div>
        </main>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919791881884?text=Hi%20DOMINE!%20I'm%20interested%20in%20men's%20tees."
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
}

const ProductCard = ({ product, navigate }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
      onClick={() => navigate(`/collections/${product.slug}`)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-lg bg-muted mb-3 aspect-[3/4] transition-all duration-500 hover:shadow-xl hover:shadow-accent/10">
        {/* Primary Image */}
        <img
          src={product.images[0]}
          alt={`${product.displayName} - Front view`}
          loading="lazy"
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
            isHovered ? 'opacity-0 scale-110' : 'opacity-100 scale-100'
          }`}
          onError={(e) => {
            e.currentTarget.src = '/placeholder.svg';
          }}
        />
        
        {/* Hover Image */}
        <img
          src={product.images[1] || product.images[0]}
          alt={`${product.displayName} - Back view`}
          loading="lazy"
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
            isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
          }`}
          onError={(e) => {
            e.currentTarget.src = product.images[0];
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
