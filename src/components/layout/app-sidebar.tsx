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
import { Link, useNavigate } from "react-router";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { data: userData } = useUserInfoQuery(undefined);
  const [logout] = useLogoutMutation();
  const navigate = useNavigate();

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

  const data = {
    navMain: getSidebarItems(userData?.data?.role),
  };

  return (
    <Sidebar {...props} className="flex flex-col h-screen">
      {/* Logo/Header */}
      <SidebarHeader className="items-center">
        <Link to="/">
          <img src={Logo} alt="Logo" className="h-20 mt-5 w-auto" />
        </Link>
      </SidebarHeader>

      {/* Menu Items */}
      <SidebarContent className="flex-1 overflow-y-auto">
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link to={item.url}>{item.title}</Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>

      {/* Logout Button */}
      <div className="p-4 border-t">
        <Button className="w-full bg-red-400 text-xl font-semibold hover:bg-yellow-400" onClick={handleLogout}>
          Logout
        </Button>
      </div>

      <SidebarRail />
    </Sidebar>
  );
}