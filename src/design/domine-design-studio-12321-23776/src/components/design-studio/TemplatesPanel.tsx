// src/components/design-studio/TemplatesPanel.tsx

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { useCanvasStore } from "@/store/canvasStore";
import { toast } from "sonner";

// Import all 34 template images (1.png to 34.png) - CORRECTED PATHS
import template1 from "@/assets/templates/1.png";
import template2 from "@/assets/templates/2.png";
import template3 from "@/assets/templates/3.png";
import template4 from "@/assets/templates/4.png";
import template5 from "@/assets/templates/5.png";
import template6 from "@/assets/templates/6.png";
import template7 from "@/assets/templates/7.png";
import template8 from "@/assets/templates/8.png";
import template9 from "@/assets/templates/9.png";
import template10 from "@/assets/templates/10.png";
import template11 from "@/assets/templates/11.png";
import template12 from "@/assets/templates/12.png";
import template13 from "@/assets/templates/13.png";
import template14 from "@/assets/templates/14.png";
import template15 from "@/assets/templates/15.png";
import template16 from "@/assets/templates/16.png";
import template17 from "@/assets/templates/17.png";
import template18 from "@/assets/templates/18.png";
import template19 from "@/assets/templates/19.png";
import template20 from "@/assets/templates/20.png";
import template21 from "@/assets/templates/21.png";
import template22 from "@/assets/templates/22.png";
import template23 from "@/assets/templates/23.png";
import template24 from "@/assets/templates/24.png";
import template25 from "@/assets/templates/25.png";
import template26 from "@/assets/templates/26.png";
import template27 from "@/assets/templates/27.png";
import template28 from "@/assets/templates/28.png";
import template29 from "@/assets/templates/29.png";
import template30 from "@/assets/templates/30.png";
import template31 from "@/assets/templates/31.png";
import template32 from "@/assets/templates/32.png";
import template33 from "@/assets/templates/33.png";
import template34 from "@/assets/templates/34.png";

const categories = ["All", "Marketing", "Merchandise", "Social"];

const templates = [
  { id: 1, name: "Template 1", src: template1, category: "Merchandise" },
  { id: 2, name: "Template 2", src: template2, category: "Merchandise" },
  { id: 3, name: "Template 3", src: template3, category: "Marketing" },
  { id: 4, name: "Template 4", src: template4, category: "Marketing" },
  { id: 5, name: "Template 5", src: template5, category: "Social" },
  { id: 6, name: "Template 6", src: template6, category: "Social" },
  { id: 7, name: "Template 7", src: template7, category: "Merchandise" },
  { id: 8, name: "Template 8", src: template8, category: "Social" },
  { id: 9, name: "Template 9", src: template9, category: "Marketing" },
  { id: 10, name: "Template 10", src: template10, category: "Merchandise" },
  { id: 11, name: "Template 11", src: template11, category: "Marketing" },
  { id: 12, name: "Template 12", src: template12, category: "Social" },
  { id: 13, name: "Template 13", src: template13, category: "Merchandise" },
  { id: 14, name: "Template 14", src: template14, category: "Marketing" },
  { id: 15, name: "Template 15", src: template15, category: "Social" },
  { id: 16, name: "Template 16", src: template16, category: "Merchandise" },
  { id: 17, name: "Template 17", src: template17, category: "Marketing" },
  { id: 18, name: "Template 18", src: template18, category: "Social" },
  { id: 19, name: "Template 19", src: template19, category: "Merchandise" },
  { id: 20, name: "Template 20", src: template20, category: "Marketing" },
  { id: 21, name: "Template 21", src: template21, category: "Social" },
  { id: 22, name: "Template 22", src: template22, category: "Merchandise" },
  { id: 23, name: "Template 23", src: template23, category: "Marketing" },
  { id: 24, name: "Template 24", src: template24, category: "Social" },
  { id: 25, name: "Template 25", src: template25, category: "Merchandise" },
  { id: 26, name: "Template 26", src: template26, category: "Marketing" },
  { id: 27, name: "Template 27", src: template27, category: "Social" },
  { id: 28, name: "Template 28", src: template28, category: "Merchandise" },
  { id: 29, name: "Template 29", src: template29, category: "Marketing" },
  { id: 30, name: "Template 30", src: template30, category: "Social" },
  { id: 31, name: "Template 31", src: template31, category: "Merchandise" },
  { id: 32, name: "Template 32", src: template32, category: "Marketing" },
  { id: 33, name: "Template 33", src: template33, category: "Social" },
  { id: 34, name: "Template 34", src: template34, category: "Merchandise" },
];

export const TemplatesPanel = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  
  const addObject = useCanvasStore((state) => state.addObject);
  const saveHistory = useCanvasStore((state) => state.saveHistory);

  // Filter templates based on category and search
  const filteredTemplates = templates.filter((template) => {
    const matchesCategory = selectedCategory === "All" || template.category === selectedCategory;
    const matchesSearch = template.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleTemplateClick = (template: typeof templates[0]) => {
    addObject({
      type: 'image',
      x: 150,
      y: 200,
      width: 200,
      height: 200,
      src: template.src,
      name: template.name,
    });
    saveHistory();
    toast.success(`Template added!`);
  };

  return (
    <div className="space-y-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search templates..."
          className="pl-10 bg-background border-border"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="flex gap-2 flex-wrap">
        {categories.map((cat) => (
          <Button
            key={cat}
            variant={selectedCategory === cat ? "default" : "outline"}
            size="sm"
            className="text-xs"
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </Button>
        ))}
      </div>

      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-semibold text-foreground">
            {selectedCategory === "All" ? "All Templates" : selectedCategory}
          </h3>
          <span className="text-xs text-muted-foreground">
            {filteredTemplates.length} templates
          </span>
        </div>
        <div className="grid grid-cols-2 gap-3 max-h-[calc(100vh-300px)] overflow-y-auto pr-2">
          {filteredTemplates.map((template) => (
            <Card
              key={template.id}
              className="aspect-square bg-muted hover:bg-muted/70 cursor-pointer transition-all hover:shadow-glow border-border overflow-hidden group"
              onClick={() => handleTemplateClick(template)}
            >
              <img 
                src={template.src} 
                alt={template.name}
                className="w-full h-full object-cover transition-transform group-hover:scale-105"
              />
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
