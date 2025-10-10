import { Mail, Phone, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">
              Get in Touch
            </h1>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Have questions about our products? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {/* Contact Person */}
              <div className="flex flex-col items-center text-center p-6 rounded-lg bg-card border border-border hover:border-accent transition-colors">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                  <span className="text-accent text-2xl font-bold">K</span>
                </div>
                <h4 className="text-sm font-semibold text-muted-foreground mb-2">
                  Contact Person
                </h4>
                <p className="text-foreground font-medium text-lg">Karthick</p>
              </div>

              {/* Email */}
              <div className="flex flex-col items-center text-center p-6 rounded-lg bg-card border border-border hover:border-accent transition-colors">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <h4 className="text-sm font-semibold text-muted-foreground mb-2">
                  Email
                </h4>
                <a 
                  href="mailto:karthick@domine.in"
                  className="text-foreground font-medium hover:text-accent transition-colors break-all"
                >
                  karthick@domine.in
                </a>
              </div>

              {/* Phone */}
              <div className="flex flex-col items-center text-center p-6 rounded-lg bg-card border border-border hover:border-accent transition-colors">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <h4 className="text-sm font-semibold text-muted-foreground mb-2">
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
              <div className="flex flex-col items-center text-center p-6 rounded-lg bg-card border border-border hover:border-accent transition-colors">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <h4 className="text-sm font-semibold text-muted-foreground mb-2">
                  Location
                </h4>
                <p className="text-foreground font-medium">
                  Tirupur, Tamil Nadu
                </p>
              </div>
            </div>

            {/* Additional Contact Info */}
            <div className="bg-card border border-border rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Business Hours
              </h3>
              <p className="text-muted-foreground mb-2">
                Monday - Saturday: 9:00 AM - 6:00 PM
              </p>
              <p className="text-muted-foreground">
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
