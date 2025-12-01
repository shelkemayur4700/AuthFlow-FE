import React from "react";
import ThemeSwitch from "./components/theme-switch";
import { HashRouter } from "react-router-dom";
import Root from "./navigations";
import { Toaster } from "@/components/ui/sonner";

const App = () => {
  return (
    <HashRouter>
      <Root />
      <Toaster position="top-right" closeButton={true} duration={3000} />
    </HashRouter>
  );
};

export default App;
