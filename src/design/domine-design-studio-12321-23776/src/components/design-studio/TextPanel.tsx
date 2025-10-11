import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Type, AlignLeft } from "lucide-react";

const textStyles = {
  vintage: ["Bourbon 10 Years", "Blacksmith Brewery", "Handcrafted"],
  paragraphs: ["Summer Trends", "New Collection", "London, New York"],
  titles: ["Summer Sale", "Amour", "Holiday"],
  decorated: ["Blue High", "Golden Times", "Luxury"],
};

export const TextPanel = () => {
  return (
    <div className="space-y-4">
      <Button className="w-full bg-gradient-violet justify-start">
        <Type className="w-4 h-4 mr-2" />
        Add Headline
      </Button>
      
      <Button variant="outline" className="w-full border-border justify-start">
        <AlignLeft className="w-4 h-4 mr-2" />
        Add Paragraph
      </Button>

      {Object.entries(textStyles).map(([category, items]) => (
        <div key={category}>
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold text-foreground capitalize">
              {category}
            </h3>
            <Button variant="link" className="text-xs text-primary p-0 h-auto">
              Show All
            </Button>
          </div>
          <div className="space-y-2">
            {items.map((item, idx) => (
              <Card
                key={idx}
                className="p-4 bg-muted hover:bg-muted/70 cursor-pointer transition-all border-border"
              >
                <p className="text-sm text-foreground font-medium">{item}</p>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
