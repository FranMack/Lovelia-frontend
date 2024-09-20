import { ReactNode, useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/userContext";

interface PrivateRouteProps {
  children: ReactNode;
}

export function PrivateRoute({ children }: PrivateRouteProps) {
  const { email } = useContext(UserContext);

  //VER====>
  const cookieToken=document.cookie.includes("token")

  return cookieToken ? children : <Navigate to="/portal-usuario" />;
}
