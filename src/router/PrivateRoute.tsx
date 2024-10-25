import { ReactNode, useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context";


interface PrivateRouteProps {
  children: ReactNode;
}

export function PrivateRoute({ children }: PrivateRouteProps) {

  const {email}=useContext(UserContext)

  return email ? children : <Navigate to="/portal-usuario" />;

}
