import React from "react";
import ThemeSwitch from "./components/theme-switch";
import { HashRouter } from "react-router-dom";
import Root from "./navigations";

const App = () => {
  return (
    <HashRouter>
      <Root />
    </HashRouter>
  );
};

export default App;
