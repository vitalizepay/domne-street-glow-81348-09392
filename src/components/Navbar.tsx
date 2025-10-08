import { Search, User, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import domineLogo from "@/assets/domine-logo.png";

const Navbar = () => {
  const navigate = useNavigate();
  const navItems = [
    { label: "HOME", path: "/" },
    { label: "COLLECTIONS", path: "/collections" },
    { label: "NEW ARRIVALS", path: "/" },
    { label: "YOUR DESIGN", path: "/" },
    { label: "CONTACT", path: "/" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo - Top left */}
          <div 
            className="flex items-center gap-2 cursor-pointer order-1"
            onClick={() => navigate("/")}
          >
            <img src={domineLogo} alt="DOMINE Logo" className="h-12 w-auto object-contain" />
          </div>

          {/* Navigation Links - Hidden on mobile */}
          <div className="hidden lg:flex items-center gap-8 order-2">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => navigate(item.path)}
                className="text-sm font-semibold tracking-wide text-foreground/80 hover:text-accent transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </div>

          {/* Icons */}
          <div className="flex items-center gap-4 order-3">
            <Button variant="ghost" size="icon" className="hover:text-accent">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-accent">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-accent lg:hidden">
              <ShoppingBag className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
