import { ReactNode, useContext } from "react";
import { Navigate } from "react-router-dom";


interface PrivateRouteProps {
  children: ReactNode;
}

export function PrivateRoute({ children }: PrivateRouteProps) {

  const userInfoJSON = localStorage.getItem("userLogged") || "false";
  const userLogged=JSON.parse(userInfoJSON)

  return userLogged ? children : <Navigate to="/portal-usuario" />;
}
