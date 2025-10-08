import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";

interface ProductCardProps {
  name: string;
  price: number;
  image: string;
  category: string;
}

const ProductCard = ({ name, price, image, category }: ProductCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-lg bg-card border border-border transition-all duration-300 hover:shadow-xl hover:border-accent">
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-4">
        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
          {category}
        </p>
        <h3 className="font-semibold text-lg mb-2">{name}</h3>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-accent">₹{price}</span>
          <Button
            size="icon"
            variant="ghost"
            className="hover:text-accent hover:bg-accent/10"
          >
            <ShoppingBag className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
