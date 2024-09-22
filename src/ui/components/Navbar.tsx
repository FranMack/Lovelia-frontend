import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ShopingIcon } from "../../assets/icons";
import { ShopingCartContext } from "../../context/shopingCart.context";
import logoN from "../assets/logo-n.png";
import logoV from "../assets/logo-v.png";
const menu = [
  { title: "Home", path: "#home" },
  { title: "Conocerme", path: "#me" },
  { title: "Planes", path: "#plans" },
  { title: "Ebook", path: "#ebook" },
];

export const Navbar = () => {
  const location = useLocation().pathname.slice(1);

  const navigate = useNavigate();

  const linkToHome = () => {
    navigate("/");
  };

  const linkToTest = () => {
    navigate("/test");
  };

  const { toggleMenu, shopingCartItems } = useContext(ShopingCartContext);

  return (
    <nav>
      <div className="navbar-left-container">
        <div className="logo-container" onClick={linkToHome}>
          <img src={logoN} alt="letter N" />
          <img src={logoV} alt="letter V" />
        </div>

        <ul className="navbar-menu">
          {menu.map((item) => {
            return (
              <a href={item.path === "#home" ? "/" : `/${item.path}`}>
                <li key={item.title}>{item.title}</li>
              </a>
            );
          })}
        </ul>

        <div className="icon-container" onClick={() => toggleMenu()}>
          <ShopingIcon />
          {shopingCartItems.length > 0 && (
            <strong>{shopingCartItems.length}</strong>
          )}
        </div>
      </div>
      {location !== "test" && (
        <button className="navbar-button" onClick={linkToTest}>
          Hacer test
        </button>
      )}
    </nav>
  );
};
