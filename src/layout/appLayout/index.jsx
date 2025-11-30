import React from "react";
import { AppSidebar } from "..";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

const AppLayout = ({ children }) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
};

export default AppLayout;
