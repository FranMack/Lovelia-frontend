import {ReactNode, useContext} from 'react';
import {Navigate} from 'react-router-dom';
import {UserContext} from '../context';
import {Loader} from '../ui/pages/Loader';

interface PrivateRouteProps {
  children: ReactNode;
}

export function PrivateRoute({children}: PrivateRouteProps) {
  const {email, loading} = useContext(UserContext);

  // Verificar si la cookie con el token existe
  const userSessionCookie = document.cookie.includes('token');

  // Evitar renderizar el contenido hasta que la información esté cargada
  if (loading) {
    return <Loader />; // Aquí puedes poner un spinner o cualquier indicador de carga
  }

  return userSessionCookie || email ? (
    children
  ) : (
    <Navigate to="/portal-usuario" />
  );
}
