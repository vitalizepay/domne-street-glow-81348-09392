import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import {
  Trash2,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  RotateCw,
  FlipHorizontal,
  FlipVertical,
  Sun,
  Moon,
} from "lucide-react";
import { useCanvasStore } from "@/store/canvasStore";
import { toast } from "sonner";

export const ObjectControls = () => {
  const selectedId = useCanvasStore((state) => state.selectedId);
  const currentView = useCanvasStore((state) => state.currentView);
  const objects = useCanvasStore((state) => state.views[currentView].objects);
  const updateObject = useCanvasStore((state) => state.updateObject);
  const removeObject = useCanvasStore((state) => state.removeObject);
  const moveObjectUp = useCanvasStore((state) => state.moveObjectUp);
  const moveObjectDown = useCanvasStore((state) => state.moveObjectDown);
  const saveHistory = useCanvasStore((state) => state.saveHistory);
  const setSelectedId = useCanvasStore((state) => state.setSelectedId);

  const selectedObject = objects.find((obj) => obj.id === selectedId);

  const [scale, setScale] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [brightness, setBrightness] = useState(0);
  const [contrast, setContrast] = useState(0);

  useEffect(() => {
    if (selectedObject) {
      setScale(selectedObject.scaleX || 1);
      setRotation(selectedObject.rotation || 0);
      setBrightness(selectedObject.brightness || 0);
      setContrast(selectedObject.contrast || 0);
    }
  }, [selectedObject]);

  if (!selectedObject) {
    return (
      <Card className="p-4 bg-card border-border">
        <p className="text-sm text-muted-foreground text-center">
          Click on a template to edit it
        </p>
      </Card>
    );
  }

  const handleUpdate = (props: object) => {
    if (!selectedId) return;
    updateObject(selectedId, props);
    saveHistory();
  };

  const handleDelete = () => {
    if (!selectedId) return;
    removeObject(selectedId);
    setSelectedId(null);
    saveHistory();
    toast.success("Template removed!");
  };

  return (
    <Card className="p-4 bg-card border-border space-y-4">
      <div>
        <h3 className="text-sm font-semibold text-foreground mb-3">Edit Template</h3>
        <p className="text-xs text-muted-foreground mb-4 truncate">
          {selectedObject.name || "Untitled"}
        </p>
      </div>

      {/* Scale Control */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label className="text-sm">Scale</Label>
          <span className="text-xs text-muted-foreground">{Math.round(scale * 100)}%</span>
        </div>
        <Slider
          value={[scale]}
          onValueChange={(val) => {
            setScale(val[0]);
            handleUpdate({ scaleX: val[0], scaleY: val[0] });
          }}
          min={0.1}
          max={3}
          step={0.01}
        />
      </div>

      {/* Rotation Control */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label className="text-sm">Rotation</Label>
          <span className="text-xs text-muted-foreground">{Math.round(rotation)}°</span>
        </div>
        <Slider
          value={[rotation]}
          onValueChange={(val) => {
            setRotation(val[0]);
            handleUpdate({ rotation: val[0] });
          }}
          min={0}
          max={360}
          step={1}
        />
      </div>

      {/* Brightness Control */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label className="text-sm flex items-center gap-2">
            <Sun className="h-4 w-4" /> Brightness
          </Label>
          <span className="text-xs text-muted-foreground">{Math.round(brightness * 100)}</span>
        </div>
        <Slider
          value={[brightness]}
          onValueChange={(val) => {
            setBrightness(val[0]);
            handleUpdate({ brightness: val[0] });
          }}
          min={-1}
          max={1}
          step={0.05}
        />
      </div>

      {/* Contrast Control */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label className="text-sm flex items-center gap-2">
            <Moon className="h-4 w-4" /> Contrast
          </Label>
          <span className="text-xs text-muted-foreground">{Math.round(contrast)}</span>
        </div>
        <Slider
          value={[contrast]}
          onValueChange={(val) => {
            setContrast(val[0]);
            handleUpdate({ contrast: val[0] });
          }}
          min={-100}
          max={100}
          step={5}
        />
      </div>

      {/* Flip & Layer Controls */}
      <div className="grid grid-cols-2 gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => handleUpdate({ scaleX: (selectedObject.scaleX || 1) * -1 })}
        >
          <FlipHorizontal className="h-4 w-4 mr-2" /> Flip H
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => handleUpdate({ scaleY: (selectedObject.scaleY || 1) * -1 })}
        >
          <FlipVertical className="h-4 w-4 mr-2" /> Flip V
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            moveObjectDown(selectedId!);
            saveHistory();
          }}
        >
          <ChevronLeft className="h-4 w-4 mr-2" /> Back
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            moveObjectUp(selectedId!);
            saveHistory();
          }}
        >
          Forward <ChevronRight className="h-4 w-4 ml-2" />
        </Button>
      </div>

      {/* Delete Button */}
      <div className="pt-4 border-t border-border">
        <Button variant="destructive" size="sm" className="w-full" onClick={handleDelete}>
          <Trash2 className="h-4 w-4 mr-2" /> Remove Template
        </Button>
      </div>
    </Card>
  );
};
