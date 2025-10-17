import { useNavigate } from "react-router-dom";

const EssentialsSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto">
        <div 
          onClick={() => navigate("/essentials")}
          className="relative overflow-hidden rounded-lg cursor-pointer group aspect-[3/4] bg-card border border-border shadow-[var(--shadow-card)] transition-all duration-300 hover:shadow-[var(--shadow-hover)] hover:-translate-y-1"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="/images/essentials/black-plain-tee.png"
              alt="Essential Collection"
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative h-full flex flex-col justify-end p-8 md:p-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white tracking-tight">
              Essentials
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-6 max-w-md">
              Premium basics crafted with 100% cotton at ₹399
            </p>
            <button className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-foreground rounded-md font-semibold hover:bg-white/95 transition-all duration-200 w-fit shadow-md hover:shadow-lg active:scale-[0.98]">
              Shop Essentials
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EssentialsSection;
