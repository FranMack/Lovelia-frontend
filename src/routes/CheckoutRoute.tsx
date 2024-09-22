import { ReactNode, useContext } from 'react'
import { Navigate } from "react-router-dom";
import { ShopingCartContext } from '../context/shopingCart.context';
interface PrivateRouteProps {
    children: ReactNode;
  }

export const CheckoutRoute = ({children}:PrivateRouteProps) => {

    const{shopingCartItems}=useContext(ShopingCartContext)

  return shopingCartItems.length>0 ? children:<Navigate to="/#plans"/>}
  

