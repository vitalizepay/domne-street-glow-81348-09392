import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductGrid from "@/components/ProductGrid";

const BestSellers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-6 pt-32 pb-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            BEST SELLERS
          </h1>
          <p className="text-muted-foreground text-lg">
            Our most popular pieces, crafted for men who lead
          </p>
        </div>
        <ProductGrid />
      </div>
      <Footer />
    </div>
  );
};

export default BestSellers;
