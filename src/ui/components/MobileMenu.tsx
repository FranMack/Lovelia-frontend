import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  CloseIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
} from "../../assets/icons";
import { MobileMenuContext } from "../../context/mobileMenuContext";
import logoN from "../assets/logo-n.png";
import logoV from "../assets/logo-v.png";

const navbarMenu = [
  { title: "Home", path: "/#home" },
  { title: "Conocerme", path: "/#me" },
  { title: "Planes", path: "/#plans" },
  { title: "Ebook", path: "/#ebook" },
  { title: "Hacer test", path: "/test" },
];

const icons = [
  {
    title: "Instagram",
    icon: <InstagramIcon />,
    path: "https://www.instagram.com/nutriendolavida/",
  },
  {
    title: "Facebook",
    icon: <FacebookIcon />,
    path: "https://www.instagram.com/nutriendolavida/",
  },
  {
    title: "Linkedin",
    icon: <LinkedinIcon />,
    path: "https://www.instagram.com/nutriendolavida/",
  },
];

export const MobileMenu = () => {
  const navigate = useNavigate();
  const linkTo = (path: string) => {
    navigate(path);
    toggleMenu();
  };

  const { toggleMenu, menuRef } = useContext(MobileMenuContext);

  return (
    <div ref={menuRef} className="mobile-menu-container">
      <div className="mobile-menu-top-container">
        <img src={logoN} alt="logo N" />
        <img src={logoV} alt="logo V" />
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
    </div>
  );
};
