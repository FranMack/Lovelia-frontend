import { MenuIcon, ShopingIcon } from "../../assets/icons/icons";
import logo from "../assets/lovelia-logo.webp";
import { MobileMenuContext } from "../../context";
import { ShopingCartContext } from "../../context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export const MobileNavbar = () => {
  const navigate = useNavigate();
  const { toggleMenu } = useContext(MobileMenuContext);
  const shopingCart = useContext(ShopingCartContext);

  const linkToHome = () => {
    navigate("/");
  };

  return (
    <nav className="mobile-navbar-container">
      <div
        className="icon-container"
        onClick={() => {
          toggleMenu();
        }}
      >
        <MenuIcon />
      </div>

      <div className="image-container">
        <img onClick={linkToHome} src={logo} alt="logo" />
      </div>

      <div className="icon-container" onClick={shopingCart.toggleMenu}>
        <ShopingIcon />
      </div>
    </nav>
  );
};
