import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Circle, Flower2, Image as ImageIcon, Sparkles } from "lucide-react";

const categories = [
  { id: "shapes", name: "Shapes", icon: Circle },
  { id: "ornaments", name: "Ornaments", icon: Flower2 },
  { id: "illustrative", name: "Illustrative", icon: ImageIcon },
  { id: "abstract", name: "Abstract", icon: Sparkles },
];

const illustrations = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  name: `Illustration ${i + 1}`,
}));

export const IllustrationsPanel = () => {
  return (
    <div className="space-y-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search"
          className="pl-10 bg-background border-border"
        />
      </div>

      <div className="grid grid-cols-4 gap-2">
        {categories.map((cat) => {
          const Icon = cat.icon;
          return (
            <Button
              key={cat.id}
              variant="outline"
              className="flex-col h-auto py-3 border-border hover:bg-muted"
            >
              <Icon className="h-5 w-5 mb-1" />
              <span className="text-xs">{cat.name}</span>
            </Button>
          );
        })}
      </div>

      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-semibold text-foreground">All</h3>
          <Button variant="link" className="text-xs text-primary p-0 h-auto">
            Show All
          </Button>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {illustrations.map((item) => (
            <Card
              key={item.id}
              className="aspect-square bg-muted hover:bg-muted/70 cursor-pointer transition-all hover:shadow-glow border-border flex items-center justify-center"
            >
              <Circle className="h-8 w-8 text-muted-foreground" />
            </Card>
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-semibold text-foreground">Basic Shapes</h3>
          <Button variant="link" className="text-xs text-primary p-0 h-auto">
            Show All
          </Button>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {illustrations.slice(0, 3).map((item) => (
            <Card
              key={item.id}
              className="aspect-square bg-muted hover:bg-muted/70 cursor-pointer transition-all hover:shadow-glow border-border flex items-center justify-center"
            >
              <div className="w-12 h-12 bg-foreground rounded" />
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
