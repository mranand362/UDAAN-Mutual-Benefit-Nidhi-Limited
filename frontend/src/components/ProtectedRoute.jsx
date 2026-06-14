import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  const location = useLocation();
  
  if (!token) {
    // Save the page user wanted to visit
    // After login, user will come back to this page
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }
  
  return children;
};

export default ProtectedRoute;