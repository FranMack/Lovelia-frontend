import {Suspense, lazy} from 'react';
import {Route} from 'react-router-dom';
import {Loader} from '../ui/pages/Loader.tsx';
import {RestrictedRoute} from './RestrictedRoute.tsx';
import ErrorBoundary from './ErrorBoundary.tsx';

const Register = lazy(() => import('../auth/views/Register.tsx'));
const Login = lazy(() => import('../auth/views/Login.tsx'));
const ForgetPassword = lazy(() => import('../auth/views/ForgetPassword.tsx'));
const NewPassword = lazy(() => import('../auth/views/NewPassword.tsx'));
const AuthFrontPage = lazy(() => import('../auth/views/AuthFrontPage.tsx'));

const publicRoutes = [
  {path: '/portal-usuario', component: <AuthFrontPage />},
  {path: '/login', component: <Login />},
  {path: '/register', component: <Register />},
  {path: '/forget-password', component: <ForgetPassword />},
  {path: '/reset-password', component: <NewPassword />},
];

export const RestrictedRoutesCollection = () =>
  publicRoutes.map(item => (
    <Route
      key={item.path} // Agrega una key para evitar advertencias de React
      path={item.path}
      element={
        <RestrictedRoute>
          <ErrorBoundary>
          <Suspense fallback={<Loader />}>{item.component}</Suspense>
          </ErrorBoundary>
        </RestrictedRoute>
      }
    />
  ));
