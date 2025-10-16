import { useNavigate } from "react-router-dom";

const EssentialsSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto">
        <div 
          onClick={() => navigate("/essentials")}
          className="relative overflow-hidden rounded-lg cursor-pointer group aspect-[3/4] bg-card shadow-lg hover:shadow-xl transition-all duration-300"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="/images/essentials/black-plain-tee.png"
              alt="Essential Collection"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative h-full flex flex-col justify-end p-8 md:p-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Essentials
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-md">
              Premium basics crafted with 100% cotton at ₹399
            </p>
            <button className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors w-fit group-hover:scale-105 transition-transform duration-300">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EssentialsSection;
