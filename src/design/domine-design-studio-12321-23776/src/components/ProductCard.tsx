import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { ShoppingCart, Heart } from "lucide-react";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category?: string;
}

const ProductCard = ({ id, name, price, image, category }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden border-border bg-card hover:shadow-glow transition-all duration-300">
      <div className="relative aspect-square overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <Button 
          size="icon" 
          variant="ghost" 
          className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground"
        >
          <Heart className="w-4 h-4" />
        </Button>
        {category && (
          <span className="absolute top-2 left-2 px-3 py-1 bg-gradient-orange text-white text-xs font-semibold rounded-full">
            {category}
          </span>
        )}
      </div>
      
      <div className="p-4 space-y-3">
        <h3 className="font-semibold text-lg text-foreground">{name}</h3>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary">${price}</span>
          <Button size="sm" className="bg-gradient-violet hover:shadow-glow">
            <ShoppingCart className="w-4 h-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
