import { NavLink } from "react-router-dom";
import domineLogo from "@/assets/domine-logo.png";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <img src={domineLogo} alt="DOMINE" className="h-8 w-auto mb-4" />
            <p className="text-sm text-muted-foreground">
              Premium men's clothing for those who lead.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wide">Shop</h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/collections" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  All Products
                </NavLink>
              </li>
              <li>
                <NavLink to="/collections" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Best Sellers
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h3 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wide">Customer Care</h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Contact Us
                </NavLink>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Returns
                </a>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wide">About</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} DOMINE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
