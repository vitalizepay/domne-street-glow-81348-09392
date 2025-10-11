import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { ShoppingCart, User, Sparkles } from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <Sparkles className="w-8 h-8 text-primary group-hover:animate-glow-pulse" />
            <span className="text-2xl font-bold bg-gradient-violet bg-clip-text text-transparent">
              Domine
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link to="/new-arrivals" className="text-foreground hover:text-primary transition-colors">
              New Arrivals
            </Link>
            <Link to="/trending" className="text-foreground hover:text-primary transition-colors">
              Trending
            </Link>
            <Link to="/sale" className="text-foreground hover:text-primary transition-colors">
              Sale
            </Link>
            <Link to="/collections" className="text-foreground hover:text-primary transition-colors">
              Collections
            </Link>
            <Link 
              to="/design" 
              className="px-6 py-2 bg-gradient-violet text-white font-semibold rounded-lg hover:shadow-glow transition-all"
            >
              Design Studio
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={() => navigate("/cart")}>
              <ShoppingCart className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" onClick={() => navigate("/auth")}>
              <User className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
