import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, Plus } from "lucide-react";
import { useState } from "react";

const brandStyles = [
  "Text Styles",
  "Color Styles",
  "Shadow Styles",
  "Text Shading Styles",
  "Text Decoration Styles",
  "Photo Filter Styles",
];

export const BrandKitsPanel = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Button
          variant="ghost"
          className="w-full justify-between px-3 hover:bg-muted"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <span className="font-semibold text-foreground">My Brand Kit (6)</span>
          {isExpanded ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </Button>

        {isExpanded && (
          <div className="space-y-1 pl-3">
            {brandStyles.map((style) => (
              <div
                key={style}
                className="flex items-center justify-between py-2 px-3 hover:bg-muted rounded cursor-pointer"
              >
                <span className="text-sm text-foreground">{style}</span>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-xs text-primary h-auto p-0"
                >
                  New Style
                </Button>
              </div>
            ))}
          </div>
        )}
      </div>

      <Button
        variant="outline"
        className="w-full border-border justify-start"
      >
        <Plus className="w-4 h-4 mr-2" />
        New Brand Kit
      </Button>
    </div>
  );
};
