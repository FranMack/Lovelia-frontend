import { ReactNode, useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context";


interface Props {
  children: ReactNode;
}

export function RestrictedRoute({ children }: Props) {
  const {email}=useContext(UserContext)
  return !email ? children : <Navigate to="/" />;
}
