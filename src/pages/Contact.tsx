import { Mail, Phone, MapPin } from "lucide-react";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  useEffect(() => {
    document.title = "Contact | DOMINE Tees";
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', "Contact DOMINE Tees – email, phone, and location for support and inquiries.");

    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', window.location.origin + '/contact');
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">
              Get in Touch
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground text-center mb-12 sm:mb-16 max-w-2xl mx-auto px-4">
              Have questions about our products? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
            
            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
              {/* Contact Person */}
              <div className="flex flex-col items-center text-center p-6 sm:p-8 rounded-2xl bg-card border-2 border-border hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/10">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-accent/20 flex items-center justify-center mb-4 transition-transform hover:scale-110">
                  <span className="text-accent text-2xl sm:text-3xl font-bold">K</span>
                </div>
                <h4 className="text-xs sm:text-sm font-semibold text-muted-foreground mb-2 uppercase tracking-wide">
                  Contact Person
                </h4>
                <p className="text-foreground font-medium text-base sm:text-lg">Karthick</p>
              </div>

              {/* Email */}
              <div className="flex flex-col items-center text-center p-6 sm:p-8 rounded-2xl bg-card border-2 border-border hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/10">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-accent/20 flex items-center justify-center mb-4 transition-transform hover:scale-110">
                  <Mail className="w-7 h-7 sm:w-8 sm:h-8 text-accent" />
                </div>
                <h4 className="text-xs sm:text-sm font-semibold text-muted-foreground mb-2 uppercase tracking-wide">
                  Email
                </h4>
                <a 
                  href="mailto:karthick@domine.in"
                  className="text-foreground font-medium text-sm sm:text-base hover:text-accent transition-colors break-all px-2"
                >
                  karthick@domine.in
                </a>
              </div>

              {/* Phone */}
              <div className="flex flex-col items-center text-center p-6 sm:p-8 rounded-2xl bg-card border-2 border-border hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/10">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-accent/20 flex items-center justify-center mb-4 transition-transform hover:scale-110">
                  <Phone className="w-7 h-7 sm:w-8 sm:h-8 text-accent" />
                </div>
                <h4 className="text-xs sm:text-sm font-semibold text-muted-foreground mb-2 uppercase tracking-wide">
                  Phone
                </h4>
                <a 
                  href="tel:+919791881884"
                  className="text-foreground font-medium text-base sm:text-lg hover:text-accent transition-colors"
                >
                  +91 97918 81884
                </a>
              </div>

              {/* Location */}
              <div className="flex flex-col items-center text-center p-6 sm:p-8 rounded-2xl bg-card border-2 border-border hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/10">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-accent/20 flex items-center justify-center mb-4 transition-transform hover:scale-110">
                  <MapPin className="w-7 h-7 sm:w-8 sm:h-8 text-accent" />
                </div>
                <h4 className="text-xs sm:text-sm font-semibold text-muted-foreground mb-2 uppercase tracking-wide">
                  Location
                </h4>
                <p className="text-foreground font-medium text-base sm:text-lg">
                  Tirupur, Tamil Nadu
                </p>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-card border-2 border-border rounded-2xl p-8 sm:p-10 text-center hover:border-accent/50 transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-6">
                Business Hours
              </h3>
              <div className="space-y-3">
                <p className="text-sm sm:text-base text-muted-foreground">
                  Monday - Saturday: 9:00 AM - 6:00 PM
                </p>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
