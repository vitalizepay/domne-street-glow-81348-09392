import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useCanvasStore } from "@/store/canvasStore";

const presetColors = [
  { name: 'White', value: '#FFFFFF' },
  { name: 'Black', value: '#000000' },
  { name: 'Navy', value: '#0F172A' },
  { name: 'Grey', value: '#9CA3AF' },
  { name: 'Red', value: '#D94F4F' },
  { name: 'Olive', value: '#6B8E23' }
];

export const TShirtColorPicker = () => {
  const currentView = useCanvasStore((state) => state.currentView);
  const views = useCanvasStore((state) => state.views);
  const setTShirtColor = useCanvasStore((state) => state.setTShirtColor);
  
  const currentColor = views[currentView].tshirtColor;
  const [applyToAll, setApplyToAll] = useState(false);

  const handleColorChange = (color: string) => {
    setTShirtColor(color, applyToAll);
  };

  return (
    <div className="space-y-4">
      <div>
        <Label className="text-sm font-semibold text-foreground mb-3 block">
          T-shirt Color
        </Label>
        
        <div className="grid grid-cols-3 gap-2 mb-4">
          {presetColors.map((color) => (
            <button
              key={color.value}
              className="group relative aspect-square rounded-lg border-2 transition-all hover:scale-105"
              style={{ 
                backgroundColor: color.value,
                borderColor: currentColor === color.value ? 'hsl(262 83% 58%)' : 'hsl(240 8% 20%)'
              }}
              onClick={() => handleColorChange(color.value)}
              title={color.name}
            >
              {currentColor === color.value && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-3 h-3 bg-primary rounded-full" />
                </div>
              )}
            </button>
          ))}
        </div>

        <div className="space-y-3">
          <div className="flex gap-2">
            <Input
              type="color"
              value={currentColor}
              onChange={(e) => handleColorChange(e.target.value)}
              className="w-16 h-10 p-1 cursor-pointer"
            />
            <Input
              type="text"
              value={currentColor}
              onChange={(e) => handleColorChange(e.target.value)}
              placeholder="#FFFFFF"
              className="flex-1 font-mono"
            />
          </div>

          <div className="flex items-center justify-between">
            <Label htmlFor="apply-all" className="text-sm text-muted-foreground">
              Apply to all views
            </Label>
            <Switch
              id="apply-all"
              checked={applyToAll}
              onCheckedChange={setApplyToAll}
            />
          </div>
        </div>
      </div>

      <div className="p-3 bg-muted/30 rounded-lg border border-border">
        <div className="flex items-center gap-3">
          <div
            className="w-12 h-12 rounded border-2 border-border"
            style={{ backgroundColor: currentColor }}
          />
          <div>
            <p className="text-xs text-muted-foreground">Preview</p>
            <p className="text-sm font-mono text-foreground">{currentColor}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
