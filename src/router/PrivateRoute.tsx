import {ReactNode, useContext} from 'react';
import {Navigate, useLocation} from 'react-router-dom';
import {UserContext} from '../context';

interface PrivateRouteProps {
  children: ReactNode;
}

export function PrivateRoute({children}: PrivateRouteProps) {
  const {email} = useContext(UserContext);

  const location = useLocation();

  // When user comes from mail link, we need to save the path to redirect after login
  // Only when user is in checkout/digital
  if (location.pathname.includes('/checkout/digital')) {
    localStorage.setItem('checkoutPath', '/checkout/digital');
  }

  console.log('PrivateRoute', email);

  return email ? children : <Navigate to="/portal-usuario" />;
}
