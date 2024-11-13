import wallpaper from "../assets/home_fondo2.webp";
import { FrontPage1 } from "../../ui/pages/FrontPage1";
import { FrontPage1Options } from "../../ui/pages/FrontPage1";
import { useNavigate } from "react-router-dom";

const frontPageInfo: FrontPage1Options = {
  image: wallpaper,
  text: "↘️ CUANDO USO UN TALISMÁN, ESTOY RECORDANDO QUE QUIERO PARA MÍ, CONECTANDO CON MI SABIDURÍA INTERNA.",
  color: "#6f3289",
  button:true,
  buttonText: "VER MÁS INFORMACIÓN"
};

export const Home2 = () => {
  const navigate=useNavigate();
  const linkToTalisman=()=>{navigate("/talisman-landing")}
  return <FrontPage1 {...frontPageInfo} handleLink={linkToTalisman} />;
};
