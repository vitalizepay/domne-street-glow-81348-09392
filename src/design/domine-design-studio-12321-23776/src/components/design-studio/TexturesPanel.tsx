import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Grid3x3, Image } from "lucide-react";

const textures = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  name: `Texture ${i + 1}`,
}));

export const TexturesPanel = () => {
  return (
    <div className="space-y-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search"
          className="pl-10 bg-background border-border"
        />
      </div>

      <div className="flex gap-2">
        <Button
          variant="outline"
          className="flex-1 flex-col h-auto py-3 border-border"
        >
          <Grid3x3 className="h-5 w-5 mb-1" />
          <span className="text-xs">Textures</span>
        </Button>
        <Button
          variant="outline"
          className="flex-1 flex-col h-auto py-3 border-border"
        >
          <Image className="h-5 w-5 mb-1" />
          <span className="text-xs">Backgrounds</span>
        </Button>
      </div>

      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-semibold text-foreground">Grunge Textures</h3>
          <Button variant="link" className="text-xs text-primary p-0 h-auto">
            Show All
          </Button>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {textures.slice(0, 4).map((texture) => (
            <Card
              key={texture.id}
              className="aspect-square bg-muted/50 hover:bg-muted/70 cursor-pointer transition-all border-border"
            />
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-semibold text-foreground">Paper Textures</h3>
          <Button variant="link" className="text-xs text-primary p-0 h-auto">
            Show All
          </Button>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {textures.slice(0, 2).map((texture) => (
            <Card
              key={texture.id}
              className="aspect-square bg-muted/30 hover:bg-muted/50 cursor-pointer transition-all border-border"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
