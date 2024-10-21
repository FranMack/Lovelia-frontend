import { ReactNode } from "react";
import { Navigate } from "react-router-dom";



interface PrivateRouteProps {
  children: ReactNode;
}

export function PublicRoute({ children }: PrivateRouteProps) {
  const userInfoJSON = localStorage.getItem("userLogged") || "false";
  const userLogged=JSON.parse(userInfoJSON)

  return !userLogged ? children : <Navigate to="/" />;
}
