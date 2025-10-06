import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import SocialDock from "@/components/SocialDock";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSlider />
      <SocialDock />
      <Footer />
    </div>
  );
};

export default Index;
