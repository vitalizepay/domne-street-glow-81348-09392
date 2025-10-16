import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import CategorySection from "@/components/CategorySection";
import FeaturedProducts from "@/components/FeaturedProducts";
import TrustBadges from "@/components/TrustBadges";
import SocialDock from "@/components/SocialDock";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSlider />
      <CategorySection />
      <FeaturedProducts />
      <TrustBadges />
      <SocialDock />
      <Footer />
    </div>
  );
};

export default Index;
