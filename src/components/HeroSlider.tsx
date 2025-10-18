import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide3 from "@/assets/hero-slide-3.jpg";
import heroSlide4 from "@/assets/hero-slide-4.jpg";

interface Slide {
  image: string;
  badge: string;
  title: string;
  subtitle: string;
  cta: string;
  titleClass?: string;
}

const slides: Slide[] = [
  {
    image: heroSlide1,
    badge: "Now New",
    title: "THE FIT THAT DEFINES YOU",
    subtitle: "Drop 01 / Bold & Confident",
    cta: "SHOP MEN'S TEES",
  },
  {
    image: heroSlide2,
    badge: "Polo Collection",
    title: "CLASSIC REDEFINED",
    subtitle: "Premium. Timeless. Bold.",
    cta: "SHOP POLO TEES",
  },
  {
    image: heroSlide3,
    badge: "Black Series",
    title: "OWN THE LOOK",
    subtitle: "Precision-cut. Comfort-first.",
    cta: "SHOP CLASSICS",
  },
  {
    image: heroSlide4,
    badge: "The Crew",
    title: "REDEFINE BASICS",
    subtitle: "Crafted for men who lead.",
    cta: "EXPLORE COLLECTION",
  },
];

const HeroSlider = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); // Changed to 3s as requested

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    goToSlide((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    goToSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(0); // Reset
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  return (
    <div 
      className="relative h-screen w-full overflow-hidden touch-pan-y"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Preload first image */}
      <link rel="preload" as="image" href={slides[0].image} />
      
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-700 ease-out ${
            index === currentSlide
              ? "opacity-100 scale-100"
              : "opacity-0 scale-105"
          }`}
        >
          {/* Background Image with Parallax Effect */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${slide.image})`,
              transform: index === currentSlide ? "scale(1.05)" : "scale(1.1)",
              transition: "transform 6s ease-out",
            }}
          >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="max-w-2xl animate-fade-in">
                {/* Badge */}
                <div className="inline-block mb-6">
                  <span className={`text-accent font-bold text-lg tracking-widest uppercase ${slide.titleClass || ""}`}>
                    {slide.badge}
                  </span>
                </div>

                {/* Title */}
                <h1 className="text-5xl lg:text-7xl font-black mb-4 leading-tight tracking-tight">
                  {slide.title}
                </h1>

                {/* Subtitle */}
                <p className="text-lg lg:text-xl text-muted-foreground mb-8 font-medium">
                  {slide.subtitle}
                </p>

                {/* CTA Button */}
                <Button
                  size="lg"
                  onClick={() => navigate('/collections')}
                  className="bg-gradient-to-r from-[hsl(var(--landing-gold))] to-[hsl(var(--landing-gold-dark))] hover:shadow-[0_0_30px_hsl(var(--landing-gold)/0.5)] text-white font-bold text-xs sm:text-sm tracking-widest px-8 sm:px-10 py-5 sm:py-6 rounded-full border-0 transition-all duration-300 hover:scale-105 active:scale-95 min-h-[48px] w-full sm:w-auto shadow-xl"
                >
                  {slide.cta}
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-10 bg-background/30 backdrop-blur-sm hover:bg-accent text-foreground p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 active:scale-95 min-w-[44px] min-h-[44px] flex items-center justify-center"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-10 bg-background/30 backdrop-blur-sm hover:bg-accent text-foreground p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 active:scale-95 min-w-[44px] min-h-[44px] flex items-center justify-center"
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2 sm:gap-3 px-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full min-w-[44px] min-h-[44px] flex items-center justify-center ${
              index === currentSlide
                ? "w-10 sm:w-12 h-3 bg-[hsl(var(--landing-gold))] shadow-lg shadow-[hsl(var(--landing-gold)/0.5)]"
                : "w-3 h-3 bg-foreground/30 hover:bg-[hsl(var(--landing-gold-dark))]"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
