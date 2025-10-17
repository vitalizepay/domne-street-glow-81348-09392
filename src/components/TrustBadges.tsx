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
    <section className="py-12 px-4 bg-secondary/50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {badges.map((badge) => (
            <div key={badge.title} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent text-accent-foreground mb-3">
                <badge.icon className="h-6 w-6" />
              </div>
              <h3 className="text-sm font-semibold text-foreground mb-1">{badge.title}</h3>
              <p className="text-xs text-muted-foreground">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
