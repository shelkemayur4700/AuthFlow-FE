import { logout } from "@/redux/slice/user.slice";
import { LogOut, User2 } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useDispatch, useSelector } from "react-redux";

import { authRoutes } from "@/navigations/private/routes";

export function AppSidebar() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Sidebar className="flex flex-col border-r border-gray-200 bg-white text-gray-800">
      <SidebarContent>
        {/* ---- TOP SECTION ---- */}
        <SidebarGroup>
          <SidebarGroupLabel className="px-3 py-2 text-lg font-bold tracking-wide text-black uppercase">
            AuthFlow
          </SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {authRoutes.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a
                      href={item.url}
                      className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-all hover:bg-gray-100 hover:text-gray-900"
                    >
                      <item.icon className="h-5 w-5 text-gray-400" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* ---- BOTTOM USER SECTION ---- */}
      <SidebarFooter className="border-t border-gray-200 bg-white p-4">
        <div className="flex items-center justify-between">
          {/* User Info */}
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 bg-gray-100">
              <User2 className="h-5 w-5 text-gray-700" />
            </div>
            <div className="text-sm">
              <p className="font-medium text-gray-800">
                {user?.name || "User"}
              </p>
              <p className="text-xs text-gray-500">{user?.email || ""}</p>
            </div>
          </div>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="rounded-md p-2 transition hover:bg-gray-100"
            title="Logout"
          >
            <LogOut className="h-5 w-5 text-gray-700" />
          </button>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
