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
      <div className="sticky top-[73px] z-40 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-6 py-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-accent transition-colors">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">Collections</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - Filters */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="sticky top-32">
              <h2 className="text-xl font-bold mb-6">Filters</h2>
              
              {/* Category */}
              <div className="mb-8">
                <h3 className="font-semibold mb-3 text-sm uppercase tracking-wide">Category</h3>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" defaultChecked className="rounded border-border" />
                    <span className="text-sm">Men Best Sellers</span>
                  </label>
                </div>
              </div>

              {/* Size */}
              <div className="mb-8">
                <h3 className="font-semibold mb-3 text-sm uppercase tracking-wide">Size</h3>
                <div className="flex flex-wrap gap-2">
                  {['S', 'M', 'L', 'XL', '2XL'].map(size => (
                    <button
                      key={size}
                      className="px-4 py-2 border border-border rounded-md hover:bg-accent hover:text-background transition-colors text-sm"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold mb-2 text-foreground">Collections</h1>
                <p className="text-muted-foreground">{products.length} products</p>
              </div>

              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 bg-muted border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-accent"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="newest">Newest</option>
              </select>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {sortedProducts.map((product) => (
                <ProductCard key={product.id} product={product} navigate={navigate} />
              ))}
            </div>
          </main>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919600110557?text=Hi%20DOMINE!%20I'm%20interested%20in%20men's%20tees."
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

interface ProductCardProps {
  product: any;
  navigate: any;
}

const ProductCard = ({ product, navigate }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group cursor-pointer"
      onClick={() => navigate(`/collections/${product.slug}`)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-lg bg-muted mb-4 aspect-[3/4]">
        {/* Primary Image */}
        <img
          src={product.images[0]}
          alt={`${product.displayName} - Front view`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            isHovered ? 'opacity-0' : 'opacity-100'
          }`}
          onError={(e) => {
            e.currentTarget.src = '/placeholder.svg';
          }}
        />
        
        {/* Hover Image */}
        <img
          src={product.images[1] || product.images[0]}
          alt={`${product.displayName} - Back view`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
          onError={(e) => {
            e.currentTarget.src = product.images[0];
          }}
        />

        {/* Quick View on Hover */}
        <div className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <Button
            variant="secondary"
            size="sm"
            className="pointer-events-none"
          >
            Quick View
          </Button>
        </div>
      </div>

      {/* Product Info */}
      <div className="space-y-2">
        <h3 className="font-semibold text-sm line-clamp-2 group-hover:text-accent transition-colors">
          {product.name}
        </h3>
        
        {/* Color Dots */}
        <div className="flex gap-2">
          {product.colors.map((color: string, index: number) => (
            <div
              key={index}
              className="w-5 h-5 rounded-full border-2 border-border"
              style={{ backgroundColor: color }}
              title={product.displayName}
            />
          ))}
        </div>

        <div className="flex items-center gap-2">
          <p className="text-sm text-muted-foreground line-through">₹{product.originalPrice}</p>
          <p className="font-bold text-lg">₹{product.price.toLocaleString('en-IN')}</p>
        </div>
      </div>
    </div>
  );
};

export default Collections;
