import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, FileText, FolderOpen, Copy, Eye, Settings } from "lucide-react";

export const MenuDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="h-10 w-10">
          <Menu className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-56 bg-card border-border">
        <DropdownMenuItem className="cursor-pointer hover:bg-muted">
          <FileText className="mr-2 h-4 w-4" />
          <span>Create New Project</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer hover:bg-muted">
          <FolderOpen className="mr-2 h-4 w-4" />
          <span>My Projects</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer hover:bg-muted">
          <Copy className="mr-2 h-4 w-4" />
          <span>Duplicate Project</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator className="bg-border" />
        <DropdownMenuItem className="cursor-pointer hover:bg-muted">
          <Eye className="mr-2 h-4 w-4" />
          <span>View</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer hover:bg-muted">
          <Settings className="mr-2 h-4 w-4" />
          <span>Settings</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
