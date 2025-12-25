import * as React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import Logo from "@/assets/icon/Logo2.png";
import { useUserInfoQuery, useLogoutMutation } from "@/redux/features/auth/auth.api";
import { getSidebarItems } from "@/utils/getSidebarItems";
import { Button } from "@/components/ui/button";
import { Link, useLocation, useNavigate } from "react-router";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { data: userData } = useUserInfoQuery(undefined);
  const [logout] = useLogoutMutation();
  const navigate = useNavigate();
  const location = useLocation(); // For active route detection

  const handleLogout = async () => {
    try {
      await logout({}).unwrap();
    } catch (err) {
      console.error("Logout failed:", err);
    } finally {
      localStorage.removeItem("accessToken");
      navigate("/login");
    }
  };

  const sidebarItems = getSidebarItems(userData?.data?.role);

  return (
    <Sidebar {...props} className="flex flex-col h-screen bg-background border-r">
      {/* Logo/Header */}
      <SidebarHeader className="p-6 border-b">
        <Link to="/" className="flex justify-center">
          <img src={Logo} alt="Parcel Lift Logo" className="h-20 w-auto" />
        </Link>
      </SidebarHeader>

      {/* Menu Items */}
      <SidebarContent className="flex flex-col h-screen bg-background border-r overflow-hidden">
        {sidebarItems.map((group) => (
          <SidebarGroup key={group.title}>
            <SidebarGroupLabel className="px-6 text-lg font-semibold text-foreground/70 uppercase tracking-wider">
              {group.title}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => {
                  const isActive = location.pathname === item.url;

                  return (
                    <SidebarMenuItem key={item.url}>
                      <SidebarMenuButton
                        asChild
                        className={`
                          mx-4 my-1.5 rounded-lg
                          transition-all duration-300 ease-in-out
                          group
                          ${isActive
                            ? "bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/20"
                            : "text-muted-foreground hover:bg-accent hover:text-accent-foreground hover:shadow-md"
                          }
                        `}
                      >
                        <Link
                          to={item.url}
                          className="flex items-center px-5 py-3 text-base"
                        >
                          <span className={`
                            transition-all duration-300
                            ${isActive ? "translate-x-1" : "group-hover:translate-x-1"}
                          `}>
                            {item.title}
                          </span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>

      {/* Logout Button */}
      <div className="p-4 border-t bg-background">
        <Button
          onClick={handleLogout}
          variant="destructive"
          size="lg"
          className="w-full text-lg font-semibold hover:bg-red-600 transition-all duration-200 shadow-md"
        >
          Logout
        </Button>
      </div>

      <SidebarRail />
    </Sidebar>
  );
}