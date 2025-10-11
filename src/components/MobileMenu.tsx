import { Home, ShoppingBag, Palette, Mail } from "lucide-react";
import { NavLink } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import domineLogo from "@/assets/domine-logo.png";

const menuItems = [
  { title: "Home", url: "/", icon: Home },
  { title: "Collections", url: "/collections", icon: ShoppingBag },
  { title: "Design Studio", url: "/design-studio", icon: Palette },
  { title: "Contact", url: "/contact", icon: Mail },
];

export function MobileMenu() {
  return (
    <Sidebar className="w-64">
      <SidebarContent>
        <div className="p-6 border-b border-border">
          <img src={domineLogo} alt="DOMINE Logo" className="h-10 w-auto object-contain" />
        </div>
        
        <SidebarGroup>
          <SidebarGroupLabel className="px-4 py-2 text-xs uppercase tracking-wider text-muted-foreground">
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      end
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-4 py-3 transition-colors ${
                          isActive
                            ? "bg-accent/20 text-accent font-semibold"
                            : "text-foreground hover:bg-accent/10"
                        }`
                      }
                    >
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
