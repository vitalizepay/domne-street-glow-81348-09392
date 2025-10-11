import { useState } from "react";
import { Eye, EyeOff, Lock, ChevronRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Layer {
  id: string;
  name: string;
  type: "text" | "image" | "shape" | "group";
  visible: boolean;
  locked: boolean;
  children?: Layer[];
}

const initialLayers: Layer[] = [
  { id: "1", name: "Ornament", type: "shape", visible: true, locked: false },
  { id: "2", name: "Gods Era", type: "text", visible: true, locked: false },
  { id: "3", name: "Head", type: "image", visible: true, locked: false },
  { id: "4", name: "Strip Lines", type: "shape", visible: true, locked: false },
  { id: "5", name: "Steeped in myth and legend", type: "text", visible: true, locked: false },
];

export const LayersPanel = () => {
  const [layers, setLayers] = useState<Layer[]>(initialLayers);
  const [expandedGroups, setExpandedGroups] = useState<Set<string>>(new Set());

  const toggleVisibility = (id: string) => {
    setLayers(layers.map(layer =>
      layer.id === id ? { ...layer, visible: !layer.visible } : layer
    ));
  };

  const toggleLock = (id: string) => {
    setLayers(layers.map(layer =>
      layer.id === id ? { ...layer, locked: !layer.locked } : layer
    ));
  };

  const getIcon = (type: Layer["type"]) => {
    switch (type) {
      case "text":
        return "T";
      case "image":
        return "🖼️";
      case "shape":
        return "◇";
      case "group":
        return "H";
      default:
        return "•";
    }
  };

  return (
    <div className="space-y-1">
      {layers.map((layer) => (
        <div
          key={layer.id}
          className="flex items-center gap-2 px-2 py-2 hover:bg-muted/50 rounded cursor-pointer group"
        >
          {layer.type === "group" && (
            <Button
              variant="ghost"
              size="icon"
              className="h-5 w-5 p-0"
              onClick={() => {
                const newExpanded = new Set(expandedGroups);
                if (newExpanded.has(layer.id)) {
                  newExpanded.delete(layer.id);
                } else {
                  newExpanded.add(layer.id);
                }
                setExpandedGroups(newExpanded);
              }}
            >
              {expandedGroups.has(layer.id) ? (
                <ChevronDown className="h-3 w-3" />
              ) : (
                <ChevronRight className="h-3 w-3" />
              )}
            </Button>
          )}
          
          <span className="text-xs w-4">{getIcon(layer.type)}</span>
          
          <span className="flex-1 text-sm text-foreground truncate">
            {layer.name}
          </span>
          
          <Button
            variant="ghost"
            size="icon"
            className="h-5 w-5 p-0 opacity-0 group-hover:opacity-100"
            onClick={(e) => {
              e.stopPropagation();
              toggleVisibility(layer.id);
            }}
          >
            {layer.visible ? (
              <Eye className="h-3 w-3" />
            ) : (
              <EyeOff className="h-3 w-3 text-muted-foreground" />
            )}
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            className="h-5 w-5 p-0 opacity-0 group-hover:opacity-100"
            onClick={(e) => {
              e.stopPropagation();
              toggleLock(layer.id);
            }}
          >
            {layer.locked && <Lock className="h-3 w-3" />}
          </Button>
        </div>
      ))}
    </div>
  );
};
