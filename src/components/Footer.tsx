import { NavLink } from "react-router-dom";
import domineLogo from "@/assets/domine-logo-white.png";

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const Footer = () => {
  return (
    <footer className="bg-[hsl(200,100%,62%)] border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <img src={domineLogo} alt="DOMINE" className="h-8 w-auto mb-4" />
            <p className="text-sm text-background/80">
              Premium men's clothing for those who lead.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-semibold text-background mb-4 text-sm uppercase tracking-wide">Shop</h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/collections" onClick={scrollToTop} className="text-sm text-background/80 hover:text-background transition-colors">
                  All Products
                </NavLink>
              </li>
              <li>
                <NavLink to="/collections" onClick={scrollToTop} className="text-sm text-background/80 hover:text-background transition-colors">
                  Best Sellers
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h3 className="font-semibold text-background mb-4 text-sm uppercase tracking-wide">Customer Care</h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/contact" onClick={scrollToTop} className="text-sm text-background/80 hover:text-background transition-colors">
                  Contact Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/returns" onClick={scrollToTop} className="text-sm text-background/80 hover:text-background transition-colors">
                  Shipping & Returns
                </NavLink>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="font-semibold text-background mb-4 text-sm uppercase tracking-wide">About</h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/about" onClick={scrollToTop} className="text-sm text-background/80 hover:text-background transition-colors">
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/privacy-policy" onClick={scrollToTop} className="text-sm text-background/80 hover:text-background transition-colors">
                  Privacy Policy
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-background/80 text-sm">
            © {new Date().getFullYear()} DOMINE. All rights reserved.
          </p>
          <p className="text-background/70 text-xs mt-2">
            Operated by 2D Creation
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
