import logo from "../assets/images/lovelia.png";
import { LoginIcon, ShopingIcon } from "../assets/images/icons/icons";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { ShopingCartContext } from "../context/modalShopingCart";
import { UserContext } from "../context/userContext";
import { NavbarDropDown } from "../commons/NavbarDropDown";


export function Navbar() {
  const { menuOpen, togleMenu } = useContext(ShopingCartContext);
  const { email, name, lastname,subscription } = useContext(UserContext);

 

    //Guarda ver que si no es necesario agrgar algun estado para el manejo de localstorage
    const shopingCartJSON = localStorage.getItem('shopingCart') || "[]";
    const shopingCartItems=(JSON.parse(shopingCartJSON).length);


  const navigate = useNavigate();

  const linkToHome = () => {
    navigate("/");
  };

  const linkToSection = (sectionPath: string,event: React.MouseEvent<HTMLDivElement | HTMLLIElement>) => {
    event.stopPropagation();
    navigate(sectionPath);
  };

  const location = useLocation().pathname.slice(1);

  const [buttonFocusPosition, setButttonFocusPosition] = useState("");
  useEffect(() => {
    setButttonFocusPosition(location);
  }, [location]);

  const [hoverPosition,setHoverPosition]=useState("")

  
  const handleMouseOver=(hoverPosition:string)=>{
    setHoverPosition(hoverPosition)
  }

  const handleMouseLeave=()=>{
    setTimeout(() => {
      setHoverPosition("");
  }, 500); 
  }




  const navbarButtons = [
    {
      title: "Talismán",
      path: ["talisman-landing","talisman-digital","talisman-analogico"],
      buttonOptions: [
        { buttonName: "Talisman Digital", path: "talisman-digital" },
        { buttonName: "Talisman Analógico", path: "talisman-analogico" },
      ],
    },
    {
      title: "Intenciones",
      path: ["intensiones"],
      buttonOptions: [
        { buttonName: "Coraje", path: "intensiones/1" },
        { buttonName: "Yo verdadero", path: "intensiones/2" },
        { buttonName: "Abundancia", path: "intensiones/3" },
        { buttonName: "Amor incondicional", path: "intensiones/4" },
        { buttonName: "Aquí y ahora", path: "intensiones/5" },
        { buttonName: "Gratitud", path: "intensiones/6" },
        { buttonName: "Potencial infinito", path: "intensiones/7" },
        { buttonName: "Sabiduría", path: "intensiones/8" },
   
      ],
    },
    {
      title: "Tienda",
      path: ["tienda","comprar-talisman-digital","comprar-talisman-analogico"],
      buttonOptions: [
        { buttonName: "Talisman Digital", path: "comprar-talisman-digital" },
        { buttonName: "Talisman Analógico", path: "comprar-talisman-analogico" },
      ],
    },
    {
      title: "Blog",
      path: ["blog"],
      buttonOptions: [],
    },
    {
      title: "Talleres",
      path: ["talleres"],
      buttonOptions: [],
    },
    {
      title: "Contacto",
      path: ["contacto"],
      buttonOptions: [
      ],
    },
  ];

  const userButton={
    title: "Contacto",
    path: ["contacto"],
    buttonOptions: [
      { buttonName: "Profile", path: "profile" },
        { buttonName: "Logout", path: "logout" },
    ],
  }


  if(email && subscription){navbarButtons[0].buttonOptions.unshift(  { buttonName: "Mi talisman", path: "myTalisman" })}

  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  window.addEventListener("scroll", handleScroll);

  

  return (
    <nav onMouseLeave={()=>handleMouseLeave()}
      className={`navbar-container ${scrollPosition > 10 && "navbar-move"} ${
        menuOpen ? "viewport-background" : ""
      }`}
    >
      <div onClick={linkToHome} className="navbar-logo-container">
        <img src={logo} alt="Logo-Lovelia" />
      </div>
      <ul className="navbar-menu"  >
        {navbarButtons.map((button, i) => {
          return (
            <div className="navbar-button-menu-container"  onMouseEnter ={()=>{handleMouseOver(button.path[0])}}  >
              {button.path.includes(buttonFocusPosition) ? (
                <>
                <li 
                onClick={(event) => linkToSection(button.path[0],event)}
                  className={
                    button.path.includes(buttonFocusPosition)
                      ? "navbar-button-focus-style"
                      : "navbar-button-style"
                  }
                  key={i}
                >
                  {button.title}
                 
                </li>
                {hoverPosition === button.path[0] && (<NavbarDropDown buttonOptions={button.buttonOptions} handleMouseOver={()=>handleMouseOver(button.path[0])} handleMouseLeave={()=>{handleMouseLeave()}} />
                  )}
                  </>
              ) : (
                <>
                <li
                  onClick={(event) => linkToSection(button.path[0],event)}
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
                    <NavbarDropDown buttonOptions={button.buttonOptions} handleMouseOver={()=>handleMouseOver(button.path[0])} handleMouseLeave={()=>{handleMouseLeave()}} />
                  )}
                </>
              )}
            </div>
          );
        })}

        <li onClick={() => togleMenu() } className="navbar-menu-icon shoping-icon">
          <ShopingIcon />
         {shopingCartItems>0 && <div>
          <h2>{shopingCartItems}</h2>
          </div>}
        </li>
        {!email ? (
          <li
            onClick={(event) => linkToSection("login",event)}
            className={
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
          <div onMouseMove={()=>{handleMouseOver("login")}}  
          onClick={(event) => linkToSection("login",event)}
          className={
            buttonFocusPosition === "login" ||
            buttonFocusPosition === "register" ||
            buttonFocusPosition === "profile"
              ? "navbar-user-avatar-focus-style navbar-user-avatar"
              : "navbar-user-avatar"
          }
        >
          <li >
        
            <h5>{(`${name[0]}${lastname[0]}`.toUpperCase())}</h5>
          </li>
          </div>
            {hoverPosition==="login" && <NavbarDropDown buttonOptions={userButton.buttonOptions} handleMouseOver={()=>handleMouseOver("login")} handleMouseLeave={()=>{handleMouseLeave()}} />}
          </div>
        )}
      </ul>
    </nav>
  );
}
