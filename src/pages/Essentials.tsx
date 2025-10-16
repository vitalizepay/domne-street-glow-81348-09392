import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { cartStore } from "@/utils/cartStore";

interface EssentialProduct {
  id: string;
  name: string;
  color: string;
  price: number;
  image: string;
  features: string[];
  fabric: string;
}

const essentialProducts: EssentialProduct[] = [
  {
    id: "essential-teal",
    name: "Basic Round Neck T-Shirt",
    color: "Teal",
    price: 399,
    image: "/images/essentials/teal-basic-tee.png",
    features: ["100% Cotton", "Super Soft", "HEM with HD Print", "Clean surface", "Light Weight"],
    fabric: "100% Cotton"
  },
  {
    id: "essential-biscuit",
    name: "Basic Round Neck T-Shirt",
    color: "Biscuit",
    price: 399,
    image: "/images/essentials/biscuit-basic-tee.png",
    features: ["100% Cotton", "Super Soft", "HEM with Print & DTF Material", "Clean surface", "Light Weight"],
    fabric: "100% Cotton"
  },
  {
    id: "essential-maroon",
    name: "Basic Round Neck T-Shirt",
    color: "Maroon",
    price: 399,
    image: "/images/essentials/maroon-basic-tee.png",
    features: ["100% Cotton", "Super Soft", "HEM with Print and Vinyl", "Clean surface", "Light Weight"],
    fabric: "100% Cotton"
  },
  {
    id: "essential-sage-green",
    name: "Basic Round Neck T-Shirt",
    color: "Sage Green",
    price: 399,
    image: "/images/essentials/sage-green-basic-tee.png",
    features: ["100% Cotton", "Super Soft", "HEM with Structural HD Print", "Clean surface", "Light Weight"],
    fabric: "100% Cotton"
  },
  {
    id: "essential-peach",
    name: "Basic Round Neck T-Shirt",
    color: "Peach",
    price: 399,
    image: "/images/essentials/peach-basic-tee.png",
    features: ["100% Cotton", "Super Soft", "HEM with Puff Print", "Clean surface", "Light Weight"],
    fabric: "100% Cotton"
  },
  {
    id: "essential-black-plain",
    name: "Basic Plain T-Shirt",
    color: "Black",
    price: 399,
    image: "/images/essentials/black-plain-tee.png",
    features: ["100% Premium Cotton", "Super Soft", "Clean surface"],
    fabric: "100% Premium Cotton"
  },
  {
    id: "essential-white-plain",
    name: "Basic Plain T-Shirt",
    color: "White",
    price: 399,
    image: "/images/essentials/white-plain-tee.png",
    features: ["100% Premium Cotton", "Super Soft", "Clean surface"],
    fabric: "100% Premium Cotton"
  },
  {
    id: "essential-black-puff",
    name: "Basic Printed T-Shirt with Puff Print",
    color: "Black",
    price: 399,
    image: "/images/essentials/black-puff-print-tee.png",
    features: ["100% Premium Cotton", "Super Soft", "Clean surface"],
    fabric: "100% Premium Cotton"
  },
  {
    id: "essential-grey-hd",
    name: "Basic Printed T-Shirt with HD Print",
    color: "Grey",
    price: 399,
    image: "/images/essentials/grey-hd-print-tee.png",
    features: ["100% Premium Cotton", "Super Soft", "Clean surface"],
    fabric: "100% Premium Cotton"
  }
];

const Essentials = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedSizes, setSelectedSizes] = useState<Record<string, string>>({});

  const sizes = ["S", "M", "L", "XL", "XXL"];

  const handleAddToCart = (product: EssentialProduct) => {
    const selectedSize = selectedSizes[product.id];
    if (!selectedSize) {
      toast({
        title: "Please select a size",
        description: "Choose a size before adding to cart",
        variant: "destructive",
      });
      return;
    }

    cartStore.addToCart({
      productId: product.id,
      productName: `${product.name} - ${product.color}`,
      productSlug: product.id,
      price: product.price,
      size: selectedSize,
      image: product.image,
    });

    toast({
      title: "Added to cart",
      description: `${product.name} (${product.color}) - Size ${selectedSize}`,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 sm:px-6 py-8 mt-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Essential Collection</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Premium basics crafted with 100% cotton. Timeless pieces designed for everyday comfort and style.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {essentialProducts.map((product) => (
            <div 
              key={product.id} 
              className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Product Image */}
              <div className="aspect-[3/4] bg-muted relative overflow-hidden group">
                <img
                  src={product.image}
                  alt={`${product.name} - ${product.color}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Product Info */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="font-semibold text-lg">{product.name}</h3>
                  <p className="text-sm text-muted-foreground">{product.color}</p>
                </div>

                {/* Features */}
                <ul className="text-sm space-y-1">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="text-muted-foreground">• {feature}</li>
                  ))}
                </ul>

                {/* Price */}
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold">₹{product.price}</span>
                </div>

                {/* Size Selection */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Select Size</label>
                  <div className="flex gap-2 flex-wrap">
                    {sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSizes({ ...selectedSizes, [product.id]: size })}
                        className={`px-4 py-2 border rounded-md transition-colors ${
                          selectedSizes[product.id] === size
                            ? "bg-primary text-primary-foreground border-primary"
                            : "bg-background hover:bg-muted border-border"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Add to Cart Button */}
                <Button 
                  onClick={() => handleAddToCart(product)}
                  className="w-full"
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Essentials;
