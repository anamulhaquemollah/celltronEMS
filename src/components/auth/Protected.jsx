import React from "react";
import { Navigate } from "react-router-dom";

const Protected = ({ children }) => {
  const loginToken = localStorage.getItem("token");
  const isLoggedIn = !!loginToken;

  if (isLoggedIn) {
    return children;
  }
  return <Navigate to="/login" replace />;
};

export default Protected;
