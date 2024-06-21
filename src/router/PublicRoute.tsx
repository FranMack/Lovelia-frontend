import { ReactNode, useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/userContext";

interface PrivateRouteProps {
  children: ReactNode;
}

export function PublicRoute({ children }: PrivateRouteProps) {
  const { email } = useContext(UserContext);

  return !email ? children : <Navigate to="/" />;
}
