import {ReactNode} from 'react';
import {Navigate, useLocation} from 'react-router-dom';

interface Props {
  children: ReactNode;
}

export function RestrictedRoute({children}: Props) {
  const location = useLocation(); // Importante: se necesita useLocation para obtener location.pathname

  const userSessionCookie = document.cookie.includes('token');

  let pathToRedirect = '/profile';

  // Lógica de redirección
  if (
    userSessionCookie &&
    (location.pathname.includes('/checkout/digital') ||
      localStorage.getItem('pathToRedirect'))
  ) {
    pathToRedirect = '/checkout/digital';
  }

  // Si no hay token, muestra los hijos (contenido restringido)
  return !userSessionCookie ? children : <Navigate to={pathToRedirect} />;
}
