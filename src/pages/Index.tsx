import Navbar from "@/components/Navbar";
import PromoBanner from "@/components/PromoBanner";
import HeroSlider from "@/components/HeroSlider";
import CategorySection from "@/components/CategorySection";
import FeaturedProducts from "@/components/FeaturedProducts";
import TrustBadges from "@/components/TrustBadges";
import SocialDock from "@/components/SocialDock";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <PromoBanner />
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
