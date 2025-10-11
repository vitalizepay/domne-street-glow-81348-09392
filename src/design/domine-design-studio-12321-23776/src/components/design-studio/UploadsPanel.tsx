import { Button } from "@/components/ui/button";
import { Upload, FolderPlus } from "lucide-react";

export const UploadsPanel = () => {
  return (
    <div className="space-y-4">
      <Button className="w-full bg-gradient-violet justify-start">
        <Upload className="w-4 h-4 mr-2" />
        Upload (PNG, JPG, SVG, WEBP)
      </Button>

      <Button variant="outline" className="w-full border-border justify-start">
        <FolderPlus className="w-4 h-4 mr-2" />
        Add New Folder
      </Button>

      <div className="flex gap-2 border-b border-border pb-3">
        <Button variant="ghost" className="text-sm font-semibold">
          Uploads
        </Button>
        <Button variant="ghost" className="text-sm text-muted-foreground">
          Folders
        </Button>
      </div>

      <div className="text-center py-12">
        <p className="text-sm text-muted-foreground">No uploads yet</p>
        <p className="text-xs text-muted-foreground mt-1">
          Upload your images to get started
        </p>
      </div>
    </div>
  );
};
