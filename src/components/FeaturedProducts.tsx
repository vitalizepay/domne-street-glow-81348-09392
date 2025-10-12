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
                    <div className="relative overflow-hidden rounded-lg bg-secondary mb-3 aspect-[3/4]">
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {product.originalPrice && (
                        <div className="absolute top-3 left-3 bg-destructive text-destructive-foreground px-2 py-1 text-xs font-bold rounded">
                          SALE
                        </div>
                      )}
                    </div>
                    <h3 className="text-sm font-medium text-foreground mb-1 group-hover:underline">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="text-base font-bold text-foreground">₹{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          ₹{product.originalPrice}
                        </span>
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
              <div className="relative overflow-hidden rounded-lg bg-secondary mb-3 aspect-[3/4]">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {product.originalPrice && (
                  <div className="absolute top-3 left-3 bg-destructive text-destructive-foreground px-2 py-1 text-xs font-bold rounded">
                    SALE
                  </div>
                )}
              </div>
              <h3 className="text-sm font-medium text-foreground mb-1 group-hover:underline">
                {product.name}
              </h3>
              <div className="flex items-center gap-2">
                <span className="text-base font-bold text-foreground">₹{product.price}</span>
                {product.originalPrice && (
                  <span className="text-sm text-muted-foreground line-through">
                    ₹{product.originalPrice}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button
            onClick={() => navigate("/collections")}
            className="bg-accent text-accent-foreground px-8 py-3 rounded-md font-medium hover:bg-accent/90 transition-colors"
          >
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
