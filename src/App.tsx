import { Route, Routes, useLocation } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Loader } from "./ui/pages/Loader.tsx";
const Home = lazy(() => import("./home/views/Home"));
const TalismanInfo = lazy(() => import("./talisman/views/TalismanInfo.tsx"));
const TalismanAnalogic = lazy(
  () => import("./talismanAnalogic/views/TalismanAnalogic.tsx")
);
const TalismanDigital = lazy(
  () => import("./talismanDigital/views/TalismanDigital.tsx")
);
const Meditations = lazy(() => import("./meditations/views/Meditations.tsx"));
const Intentions = lazy(() => import("./intentions/views/Intentions.tsx"));
const IntentionInfo = lazy(
  () => import("./intentions/views/IntentionInfo.tsx")
);

const Store = lazy(() => import("./store/views/Store.tsx"));
const BuyAnalogTalisman = lazy(
  () => import("./store/views/BuyAnalogTalisman.tsx")
);
const BuyDigitalTalisman = lazy(
  () => import("./store/views/BuyDigitalTalisman.tsx")
);
const Blog = lazy(() => import("./blog/views/Blog.tsx"));
const BlogNote = lazy(() => import("./blog/views/BlogNote.tsx"));
const Contact = lazy(() => import("./contact/views/Contact.tsx"));
const Profile = lazy(() => import("./profile/views/Profile.tsx"));
const SiteTerms = lazy(() => import("./siteTerms/views/SiteTerms.tsx"));
const PrivacyTerms = lazy(() => import("./siteTerms/views/PrivacyTerms.tsx"));
const ChangesAndWarranty = lazy(
  () => import("./siteTerms/views/ChangesAndWarranty.tsx")
);
const MainteneneTalisman = lazy(
  () => import("./siteTerms/views/MainteneneTalisman.tsx")
);

const Register = lazy(() => import("./auth/views/Register.tsx"));
const Login = lazy(() => import("./auth/views/Login.tsx"));
const ForgetPassword = lazy(() => import("./auth/views/ForgetPassword.tsx"));
const NewPassword = lazy(() => import("./auth/views/NewPassword.tsx"));
const AuthFrontPage = lazy(() => import("./auth/views/AuthFrontPage.tsx"));

const MyTalisman = lazy(() => import("./myTalisman/views/MyTalisman.tsx"));
const CheckOutAnalogic = lazy(
  () => import("./checkout/views/CheckOutAnalogic.tsx")
);
const CheckOutDigital = lazy(
  () => import("./checkout/views/CheckOutDigital.tsx")
);

const WelcomeRegister = lazy(
  () => import("./wellcome/views/WelcomeRegister.tsx")
);
const ValidateEmailTokenExpired = lazy(
  () => import("./wellcome/views/ValidateEmailTokenExpired.tsx")
);
const WelcomeDigital = lazy(
  () => import("./wellcome/views/WelcomeDigital.tsx")
);

const ActivationAnalogic = lazy(
  () => import("./talismanAnalogic/views/ActivationAnalogic.tsx")
);

import {
  Footer,
  Navbar,
  MobileFooter,
  MobileNavbar,
  MobileMenu,
} from "./ui/components";

import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { envs } from "./config/envs.ts";
import { UserContext } from "./context/userContext.tsx";
import { ShopingCartContext } from "./context/modalShopingCartContext.tsx";
import { ToastContainer } from "react-toastify";
import { ShopingCart } from "./ui/components/ShopingCart.tsx";
import { PrivateRoute, PublicRoute } from "./router";
import { MobileMenuContext } from "./context/mobileMenuContext.tsx";

function App() {
  const { shopingCartOpen, setShopingCartItems } =
    useContext(ShopingCartContext);
  const { /*email,*/ setEmail, setId, setName, setLastname, setSuscription } =
    useContext(UserContext);

  useEffect(() => {
    const shopingCartJSON = localStorage.getItem("shopingCart") || "[]";
    setShopingCartItems(JSON.parse(shopingCartJSON));
    axios
      .get(`${envs.API_DOMAIN}/api/v1/user/me`, { withCredentials: true })
      .then(({ data }) => {
        setEmail(data.email);
        setId(data.id);
        setName(data.name);
        setLastname(data.lastname);
        const subscription = JSON.parse(
          localStorage.getItem("subscriptionActive") || "false"
        );
        setSuscription(subscription);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const location = useLocation().pathname;

  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowSize = () => setWindowSize(window.innerWidth);

    window.addEventListener("resize", handleWindowSize);
    return () => window.removeEventListener("resize", handleWindowSize);
  }, []);

  const { menuOpen, toggleMenu, menuRef } = useContext(MobileMenuContext);

  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as HTMLElement; // Convertir event.target a HTMLElement

    if (
      menuOpen &&
      menuRef!.current &&
      target.id !== "menu-hamburguesa-icon" &&
      !menuRef!.current.contains(target)
    ) {
      toggleMenu();
    }
  };

  useEffect(() => {
    if (menuOpen) {
      document.addEventListener("click", handleClickOutside);

      return () => {
        // Eliminar el event listener cuando el componente se desmontefS
        document.removeEventListener("click", handleClickOutside);
      };
    }
  }, [menuOpen]);

  return (
    <>
      <ToastContainer style={{ fontSize: "1.6rem" }} />
      {location !== "/myTalisman" && windowSize >= 1024 && <Navbar />}
      {location !== "/myTalisman" && windowSize < 1024 && <MobileNavbar />}
      {shopingCartOpen && <ShopingCart />}
      <MobileMenu />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loader />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/talisman-landing"
          element={
            <Suspense fallback={<Loader />}>
              <TalismanInfo />
            </Suspense>
          }
        />
        <Route
          path="/talisman-analogico"
          element={
            <Suspense fallback={<Loader />}>
              <TalismanAnalogic />
            </Suspense>
          }
        />
        <Route
          path="/talisman-digital"
          element={
            <Suspense fallback={<Loader />}>
              <TalismanDigital />
            </Suspense>
          }
        />

        <Route
          path="/meditations"
          element={
            <Suspense fallback={<Loader />}>
              <Meditations />
            </Suspense>
          }
        />
        <Route
          path="/intenciones"
          element={
            <Suspense fallback={<Loader />}>
              <Intentions />
            </Suspense>
          }
        />
        <Route
          path="/intenciones/:id"
          element={
            <Suspense fallback={<Loader />}>
              <IntentionInfo />
            </Suspense>
          }
        />
        <Route
          path="/tienda"
          element={
            <Suspense fallback={<Loader />}>
              <Store />
            </Suspense>
          }
        />
        <Route
          path="/buy-digital"
          element={
            <Suspense fallback={<Loader />}>
              <BuyDigitalTalisman />
            </Suspense>
          }
        />
        <Route
          path="/buy-analogic"
          element={
            <Suspense fallback={<Loader />}>
              <BuyAnalogTalisman />
            </Suspense>
          }
        />

        <Route
          path="/blog"
          element={
            <Suspense fallback={<Loader />}>
              <Blog />
            </Suspense>
          }
        />
        <Route
          path="/blog/nota/:id"
          element={
            <Suspense fallback={<Loader />}>
              <BlogNote />
            </Suspense>
          }
        />
        <Route
          path="/contacto"
          element={
            <Suspense fallback={<Loader />}>
              <Contact />
            </Suspense>
          }
        />
        <Route
          path="/checkout/store"
          element={
            <Suspense fallback={<Loader />}>
              <CheckOutAnalogic />
            </Suspense>
          }
        />
        <Route
          path="/activacion/:id"
          element={
            <Suspense fallback={<Loader />}>
              <ActivationAnalogic />
            </Suspense>
          }
        />
        <Route
          path="/terminos-y-condiciones"
          element={
            <Suspense fallback={<Loader />}>
              <SiteTerms />
            </Suspense>
          }
        />
        <Route
          path="/politica-de-privacidad"
          element={
            <Suspense fallback={<Loader />}>
              <PrivacyTerms />
            </Suspense>
          }
        />
        <Route
          path="/cambios-y-garantias"
          element={
            <Suspense fallback={<Loader />}>
              <ChangesAndWarranty />
            </Suspense>
          }
        />
        <Route
          path="/mantenimiento-talismanes"
          element={
            <Suspense fallback={<Loader />}>
              <MainteneneTalisman />
            </Suspense>
          }
        />
        <Route
          path="/tiempo-validacion-expiro"
          element={
            <Suspense fallback={<Loader />}>
              <ValidateEmailTokenExpired />
            </Suspense>
          }
        />

        <Route
          path="/correo-validado"
          element={
            <Suspense fallback={<Loader />}>
              <WelcomeRegister />
            </Suspense>
          }
        />

        {/*RUTAs PUBLICAS*/}
        <Route
          path="/portal-usuario"
          element={
            <PublicRoute>
              <Suspense fallback={<Loader />}>
                <AuthFrontPage />
              </Suspense>
            </PublicRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Suspense fallback={<Loader />}>
                <Login />
              </Suspense>
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <Suspense fallback={<Loader />}>
                <Register />
              </Suspense>
            </PublicRoute>
          }
        />
        <Route
          path="/forget-password"
          element={
            <PublicRoute>
              <Suspense fallback={<Loader />}>
                <ForgetPassword />
              </Suspense>
            </PublicRoute>
          }
        />
        <Route
          path="/reset-password"
          element={
            <PublicRoute>
              <Suspense fallback={<Loader />}>
                <NewPassword />
              </Suspense>
            </PublicRoute>
          }
        />

        {/*RUTAS PRIVADAS*/}

        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Suspense fallback={<Loader />}>
                <Profile />
              </Suspense>
            </PrivateRoute>
          }
        />
        <Route
          path="/checkout/digital"
          element={
            <PrivateRoute>
              <Suspense fallback={<Loader />}>
                <CheckOutDigital />
              </Suspense>
            </PrivateRoute>
          }
        />
        <Route
          path="/myTalisman"
          element={
            <PrivateRoute>
                <Suspense fallback={<Loader />}>
              <MyTalisman />
              </Suspense>
            </PrivateRoute>
          }
        />
        <Route
          path="/welcome"
          element={
            <PrivateRoute>
              <Suspense fallback={<Loader />}>
                <WelcomeDigital />
              </Suspense>
            </PrivateRoute>
          }
        />
      </Routes>

      {windowSize >= 1024 && <Footer />}
      {windowSize < 1024 && <MobileFooter />}
    </>
  );
}

export default App;
