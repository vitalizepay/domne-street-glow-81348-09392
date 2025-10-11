import { Button } from "@/components/ui/button";
import { Eye, EyeOff, Lock, Unlock, Trash2, Copy, ChevronUp, ChevronDown } from "lucide-react";
import { useCanvasStore } from "@/store/canvasStore";
import { cn } from "@/lib/utils";

export const EnhancedLayersPanel = () => {
  const currentView = useCanvasStore((state) => state.currentView);
  const views = useCanvasStore((state) => state.views);
  const selectedId = useCanvasStore((state) => state.selectedId);
  const setSelectedId = useCanvasStore((state) => state.setSelectedId);
  const updateObject = useCanvasStore((state) => state.updateObject);
  const removeObject = useCanvasStore((state) => state.removeObject);
  const duplicateObject = useCanvasStore((state) => state.duplicateObject);
  const ungroupObject = useCanvasStore((state) => state.ungroupObject);
  const moveObjectUp = useCanvasStore((state) => state.moveObjectUp);
  const moveObjectDown = useCanvasStore((state) => state.moveObjectDown);
  
  const objects = views[currentView].objects;

  return (
    <div className="space-y-2">
      {objects.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-sm text-muted-foreground">No layers yet</p>
          <p className="text-xs text-muted-foreground mt-1">
            Add elements to your design
          </p>
        </div>
      ) : (
        <div className="space-y-1">
          {[...objects].reverse().map((obj) => (
            <div
              key={obj.id}
              className={cn(
                "flex items-center gap-2 p-2 rounded-lg border transition-all hover:bg-muted/50",
                selectedId === obj.id ? "bg-primary/10 border-primary" : "bg-card border-border"
              )}
              onClick={() => setSelectedId(obj.id)}
            >
              <div className="flex items-center gap-1">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-6 w-6"
                  onClick={(e) => {
                    e.stopPropagation();
                    updateObject(obj.id, { visible: !obj.visible });
                  }}
                >
                  {obj.visible !== false ? (
                    <Eye className="h-3 w-3" />
                  ) : (
                    <EyeOff className="h-3 w-3 text-muted-foreground" />
                  )}
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-6 w-6"
                  onClick={(e) => {
                    e.stopPropagation();
                    updateObject(obj.id, { locked: !obj.locked });
                  }}
                >
                  {obj.locked ? (
                    <Lock className="h-3 w-3" />
                  ) : (
                    <Unlock className="h-3 w-3 text-muted-foreground" />
                  )}
                </Button>
              </div>

              <span className="flex-1 text-sm text-foreground truncate">
                {obj.name || `${obj.type} ${obj.id.slice(-4)}`}
              </span>

              <div className="flex items-center gap-1">
                {obj.type === 'group' && (
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-6 w-6"
                    onClick={(e) => {
                      e.stopPropagation();
                      ungroupObject(obj.id);
                    }}
                    title="Ungroup"
                  >
                    <span className="text-xs">⊟</span>
                  </Button>
                )}
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-6 w-6"
                  onClick={(e) => {
                    e.stopPropagation();
                    moveObjectUp(obj.id);
                  }}
                  title="Move Up"
                >
                  <ChevronUp className="h-3 w-3" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-6 w-6"
                  onClick={(e) => {
                    e.stopPropagation();
                    moveObjectDown(obj.id);
                  }}
                  title="Move Down"
                >
                  <ChevronDown className="h-3 w-3" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-6 w-6"
                  onClick={(e) => {
                    e.stopPropagation();
                    duplicateObject(obj.id);
                  }}
                  title="Duplicate"
                >
                  <Copy className="h-3 w-3" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-6 w-6 text-destructive"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeObject(obj.id);
                  }}
                  title="Delete"
                >
                  <Trash2 className="h-3 w-3" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
