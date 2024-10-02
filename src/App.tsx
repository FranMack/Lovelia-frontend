import { Route, Routes, useLocation } from "react-router-dom";
import { Home } from "./home/views/Home";
import {
  Footer,
  Navbar,
  MobileFooter,
  MobileNavbar,
  MobileMenu,
} from "./ui/components";
import { TalismanInfo } from "./talisman/views/TalismanInfo.tsx";
import { TalismanDigital } from "./talismanDigital/views/TalismanDigital.tsx";
import { Meditations } from "./meditations/views/Meditations.tsx";
import { Intentions, IntentionInfo } from "./intentions/views";
import { TalismanAnalogic, ActivationAnalogic } from "./talismanAnalogic/views";
import { Store, BuyAnalogTalisman, BuyDigitalTalisman } from "./store/views";
import { Blog } from "./blog/views/Blog.tsx";
import {
  Register,
  Login,
  ForgetPassword,
  NewPassword,
  AuthFrontPage,
} from "./auth/views/";
import { Contact } from "./contact/views/Contact.tsx";
import { Profile } from "./profile/views/Profile.tsx";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { envs } from "./config/envs.ts";
import { UserContext } from "./context/userContext.tsx";
import { ShopingCartContext } from "./context/modalShopingCartContext.tsx";
import { CheckOutAnalogic, CheckOutDigital } from "./checkout/views/";
import { ToastContainer } from "react-toastify";
import { ShopingCart } from "./ui/components/ShopingCart.tsx";
import { MyTalisman } from "./myTalisman/views/MyTalisman.tsx";
import { SiteTerms,PrivacyTerms,ChangesAndWarranty,MainteneneTalisman } from "./siteTerms/views";
import { PrivateRoute, PublicRoute } from "./router";
import { MobileMenuContext } from "./context/mobileMenuContext.tsx";
import { WelcomeDigital } from "./checkout/views/WelcomeDigital.tsx";
import { WelcomeRegister } from "./checkout/views/WelcomeRegister.tsx";
import { ValidateEmailTokenExpired } from "./checkout/views/ValidateEmailTokenExpired.tsx";

function App() {
  const { shopingCartOpen,setShopingCartItems } = useContext(ShopingCartContext);
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

  const handleWindowSize = () => {
    setWindowSize(window.innerWidth);
  };
  window.addEventListener("resize", handleWindowSize);

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
   if(menuOpen){
    document.addEventListener("click", handleClickOutside);

    return () => {
      // Eliminar el event listener cuando el componente se desmontefS
      document.removeEventListener("click", handleClickOutside);
    };
  }
  }, [menuOpen]);

  return (
    <>
      <ToastContainer style={{fontSize:"1.6rem"}}/>
      {location !== "/myTalisman" && windowSize >= 1024 && <Navbar />}
      {location !== "/myTalisman" && windowSize < 1024 && <MobileNavbar />}
      {shopingCartOpen && <ShopingCart />}
      <MobileMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/talisman-landing" element={<TalismanInfo />} />
        <Route path="/talisman-digital" element={<TalismanDigital />} />
        <Route path="/talisman-analogico" element={<TalismanAnalogic />} />
        <Route path="/meditations" element={<Meditations />} />
        <Route path="/intenciones" element={<Intentions />} />
        <Route path="/intenciones/:id" element={<IntentionInfo />} />
        <Route path="/tienda" element={<Store />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/buy-analogic" element={<BuyAnalogTalisman />} />
        <Route path="/buy-digital" element={<BuyDigitalTalisman />} />
        <Route path="/checkout/store" element={<CheckOutAnalogic />} />
        <Route path="/activacion/:id" element={<ActivationAnalogic />} />
        <Route path="/terminos-y-condiciones" element={<SiteTerms />} />
        <Route path="/politica-de-privacidad" element={<PrivacyTerms />} />
        <Route path="/cambios-y-garantias" element={<ChangesAndWarranty />} />
        <Route path="/mantenimiento-talismanes" element={<MainteneneTalisman />} />
        <Route path="/tiempo-validacion-expiro" element={<ValidateEmailTokenExpired />} />


        <Route path="/correo-validado" element={<WelcomeRegister />} />
        {/* <Route path="/mail" element={ <MailTemplate1/>}/>*/}

        {/*RUTAs PUBLICAS*/}
        <Route
          path="/portal-usuario"
          element={
            <PublicRoute>
              <AuthFrontPage />
            </PublicRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
        <Route
          path="/forget-password"
          element={
            <PublicRoute>
              <ForgetPassword />
            </PublicRoute>
          }
        />
        <Route
          path="/reset-password"
          element={
            <PublicRoute>
              <NewPassword />
            </PublicRoute>
          }
        />

        {/*RUTAS PRIVADAS*/}

        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          path="/checkout/digital"
          element={
            <PrivateRoute>
              <CheckOutDigital />
            </PrivateRoute>
          }
        />
        <Route
          path="/myTalisman"
          element={
            <PrivateRoute>
              <MyTalisman />
            </PrivateRoute>
          }
        />
        <Route
          path="/welcome"
          element={
            <PrivateRoute>
              <WelcomeDigital />
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
