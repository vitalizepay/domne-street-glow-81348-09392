import { Facebook, Instagram, Youtube, MessageCircle } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useLocation } from "react-router-dom";

const socialLinks = [
  {
    name: "Facebook",
    icon: Facebook,
    url: "https://www.facebook.com/profile.php?id=61580278718458",
    ariaLabel: "Visit our Facebook page",
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://www.instagram.com/domine_mens_clothing?utm_source=qr&igsh=MWM0dDFkeXhlamx5ZA==",
    ariaLabel: "Follow us on Instagram",
  },
  {
    name: "YouTube",
    icon: Youtube,
    url: "https://youtube.com/@YOURCHANNEL",
    ariaLabel: "Subscribe to our YouTube channel",
  },
  {
    name: "WhatsApp",
    icon: MessageCircle,
    url: "https://wa.me/919791881884?text=Hi%20DOMINE!%20I'm%20interested%20in%20men's%20tees.",
    ariaLabel: "Chat with us on WhatsApp",
  },
];

const getIconColor = (name: string) => {
  const colors = {
    Facebook: "text-[#1877F2] bg-[#1877F2]/10 hover:bg-[#1877F2]/20",
    Instagram: "text-[#E4405F] bg-[#E4405F]/10 hover:bg-[#E4405F]/20",
    YouTube: "text-[#FF0000] bg-[#FF0000]/10 hover:bg-[#FF0000]/20",
    WhatsApp: "text-[#25D366] bg-[#25D366]/10 hover:bg-[#25D366]/20",
  };
  return colors[name as keyof typeof colors] || "text-accent bg-accent/20 hover:bg-accent/40";
};

const SocialDock = () => {
  const location = useLocation();
  
  // Only render on landing page
  if (location.pathname !== '/') {
    return null;
  }

  return (
    <TooltipProvider delayDuration={0}>
      <div className="fixed top-1/2 -translate-y-1/2 right-3 sm:right-6 z-[9999] animate-slide-in-right">
        <div className="flex flex-col gap-2 sm:gap-3.5 bg-background/30 backdrop-blur-md p-2 sm:p-3 rounded-full shadow-lg">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <Tooltip key={social.name}>
                <TooltipTrigger asChild>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.ariaLabel}
                    className={`w-10 h-10 sm:w-14 sm:h-14 flex items-center justify-center rounded-full transition-all duration-300 hover:-translate-x-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background ${getIconColor(social.name)}`}
                  >
                    <Icon className="w-4 h-4 sm:w-6 sm:h-6" />
                  </a>
                </TooltipTrigger>
                <TooltipContent side="left" className="animate-fade-in">
                  <p>{social.name}</p>
                </TooltipContent>
              </Tooltip>
            );
          })}
        </div>
      </div>
    </TooltipProvider>
  );
};

export default SocialDock;
