import Dashboard from "@/pages/dashboard";
import { GaugeIcon } from "lucide-react";

export const authRoutes = [
  {
    path: "/dashboard",
    // access: [ROLE_NAMES.SUPER_ADMIN],
    description: "This is for dashboard",
    Element: <Dashboard />,
    isShowOnSidebar: true,
    icon: GaugeIcon,
    title: "Dashboard",
  },
  {
    path: "/workflow",
    // access: [ROLE_NAMES.SUPER_ADMIN],
    description: "This is workflow creation",
    Element: <Dashboard />,
    isShowOnSidebar: true,
    icon: GaugeIcon,
    title: "Workflow",
  },
];
