import logo from "../assets/lovelia-logo.png";
import {
  CloseIcon,
  LoginIcon,
  ShopingIcon,
  ContactUsIcon,
} from "../../assets/icons/icons";
import { useNavigate } from "react-router-dom";
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
} from "../../assets/icons/icons";
import { MobileMenuContext } from "../../context";
import { useContext } from "react";

const navbarMenu = [
  { title: "Home", path: "" },
  { title: "Talismán", path: "talisman-landing" },
  { title: "Meditaciones", path: "meditations" },
  { title: "Intenciones", path: "intenciones" },
  { title: "Tienda", path: "tienda" },
  { title: "Blog", path: "blog" },
];

const icons = [
  { title: "Mi cuenta", icon: <LoginIcon />, path: "profile" },
  { title: "Carrito", icon: <ShopingIcon />, path: "" },
  { title: "Contacto", icon: <ContactUsIcon />, path: "contacto" },
];

const socialMedia = [
  { icon: <FacebookIcon />, path: "https://www.instagram.com/lovelia.me/" },
  { icon: <InstagramIcon />, path: "https://www.instagram.com/lovelia.me/" },
  { icon: <TwitterIcon />, path: "https://www.instagram.com/lovelia.me/" },
];

export const MobileMenu = () => {
  const navigate = useNavigate();
  const linkTo = (path: string) => {
    navigate(path);
    toggleMenu();
  };

  const redirectTo = (path: string) => {
    window.open(path, "_blank", "noopener,noreferrer");
    toggleMenu();
  };

  const { toggleMenu, menuRef } = useContext(MobileMenuContext);
  return (
    <div ref={menuRef} className="mobile-menu-container">
      <div className="mobile-menu-top-container">
        <img src={logo} alt="logo lovelia" />
        <div className="icon-container">
          <CloseIcon
            onClick={() => {
              toggleMenu();
            }}
          />
        </div>
      </div>
      <ul className="mobile-menu-center-container">
        {navbarMenu.map((item, i) => {
          return (
            <li
              key={i}
              onClick={() => {
                linkTo(item.path);
              }}
            >
              {item.title}
            </li>
          );
        })}
      </ul>

      <div className="mobile-menu-bottom-container">
        {icons.map((item) => {
          return (
            <div
              key={item.title}
              className="icon-container"
              onClick={() => linkTo(item.path)}
            >
              {item.icon}
              <small>{item.title}</small>
            </div>
          );
        })}
      </div>

      <div className="mobile-menu-socialMedia-container">
        {socialMedia.map((item, i) => {
          return (
            <div
              key={i}
              className="icon-container"
              onClick={() => {
                redirectTo(item.path);
              }}
            >
              {item.icon}
            </div>
          );
        })}
      </div>
    </div>
  );
};
