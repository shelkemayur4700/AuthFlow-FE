import Dashboard from "@/pages/dashboard";
import { GaugeIcon } from "lucide-react";

export const authRoutes = [
  {
    path: "/dashboard",
    description: "This is for dashboard",
    Element: <Dashboard />,
    isShowOnSidebar: true,
    icon: GaugeIcon,
    title: "Dashboard",
  },
];
