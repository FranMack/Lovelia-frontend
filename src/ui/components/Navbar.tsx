import logo from "../assets/lovelia-logo.webp";
import logoYellow from "../assets/logo-lovelia-yellow.webp";
import { LoginIcon, ShopingIcon } from "../../assets/icons/icons";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { ShopingCartContext } from "../../context/modalShopingCartContext";
import { UserContext } from "../../context/userContext";
import { NavbarDropDown } from "./NavbarDropDown";

export function Navbar() {
  const { shopingCartOpen, toggleMenu,shopingCartItems } =
    useContext(ShopingCartContext);
  const { email, name, lastname, subscription,talismanActivated } = useContext(UserContext);

 

  const navigate = useNavigate();

  const linkToHome = () => {
    navigate("/");
  };

  const linkToSection = (
    sectionPath: string,
    event: React.MouseEvent<HTMLDivElement | HTMLLIElement>
  ) => {
    event.stopPropagation();
    navigate(sectionPath);
  };

  const location = useLocation().pathname.slice(1);

  const [buttonFocusPosition, setButttonFocusPosition] = useState("");
  useEffect(() => {
    setButttonFocusPosition(location);
  }, [location]);

  const [hoverPosition, setHoverPosition] = useState("");

  const handleMouseOver = (hoverPosition: string) => {
    setHoverPosition(hoverPosition);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setHoverPosition("");
    }, 500);
  };

  const navbarButtons = [
    {
      title: "Home",
      path: [""],
      buttonOptions: [],
    },
    {
      title: "Talismán",
      path: ["talisman-landing", "talisman-digital", "talisman-analogico"],
      buttonOptions: [
        { buttonName: "Talismán Digital", path: "talisman-digital" },
        { buttonName: "Talismán Analógico", path: "talisman-analogico" },
      ],
    },
    {
      title: "Meditaciones",
      path: ["meditations"],
      buttonOptions: [],
    },
    {
      title: "Intenciones",
      path: ["intenciones"],
      buttonOptions: [
        { buttonName: "Amor incondicional", path: "intenciones/2" },
        { buttonName: "Abundancia", path: "intenciones/3" },
        { buttonName: "Aquí y ahora", path: "intenciones/4" },
        { buttonName: "Potencial infinito", path: "intenciones/5" },
        { buttonName: "Coraje", path: "intenciones/6" },
        { buttonName: "Yo verdadero", path: "intenciones/7" },
        { buttonName: "Gratitud", path: "intenciones/8" },
        { buttonName: "Sabiduría de la Incertidumbre", path: "intenciones/1" },
      ],
    },
    {
      title: "Tienda",
      path: [
        "tienda",
        "comprar-talisman-digital",
        "comprar-talisman-analogico",
      ],
      buttonOptions: [
        { buttonName: "Talismán Digital", path: "buy-digital" },
        { buttonName: "Talismán Analógico", path: "buy-analogic" },
      ],
    },
    {
      title: "Blog",
      path: ["blog"],
      buttonOptions: [],
    },
    {
      title: "Contacto",
      path: ["contacto"],
      buttonOptions: [],
    },
  ];

  const userButton = {
    title: "Contacto",
    path: ["contacto"],
    buttonOptions: [
      { buttonName: "Profile", path: "profile" },
      { buttonName: "Logout", path: "logout" },
    ],
  };

  if (email && subscription && talismanActivated) {
    navbarButtons[1].buttonOptions.unshift({
      buttonName: "Mi talisman",
      path: "myTalisman",
    });
  }

  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  window.addEventListener("scroll", handleScroll);

  const sectionWithYellowLogo = [
    "intenciones",
    "portal-usuario",
    ...Array.from({ length: 8 }, (_, i) => `activacion/${i + 1}`)
  ];
  
  return (
    <nav
      onMouseLeave={() => handleMouseLeave()}
      className={`navbar-container ${scrollPosition > 10 && "navbar-move"} ${
        shopingCartOpen ? "viewport-background" : ""
      }`}
    >
      <div onClick={linkToHome} className="navbar-logo-container">
        <img
          src={sectionWithYellowLogo.includes(location) ? logoYellow : logo}
          alt="Logo-Lovelia"
        />
      </div>
      <ul className="navbar-menu">
        {navbarButtons.map((button, i) => {
          return (
            <div
            key={i}
              className="navbar-button-menu-container"
              onMouseEnter={() => {
                handleMouseOver(button.path[0]);
              }}
            >
              {button.path.includes(buttonFocusPosition) ? (
                <>
                  <li
                    onClick={(event) => linkToSection(button.path[0], event)}
                    className={
                      button.path.includes(buttonFocusPosition)
                        ? "navbar-button-focus-style"
                        : "navbar-button-style"
                    }
                    key={i}
                  >
                    {button.title}
                  </li>
                  {hoverPosition === button.path[0] && (
                    <NavbarDropDown
                      buttonOptions={button.buttonOptions}
                      handleMouseOver={() => handleMouseOver(button.path[0])}
                      handleMouseLeave={() => {
                        handleMouseLeave();
                      }}
                    />
                  )}
                </>
              ) : (
                <>
                  <li
                    onClick={(event) => linkToSection(button.path[0], event)}
                    className={
                      button.path.includes(buttonFocusPosition)
                        ? "navbar-button-focus-style"
                        : "navbar-button-style"
                    }
                    key={i}
                  >
                    {button.title}
                  </li>
                  {hoverPosition === button.path[0] && (
                    <NavbarDropDown
                      buttonOptions={button.buttonOptions}
                      handleMouseOver={() => handleMouseOver(button.path[0])}
                      handleMouseLeave={() => {
                        handleMouseLeave();
                      }}
                    />
                  )}
                </>
              )}
            </div>
          );
        })}

        <li
          onClick={() => {
            toggleMenu();
          }}
          className="navbar-menu-icon shoping-icon"
        >
          <ShopingIcon />
          {shopingCartItems.length > 0 && (
            <div className="number-items-container">
              <h2>{shopingCartItems.length}</h2>
            </div>
          )}
        </li>
        {!name ? (
          <li
            onClick={(event) => linkToSection("portal-usuario", event)}
            className={
              buttonFocusPosition === "portal-usuario" ||
              buttonFocusPosition === "forget-password" ||
              buttonFocusPosition === "login" ||
              buttonFocusPosition === "register" ||
              buttonFocusPosition === "profile"
                ? "navbar-svg-focus-style navbar-menu-icon"
                : "navbar-menu-icon"
            }
          >
            <LoginIcon />
          </li>
        ) : (
          <div>
            <div
              onMouseMove={() => {
                handleMouseOver("login");
              }}
              onClick={(event) => linkToSection("login", event)}
              className={
                buttonFocusPosition === "login" ||
                buttonFocusPosition === "register" ||
                buttonFocusPosition === "profile"
                  ? "navbar-user-avatar-focus-style navbar-user-avatar"
                  : "navbar-user-avatar"
              }
            >
              <li onClick={(event) => linkToSection("profile", event)}>
                {<h5>{`${name[0]}${lastname[0]}`.toUpperCase()}</h5>}
              </li>
            </div>
            {hoverPosition === "login" && (
              <NavbarDropDown
                buttonOptions={userButton.buttonOptions}
                handleMouseOver={() => handleMouseOver("login")}
                handleMouseLeave={() => {
                  handleMouseLeave();
                }}
              />
            )}
          </div>
        )}
      </ul>
    </nav>
  );
}
