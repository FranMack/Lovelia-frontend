import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  children: ReactNode;
}

export function PrivateRoute({ children }: PrivateRouteProps) {
  const cookieToken = document.cookie.includes("token");

  return cookieToken ? children : <Navigate to="/portal-usuario" />;
}
