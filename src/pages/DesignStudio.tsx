import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const DesignStudio = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    document.title = "Design Studio | DOMINE";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Customize and design your own DOMINE T-shirt in real time.");
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = "Customize and design your own DOMINE T-shirt in real time.";
      document.head.appendChild(meta);
    }

    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute("href", `${window.location.origin}/design-studio`);
    } else {
      const link = document.createElement("link");
      link.rel = "canonical";
      link.href = `${window.location.origin}/design-studio`;
      document.head.appendChild(link);
    }
  }, []);

  const scrollToStudio = () => {
    document.getElementById("studio-embed")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#0B0B0B]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center justify-center px-6 pt-24">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight uppercase">
            Create Your Own Style
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto">
            Design your DOMINE tee the way you imagine.
          </p>
          <Button
            onClick={scrollToStudio}
            className="rounded-2xl px-8 py-6 text-lg font-semibold bg-white text-black hover:bg-white/90 hover:scale-105 transition-all duration-200 focus:ring-4 focus:ring-white/50"
          >
            Start Designing
          </Button>
        </div>
      </section>

      {/* Studio Embed Section */}
      <section id="studio-embed" className="min-h-screen px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="bg-neutral-900 rounded-2xl shadow-xl border border-white/10 p-12 text-center space-y-6">
            <h2 className="text-3xl font-bold text-white">Design Studio Coming Soon</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Our interactive T-shirt design studio is currently under development. 
              Soon you'll be able to create custom designs with our powerful design tools.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 text-left">
              <div className="bg-black/30 p-6 rounded-lg">
                <h3 className="text-white font-semibold mb-2">Custom Text</h3>
                <p className="text-white/60 text-sm">Add your own text with various fonts and styles</p>
              </div>
              <div className="bg-black/30 p-6 rounded-lg">
                <h3 className="text-white font-semibold mb-2">Graphics & Templates</h3>
                <p className="text-white/60 text-sm">Choose from hundreds of pre-made designs</p>
              </div>
              <div className="bg-black/30 p-6 rounded-lg">
                <h3 className="text-white font-semibold mb-2">AI Design Assistant</h3>
                <p className="text-white/60 text-sm">Generate unique designs with AI</p>
              </div>
            </div>
            <Button
              onClick={() => navigate("/collections")}
              className="mt-8 rounded-2xl px-8 py-6 text-lg font-semibold bg-white text-black hover:bg-white/90 hover:scale-105 transition-all duration-200"
            >
              Browse Our Collection
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DesignStudio;
