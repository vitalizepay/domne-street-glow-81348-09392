import { X } from "lucide-react";
import { useState } from "react";

const PromoBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-accent text-accent-foreground py-2.5 px-4 text-center text-sm relative">
      <p className="font-medium">
        Use Code: <span className="font-bold">DOMINE15</span> for 15% OFF* on First Order
      </p>
    </div>
  );
};

export default PromoBanner;
