import { useState } from "react";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import tshirtWhite from "@/assets/tshirt-white.jpg";
import tshirtDesign1 from "@/assets/tshirt-design1.jpg";

const Home = () => {
  const [products] = useState([
    { id: "1", name: "Classic White Tee", price: 29.99, image: tshirtWhite, category: "New" },
    { id: "2", name: "Gradient Abstract Design", price: 39.99, image: tshirtDesign1, category: "Trending" },
    { id: "3", name: "Minimalist Logo Tee", price: 34.99, image: tshirtWhite, category: "Sale" },
    { id: "4", name: "Urban Style Tee", price: 32.99, image: tshirtDesign1 },
    { id: "5", name: "Designer Collection", price: 44.99, image: tshirtWhite, category: "New" },
    { id: "6", name: "Limited Edition", price: 49.99, image: tshirtDesign1, category: "Trending" },
  ]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section 
        className="relative h-[600px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" />
        <div className="relative z-10 text-center space-y-6 px-4 animate-fade-in">
          <h1 className="text-6xl md:text-7xl font-bold">
            Design Your
            <span className="block bg-gradient-violet bg-clip-text text-transparent">
              Perfect Tee
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Create custom t-shirt designs with our powerful design studio. 
            Perfect for wholesale and personal brands.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-gradient-violet hover:shadow-glow text-lg px-8">
              Start Designing
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 border-primary">
              Browse Collection
            </Button>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-4xl font-bold text-foreground">New Arrivals</h2>
          <Button variant="ghost" className="text-primary">
            View All <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.slice(0, 3).map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>

      {/* Trending */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-4xl font-bold text-foreground">Trending Designs</h2>
          <Button variant="ghost" className="text-primary">
            View All <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.slice(3, 6).map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4 text-center space-y-6">
          <h2 className="text-5xl font-bold text-foreground">
            Ready to Create Something Amazing?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of designers and brands using Domine to bring their ideas to life
          </p>
          <Button size="lg" className="bg-gradient-orange hover:shadow-glow-orange text-lg px-8">
            Get Started Free
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
