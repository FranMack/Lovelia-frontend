import React, { useContext, ReactNode } from "react";
import { UserContext } from "../context/userContext";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  children: ReactNode;
}

export function PrivateRoute({ children }: PrivateRouteProps) {
  const { email } = useContext(UserContext);

  return email ? children : <Navigate to="/" />;
}
