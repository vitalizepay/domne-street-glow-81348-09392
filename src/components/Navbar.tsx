import { useState, useEffect } from "react";
import { Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import domineLogo from "@/assets/domine-logo.png";
import cartIcon from "@/assets/cart-icon.png";
import { cartStore } from "@/utils/cartStore";

const Navbar = () => {
  const navigate = useNavigate();
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const updateCartCount = () => {
      setCartCount(cartStore.getCartCount());
    };
    
    updateCartCount();
    window.addEventListener('cart-updated', updateCartCount);
    return () => window.removeEventListener('cart-updated', updateCartCount);
  }, []);
  const navItems = [
    { label: "HOME", path: "/" },
    { label: "COLLECTIONS", path: "/collections" },
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
          <div className="hidden lg:flex items-center gap-6 xl:gap-8 order-2">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => navigate(item.path)}
                className="text-xs xl:text-sm font-semibold tracking-wide text-foreground/80 hover:text-accent transition-colors duration-300 relative group whitespace-nowrap"
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
            <Button 
              variant="ghost" 
              size="icon" 
              className="hover:opacity-80 relative transition-opacity"
              onClick={() => navigate("/cart")}
            >
              <img src={cartIcon} alt="Cart" className="h-6 w-6 object-contain brightness-0" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-accent text-background text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
