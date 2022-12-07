import React from "react";
import { Navigate } from "react-router-dom";

const LoginProtected = ({ children }) => {
  const token = localStorage.getItem("token");
  const preventLoginForm = !!token;
  if (preventLoginForm) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default LoginProtected;
