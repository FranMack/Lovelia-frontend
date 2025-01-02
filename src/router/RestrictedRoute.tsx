import {ReactNode, useContext} from 'react';
import {Navigate} from 'react-router-dom';
import {UserContext} from '../context';

interface Props {
  children: ReactNode;
}

export function RestrictedRoute({children}: Props) {
  const {email} = useContext(UserContext);

  let pathToRedirect = '/';
  if (
    email &&
    (location.pathname.includes('/checkout/digital') ||
      localStorage.getItem('pathToRedirect'))
  ) {
    pathToRedirect = '/checkout/digital';
  }

  return !email ? children : <Navigate to={pathToRedirect} />;
}
