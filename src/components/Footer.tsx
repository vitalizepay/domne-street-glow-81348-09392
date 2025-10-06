import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0B1236] border-t border-border/20 py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Get in Touch
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Contact Person */}
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-3">
                <span className="text-accent text-xl font-bold">K</span>
              </div>
              <h4 className="text-sm font-semibold text-muted-foreground mb-1">
                Contact Person
              </h4>
              <p className="text-foreground font-medium">Karthick</p>
            </div>

            {/* Email */}
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-3">
                <Mail className="w-5 h-5 text-accent" />
              </div>
              <h4 className="text-sm font-semibold text-muted-foreground mb-1">
                Email
              </h4>
              <a 
                href="mailto:karthick@domine.in"
                className="text-foreground font-medium hover:text-accent transition-colors"
              >
                karthick@domine.in
              </a>
            </div>

            {/* Phone */}
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-3">
                <Phone className="w-5 h-5 text-accent" />
              </div>
              <h4 className="text-sm font-semibold text-muted-foreground mb-1">
                Phone
              </h4>
              <a 
                href="tel:+919791881884"
                className="text-foreground font-medium hover:text-accent transition-colors"
              >
                +91 97918 81884
              </a>
            </div>

            {/* Location */}
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-3">
                <MapPin className="w-5 h-5 text-accent" />
              </div>
              <h4 className="text-sm font-semibold text-muted-foreground mb-1">
                Location
              </h4>
              <p className="text-foreground font-medium">
                Tirupur, Tamil Nadu
              </p>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-6 border-t border-border/20 text-center">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} DOMINE. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
