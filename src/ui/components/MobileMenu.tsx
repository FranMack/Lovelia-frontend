import logo from "../assets/lovelia-logo.webp";
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
import { MobileMenuContext, ShopingCartContext, UserContext } from "../../context";
import { useContext } from "react";
import { DropDownMobileMenu } from "./DropDownMobileMenu";
import axios from "axios";
import { envs } from "../../config";

const sections = [
  {
    title: "Home",
    path: "/",
    items: [],
  },

  {
    title: "Talismán",
    path: "",
    items: [
      { title: "Intro", path: "talisman-landing" },
      { title: "Talismán analógico", path: "talisman-analogico" },
      { title: "Talismán digital", path: "talisman-digital" },
    ],
  },

  {
    title: "Meditaciones",
    path: "/meditations",
    items: [],
  },

  {
    title: "Intenciones",
    path: "",
    items: [
      { title: "Intro", path: "intenciones" },
      { title: "Amor incondicional", path: "intenciones/2" },
      { title: "Abundancia", path: "intenciones/3" },
      { title: "Aquí y ahora", path: "intenciones/4" },
      { title: "Potencial infinito", path: "intenciones/5" },
      { title: "Coraje", path: "intenciones/6" },
      { title: "Yo verdadero", path: "intenciones/7" },
      { title: "Gratitud", path: "intenciones/8" },
      { title: "Sabiduría de la insertidumbre", path: "intenciones/1" },
    ],
  },

  {
    title: "Tienda",
    path: "",
    items: [
      { title: "Colección", path: "tienda" },
      { title: "Talismán Digital", path: "buy-digital" },
      { title: "Talismán Analógico", path: "buy-analogic" },
    ],
  },

  {
    title: "Blog",
    path: "blog",
    items: [],
  },

  {
    title: "Contacto",
    path: "contacto",
    items: [],
  },
];

const icons = [
  { title: "Mi cuenta", icon: <LoginIcon />, path: "profile" },
  { title: "Carrito", icon: <ShopingIcon />, path: "shopingCart" },
  { title: "Contacto", icon: <ContactUsIcon />, path: "contacto" },
];

const socialMedia = [
  { icon: <FacebookIcon />, path: "https://www.instagram.com/lovelia.me/" },
  { icon: <InstagramIcon />, path: "https://www.instagram.com/lovelia.me/" },
  { icon: <TwitterIcon />, path: "https://www.instagram.com/lovelia.me/" },
];


export const MobileMenu = () => {
  const navigate = useNavigate();

  const shopingCart=useContext(ShopingCartContext)
  const linkTo = (path: string) => {
    if(path!=="shopingCart"){
      navigate(path);
      toggleMenu();
      return
    }
    shopingCart.toggleMenu()
    toggleMenu();


    
  };

  const redirectTo = (path: string) => {
    window.open(path, "_blank", "noopener,noreferrer");
    toggleMenu();
  };

  const { toggleMenu, menuRef } = useContext(MobileMenuContext);
  const{email,setEmail, setId, setName, setLastname,subscription,setSuscription,setToken}=useContext(UserContext)


  const handlerLogout = () => {
    axios
      .get(`${envs.API_DOMAIN}/api/v1/user/logout`, {
        withCredentials: true,
      })
      .then(() => {
        setEmail("");
        setId("");
        setName("");
        setLastname("");
        setToken("")
        setSuscription(false)
        sessionStorage.removeItem("userInfo")
        localStorage.removeItem("subscriptionActive")
        localStorage.removeItem("talismanActivated")
        toggleMenu()
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  


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
        {sections.map((item, i) => {
          return <DropDownMobileMenu key={i} {...item} />;
        })}
         {subscription && <li className="myTalisman" onClick={()=>{linkTo("myTalisman")}}>Mi Talismán</li>}
        {email && <li onClick={handlerLogout}>Logout</li>}
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
