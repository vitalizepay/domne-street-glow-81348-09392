import { useNavigate } from "react-router-dom";
import { getAllProducts } from "@/utils/productData";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const FeaturedProducts = () => {
  const navigate = useNavigate();
  const allProducts = getAllProducts();
  const featuredProducts = allProducts.slice(0, 4);

  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Featured Products
          </h2>
          <p className="text-muted-foreground">Discover our latest collection</p>
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2">
              {featuredProducts.map((product) => (
                <CarouselItem key={product.id} className="pl-2 basis-1/2">
                  <div
                    onClick={() => navigate(`/collections/${product.slug}`)}
                    className="group cursor-pointer"
                  >
                    <div className="relative overflow-hidden rounded-lg bg-card border border-border mb-3 aspect-[3/4] shadow-[var(--shadow-card)] transition-all duration-300 hover:shadow-[var(--shadow-hover)] hover:-translate-y-1">
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      {product.originalPrice && (
                        <div className="absolute top-2 left-2 bg-primary text-primary-foreground px-2.5 py-1 text-xs font-bold rounded shadow-sm">
                          -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                        </div>
                      )}
                    </div>
                    <h3 className="text-sm font-medium text-foreground mb-1.5 line-clamp-1">
                      {product.name}
                    </h3>
                    <div className="flex items-baseline gap-2">
                      <span className="text-sm font-bold text-foreground">₹{product.price.toLocaleString('en-IN')}</span>
                      {product.originalPrice && (
                        <>
                          <span className="text-xs text-muted-foreground line-through">
                            ₹{product.originalPrice.toLocaleString('en-IN')}
                          </span>
                          <span className="text-xs font-semibold text-primary">
                            {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => navigate(`/collections/${product.slug}`)}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg bg-card border border-border mb-3 aspect-[3/4] shadow-[var(--shadow-card)] transition-all duration-300 hover:shadow-[var(--shadow-hover)] hover:-translate-y-1">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {product.originalPrice && (
                  <div className="absolute top-2 left-2 bg-primary text-primary-foreground px-2.5 py-1 text-xs font-bold rounded shadow-sm">
                    -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                  </div>
                )}
              </div>
              <h3 className="text-sm font-medium text-foreground mb-1.5 line-clamp-1">
                {product.name}
              </h3>
              <div className="flex items-baseline gap-2">
                <span className="text-sm font-bold text-foreground">₹{product.price.toLocaleString('en-IN')}</span>
                {product.originalPrice && (
                  <>
                    <span className="text-xs text-muted-foreground line-through">
                      ₹{product.originalPrice.toLocaleString('en-IN')}
                    </span>
                    <span className="text-xs font-semibold text-primary">
                      {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                    </span>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => navigate("/collections")}
            className="bg-primary text-primary-foreground px-10 py-3.5 rounded-md font-semibold hover:bg-primary/90 transition-all duration-200 shadow-sm hover:shadow-md active:scale-[0.98]"
          >
            Explore All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
