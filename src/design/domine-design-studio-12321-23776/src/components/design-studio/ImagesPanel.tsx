import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Camera, Star } from "lucide-react";

const images = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  name: `Photo ${i + 1}`,
}));

export const ImagesPanel = () => {
  return (
    <div className="space-y-4">
      <div className="flex gap-2 border-b border-border pb-3">
        <Button variant="ghost" className="flex-1 justify-start">
          <Camera className="w-4 h-4 mr-2" />
          Photos
        </Button>
        <Button variant="ghost" className="flex-1 justify-start">
          <Star className="w-4 h-4 mr-2" />
          Domine AI Images
        </Button>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search"
          className="pl-10 bg-background border-border"
        />
      </div>

      <div>
        <h3 className="text-sm font-semibold text-foreground mb-3">
          TRENDING PHOTOS
        </h3>
        <div className="grid grid-cols-2 gap-2">
          {images.map((image) => (
            <Card
              key={image.id}
              className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 hover:opacity-80 cursor-pointer transition-all border-border"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
