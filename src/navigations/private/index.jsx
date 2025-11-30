import AppLayout from "@/layout/appLayout";
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { authRoutes } from "./routes";

const PrivateRoutes = () => {
  return (
    <AppLayout>
      <Routes>
        {authRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path.replace("/", "")} // Remove leading slash for nested routes
            element={route.Element}
          />
        ))}

        <Route
          path="*"
          element={
            authRoutes.length > 0 ? (
              <Navigate
                replace
                to={`/app/${authRoutes[0].path.replace(/^\//, "")}`}
              />
            ) : null
          }
        />
      </Routes>
    </AppLayout>
  );
};

export default PrivateRoutes;
