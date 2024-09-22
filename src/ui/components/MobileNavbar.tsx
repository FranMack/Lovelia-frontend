import { useContext } from "react";
import { MenuIcon, ShopingIcon } from "../../assets/icons";
import logoN from "../assets/logo-n.png";
import logoV from "../assets/logo-v.png";

import { useNavigate } from "react-router-dom";
import { MobileMenuContext } from "../../context/mobileMenuContext";
import { ShopingCartContext } from "../../context/shopingCart.context";

export const MobileNavbar = () => {
  const navigate = useNavigate();

  const linkToHome = () => {
    navigate("/");
  };

  const { toggleMenu } = useContext(MobileMenuContext);
  const shopingCartContext = useContext(ShopingCartContext);
  const { shopingCartItems } = shopingCartContext;
  return (
    <nav className="mobile-navbar-container">
      <div className="icon-container" onClick={() => {}}>
        <MenuIcon onClick={toggleMenu} />
      </div>

      <div className="image-container">
        <img onClick={linkToHome} src={logoN} alt="logo-N" />
        <img onClick={linkToHome} src={logoV} alt="logo-V" />
      </div>

      <div className="icon-container" onClick={shopingCartContext.toggleMenu}>
        <ShopingIcon />
        {shopingCartItems.length > 0 && (
          <strong>{shopingCartItems.length}</strong>
        )}
      </div>
    </nav>
  );
};
