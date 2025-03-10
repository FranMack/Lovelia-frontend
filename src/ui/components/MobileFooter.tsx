import logo from "../assets/lovelia-logo.webp";
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
} from "../../assets/icons/icons";
import { DropDownFooter } from "./DropDownFooter";

const siteMap = {
  title: "MAPA DEL SITIO",
  items: [
    { title: "Inicio", path: "/" },
    { title: "Talismán", path: "talisman-landing" },
    { title: "Meditaciones", path: "meditations" },
    { title: "Intenciones", path: "intenciones" },
    { title: "Tienda", path: "tienda" },
    { title: "Blog", path: "blog" },
  ],
};

const others = {
  title: "OTROS",
  items: [
    { title: "Perfil de usuario", path: "profile" },
    { title: "Carrito de compras", path: "profile" },
    { title: "Cuidado de los talismanes", path: "mantenimiento-talismanes" },
  ],
};

const us = {
  title: "NOSOTRAS",
  items: [
    { title: "Acerca de nosotros", path: "/" },
    { title: "Terminos y condiciones", path: "terminos-y-condiciones" },
    { title: "Cambios y garantias", path: "cambios-y-garantias" },
    { title: "Políticas de privacidad", path: "politica-de-privacidad" },
    { title: "Contáctanos", path: "contacto" },
  ],
};

export const MobileFooter = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="mobile-footer-container">
      <div className="mobile-footer-top-container">
        <img src={logo} alt="logo lovelia" />
      </div>

      <DropDownFooter {...siteMap} />
      <DropDownFooter {...others} />
      <DropDownFooter {...us} />

      <div className="mobile-footer-socialMedia-contaienr">
        <h6>Visita nuestras redes sociales</h6>
        <div className="socialMedia-icon-container">
          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
        </div>
      </div>

      <div className="mobile-bottom-container">
        
          <p>{`© ${year} lovelia. Todos los derechos reservados`}</p>
       
      </div>
    </footer>
  );
};
