import { Truck, Shield, RotateCcw, Gift } from "lucide-react";

const TrustBadges = () => {
  const badges = [
    {
      icon: Truck,
      title: "Free Shipping",
      description: "On orders above ₹999",
    },
    {
      icon: Shield,
      title: "Secure Payment",
      description: "100% secure payment",
    },
    {
      icon: RotateCcw,
      title: "Easy Returns",
      description: "7 days return policy",
    },
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-transparent to-[hsl(var(--landing-primary))] relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_1px,transparent_1px),linear-gradient(to_bottom,transparent_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-10"></div>
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {badges.map((badge) => (
            <div key={badge.title} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[hsl(var(--landing-gold))] text-white mb-4 shadow-lg group-hover:shadow-[0_0_30px_rgba(var(--landing-gold))] transition-all duration-300 group-hover:scale-110">
                <badge.icon className="h-7 w-7" />
              </div>
              <h3 className="text-base font-bold text-[hsl(var(--landing-text-hero))] mb-2">{badge.title}</h3>
              <p className="text-sm text-[hsl(var(--landing-text-muted))]">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
