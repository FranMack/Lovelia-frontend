import wallpaper from "../assets/intensiones_portada2.png";
import { FrontPage1 } from "../../ui/pages/FrontPage1";
import { FrontPage1Options } from "../../ui/pages/FrontPage1";

const frontPageInfo: FrontPage1Options = {
  image: wallpaper,
  text: [
    "CUANDO AMPLIAMOS NUESTRA CONCIENCIA,",
    "EVOLUCIONAMOS Y DESPERTAMOS LAS CAPACIDADES,",
    "TALENTOS Y DONES QUE TENÍAMOS DORMIDOS.",
    "LAS INTENCIONES LOVELIA SON 8 CONCEPTOS QUE",
    "CONSIDERAMOS FUNDAMENTALES PARA EL",
    "DESARROLLO DE LA CREATIVIDAD CONSCIENTE."
],
  color: "#ffff",
  button:false,
  buttonText: "VER MÁS INFORMACIÓN",
  arrow:false
};

export const Intentions2 = () => {
  return <FrontPage1 {...frontPageInfo} />;
};


  
