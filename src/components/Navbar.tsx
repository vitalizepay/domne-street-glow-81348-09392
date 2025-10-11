import { useState, useEffect } from "react";
import { Search, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { getAllProducts } from "@/utils/productData";
import domineLogo from "@/assets/domine-logo.png";
import cartIcon from "@/assets/cart-icon.png";
import { cartStore } from "@/utils/cartStore";
import { MobileMenu } from "@/components/MobileMenu";
const Navbar = () => {
  const navigate = useNavigate();
  const [cartCount, setCartCount] = useState(0);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const products = getAllProducts();
  const filteredProducts = (searchQuery
    ? products.filter((p) =>
        [p.displayName, p.name, p.folderName]
          .join(" ")
          .toLowerCase()
          .includes(searchQuery.toLowerCase())
      )
    : products
  ).slice(0, 8);

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
    { label: "CONTACT", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Mobile Menu Button - Top Left */}
          <div className="lg:hidden flex items-center gap-3 order-1">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:text-accent hover:bg-accent/10 transition-all duration-300 min-w-[44px] min-h-[44px]"
                  aria-label="Open menu"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-64 p-0">
                <MobileMenu />
              </SheetContent>
            </Sheet>
            
            {/* Logo on Mobile */}
            <div 
              className="flex items-center cursor-pointer"
              onClick={() => navigate("/")}
            >
              <img src={domineLogo} alt="DOMINE Logo" className="h-10 w-auto object-contain" />
            </div>
          </div>

          {/* Logo - Desktop only */}
          <div 
            className="hidden lg:flex items-center gap-2 cursor-pointer order-1"
            onClick={() => navigate("/")}
          >
            <img src={domineLogo} alt="DOMINE Logo" className="h-12 w-auto object-contain" />
          </div>

          {/* Navigation Links - Desktop only */}
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
          <div className="flex items-center gap-2 sm:gap-4 order-3">
            <Button 
              variant="ghost" 
              size="icon" 
              className="hover:text-accent hover:bg-accent/10 transition-all duration-300 hover:scale-110 active:scale-95 min-w-[44px] min-h-[44px]"
              onClick={() => navigate("/auth")}
              aria-label="User account"
            >
              <User className="h-5 w-5 sm:h-6 sm:w-6" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="hover:text-accent hover:bg-accent/10 transition-all duration-300 hover:scale-110 active:scale-95 min-w-[44px] min-h-[44px]"
              onClick={() => setIsSearchOpen(true)}
              aria-label="Search products"
            >
              <Search className="h-5 w-5 sm:h-6 sm:w-6" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="hover:opacity-80 hover:bg-accent/10 relative transition-all duration-300 hover:scale-110 active:scale-95 min-w-[44px] min-h-[44px]"
              onClick={() => navigate("/cart")}
              aria-label={`Shopping cart with ${cartCount} items`}
            >
              <img src={cartIcon} alt="" className="h-6 w-6 object-contain invert" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-accent text-background text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center shadow-lg">
                  {cartCount}
                </span>
              )}
            </Button>
          </div>
        </div>
      </div>
      <Dialog open={isSearchOpen} onOpenChange={setIsSearchOpen}>
        <DialogContent className="sm:max-w-xl max-h-[90vh] overflow-hidden flex flex-col">
          <DialogHeader>
            <DialogTitle className="text-lg sm:text-xl">Search products</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 flex-1 overflow-hidden flex flex-col">
            <Input
              autoFocus
              placeholder="Search tees..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="min-h-[44px]"
            />
            <div className="flex-1 overflow-y-auto rounded-md border border-border divide-y divide-border">
              {filteredProducts.length === 0 ? (
                <p className="p-4 text-sm text-muted-foreground">No results found</p>
              ) : (
                filteredProducts.map((p) => (
                  <button
                    key={p.id}
                    className="w-full text-left flex items-center gap-3 p-3 sm:p-4 hover:bg-accent/20 transition-all duration-300 active:bg-accent/30 min-h-[60px]"
                    onClick={() => {
                      navigate(`/collections/${p.slug}`);
                      setIsSearchOpen(false);
                      setSearchQuery("");
                    }}
                  >
                    <img
                      src={p.images[0]}
                      alt={`${p.displayName} tee`}
                      loading="lazy"
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded object-cover border border-border"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm sm:text-base truncate">{p.displayName}</p>
                      <p className="text-xs sm:text-sm text-muted-foreground">₹{p.price.toLocaleString('en-IN')}</p>
                    </div>
                  </button>
                ))
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </nav>
  );
};

export default Navbar;
