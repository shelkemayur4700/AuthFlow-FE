import LoginPage from "@/pages/login";
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path={"/*"} element={<Navigate replace to={`/login`} />} />
    </Routes>
  );
};

export default PublicRoutes;
