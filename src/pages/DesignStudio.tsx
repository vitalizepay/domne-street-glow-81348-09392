import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const DesignStudio = () => {
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
          <iframe
            src="/src/design/domine-design-studio-12321-23776/index.html"
            className="w-full h-[85vh] rounded-2xl shadow-xl border border-white/10"
            loading="lazy"
            title="DOMINE Design Studio"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DesignStudio;
