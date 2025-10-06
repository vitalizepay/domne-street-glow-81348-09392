import { Search, User, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import domineLogo from "@/assets/domine-logo.png";

const Navbar = () => {
  const navItems = [
    "HOME",
    "BEST SELLERS",
    "NEW ARRIVALS",
    "T-SHIRTS",
    "CONTACT",
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo - Top Right */}
          <div className="flex items-center gap-2 ml-auto order-3">
            <img 
              src={domineLogo} 
              alt="DOMINE Logo" 
              className="h-10 w-auto object-contain"
            />
          </div>

          {/* Navigation Links - Hidden on mobile */}
          <div className="hidden lg:flex items-center gap-8 order-2">
            {navItems.map((item) => (
              <button
                key={item}
                className="text-sm font-semibold tracking-wide text-foreground/80 hover:text-accent transition-colors duration-300 relative group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </div>

          {/* Icons */}
          <div className="flex items-center gap-4 order-1">
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
