import {Suspense, lazy} from 'react';
import {Route} from 'react-router-dom';
import {Loader} from '../ui/pages/Loader.tsx';

const Home = lazy(() => import('../home/views/Home'));
const TalismanInfo = lazy(() => import('../talisman/views/TalismanInfo.tsx'));
const TalismanAnalogic = lazy(
  () => import('../talismanAnalogic/views/TalismanAnalogic.tsx'),
);
const TalismanDigital = lazy(
  () => import('../talismanDigital/views/TalismanDigital.tsx'),
);
const Meditations = lazy(() => import('../meditations/views/Meditations.tsx'));
const Intentions = lazy(() => import('../intentions/views/Intentions.tsx'));
const IntentionInfo = lazy(
  () => import('../intentions/views/IntentionInfo.tsx'),
);

const Store = lazy(() => import('../store/views/Store.tsx'));
const BuyAnalogTalisman = lazy(
  () => import('../store/views/BuyAnalogTalisman.tsx'),
);
const BuyDigitalTalisman = lazy(
  () => import('../store/views/BuyDigitalTalisman.tsx'),
);
const Blog = lazy(() => import('../blog/views/Blog.tsx'));
const BlogNote = lazy(() => import('../blog/views/BlogNote.tsx'));
const Contact = lazy(() => import('../contact/views/Contact.tsx'));
const SiteTerms = lazy(() => import('../siteTerms/views/SiteTerms.tsx'));
const PrivacyTerms = lazy(() => import('../siteTerms/views/PrivacyTerms.tsx'));
const ChangesAndWarranty = lazy(
  () => import('../siteTerms/views/ChangesAndWarranty.tsx'),
);
const MainteneneTalisman = lazy(
  () => import('../siteTerms/views/MainteneneTalisman.tsx'),
);

const CheckOutAnalogic = lazy(
  () => import('../checkout/views/CheckOutAnalogic.tsx'),
);

const WelcomeRegister = lazy(
  () => import('../wellcome/views/WelcomeRegister.tsx'),
);

const ValidateEmailTokenExpired = lazy(
  () => import('../wellcome/views/ValidateEmailTokenExpired.tsx'),
);

const ActivationAnalogic = lazy(
  () => import('../talismanAnalogic/views/ActivationAnalogic.tsx'),
);
const ThanksForBuying = lazy(() => import('../wellcome/views/ThanksForBuying.tsx'));


const publicRoutes = [
  {path: '/', component: <Home />},
  {path: '/talisman-landing', component: <TalismanInfo />},
  {path: '/talisman-analogico', component: <TalismanAnalogic />},
  {path: '/talisman-digital', component: <TalismanDigital />},
  {path: '/meditations', component: <Meditations />},
  {path: '/intenciones', component: <Intentions />},
  {path: '/intenciones/:id', component: <IntentionInfo />},
  {path: '/tienda', component: <Store />},
  {path: '/buy-digital', component: <BuyDigitalTalisman />},
  {path: '/buy-analogic', component: <BuyAnalogTalisman />},
  {path: '/blog', component: <Blog />},
  {path: '/blog/nota/:id', component: <BlogNote />},
  {path: '/contacto', component: <Contact />},
  {path: '/checkout/store', component: <CheckOutAnalogic />},
  {path: '/activacion/:id', component: <ActivationAnalogic />},
  {path: '/terminos-y-condiciones', component: <SiteTerms />},
  {path: '/politica-de-privacidad', component: <PrivacyTerms />},
  {path: '/cambios-y-garantias', component: <ChangesAndWarranty />},
  {path: '/mantenimiento-talismanes', component: <MainteneneTalisman />},
  {path: '/tiempo-validacion-expiro', component: <ValidateEmailTokenExpired />},
  {path: '/correo-validado', component: <WelcomeRegister />},
  {path: '/thanks-for-buying', component: <ThanksForBuying />},
];

export const PublicRoutesCollection = () =>
  publicRoutes.map(item => (
    <Route
      key={item.path} // Agrega una key para evitar advertencias de React
      path={item.path}
      element={<Suspense fallback={<Loader />}>{item.component}</Suspense>}
    />
  ));
