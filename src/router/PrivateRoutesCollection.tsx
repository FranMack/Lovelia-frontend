import {lazy} from 'react';
import {Route} from 'react-router-dom';

const Profile = lazy(() => import('../profile/views/Profile.tsx'));
const MyTalisman = lazy(() => import('../myTalisman/views/MyTalisman.tsx'));
const CheckOutDigital = lazy(
  () => import('../checkout/views/CheckOutDigital.tsx'),
);

const privateRoutes = [
  {path: '/profile', component: <Profile />},
  {path: '/checkout/digital', component: <CheckOutDigital />},
  {path: '/myTalisman', component: <MyTalisman />},
];

export const PrivatesRoutesCollection = () =>
  privateRoutes.map(item => (
    <Route
      key={item.path} // Agrega una key para evitar advertencias de React
      path={item.path}
      element={item.component}
    />
  ));
