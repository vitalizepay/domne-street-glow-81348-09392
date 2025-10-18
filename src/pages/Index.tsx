import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import CategorySection from "@/components/CategorySection";
import EssentialsSection from "@/components/EssentialsSection";
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
    <div className="min-h-screen bg-gradient-to-b from-[hsl(var(--landing-bg-gradient-start))] to-[hsl(var(--landing-bg-gradient-end))]">
      <Navbar />
      <HeroSlider />
      <CategorySection />
      <EssentialsSection />
      <FeaturedProducts />
      <TrustBadges />
      <SocialDock />
      <Footer />
    </div>
  );
};

export default Index;
