import { Home, ShoppingBag, Palette, Mail } from "lucide-react";
import { NavLink } from "react-router-dom";
import domineLogo from "@/assets/domine-logo.png";

const menuItems = [
  { title: "Home", url: "/", icon: Home },
  { title: "Collections", url: "/collections", icon: ShoppingBag },
  { title: "Design Studio", url: "/design-studio", icon: Palette },
  { title: "Contact", url: "/contact", icon: Mail },
];

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

export function MobileMenu() {
  return (
    <div className="flex flex-col h-full bg-background">
      {/* Logo Header */}
      <div className="p-6 border-b border-border">
        <img src={domineLogo} alt="DOMINE Logo" className="h-10 w-auto object-contain" />
      </div>
      
      {/* Navigation Menu */}
      <nav className="flex-1 p-4">
        <p className="px-4 py-2 text-xs uppercase tracking-wider text-muted-foreground font-semibold">
          Navigation
        </p>
        <div className="space-y-1 mt-2">
          {menuItems.map((item) => (
            <NavLink
              key={item.title}
              to={item.url}
              end
              onClick={scrollToTop}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                  isActive
                    ? "bg-accent text-background font-semibold"
                    : "text-foreground hover:bg-accent/10"
                }`
              }
            >
              <item.icon className="h-5 w-5" />
              <span>{item.title}</span>
            </NavLink>
          ))}
        </div>
      </nav>
    </div>
  );
}
