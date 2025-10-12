import { useNavigate } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const CategorySection = () => {
  const navigate = useNavigate();

  const categories = [
    {
      title: "Best Sellers",
      image: "/images/collections/plane-black-t/Gemini_Generated_Image_4vnbmr4vnbmr4vnb.png",
      link: "/collections",
    },
    {
      title: "New Arrivals",
      image: "/images/collections/dusty-blue-t/T-1.png",
      link: "/collections",
    },
    {
      title: "Collections",
      image: "/images/collections/olive-green-t/T-1.png",
      link: "/collections",
    },
  ];

  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto">
        {/* Mobile Carousel */}
        <div className="md:hidden">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {categories.map((category) => (
                <CarouselItem key={category.title} className="pl-2 md:pl-4">
                  <div
                    onClick={() => navigate(category.link)}
                    className="group relative overflow-hidden cursor-pointer rounded-lg aspect-[3/4] bg-secondary"
                  >
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-2xl font-bold text-white mb-2">{category.title}</h3>
                      <button className="text-white text-sm font-medium underline underline-offset-4 hover:no-underline transition-all">
                        Shop Now
                      </button>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-3 gap-6">
          {categories.map((category) => (
            <div
              key={category.title}
              onClick={() => navigate(category.link)}
              className="group relative overflow-hidden cursor-pointer rounded-lg aspect-[3/4] bg-secondary"
            >
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{category.title}</h3>
                <button className="text-white text-sm font-medium underline underline-offset-4 hover:no-underline transition-all">
                  Shop Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
