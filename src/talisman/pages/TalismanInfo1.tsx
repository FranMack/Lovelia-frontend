import {FrontPage1, FrontPage1Options} from "../../ui/pages/FrontPage1";
import background from "../assets/talisman_info_fondo1.webp"


export const TalismanInfo1 = () => {

  const frontPageInfo: FrontPage1Options = {
    image: background,
    text: "↘ UN TALISMÁN ES RECORDAR, TENER PRESENTE, UN INDICIO DE NUESTRAS INTENCIONES E INFINITAS POSIBILIDADES; ES UN LUGAR SEGURO DONDE VOLVER Y ENFOCARTE PARA LOGRAR TU PROPÓSITO.",
    color: "#6f3289",
    button:false,
    buttonText: "VER MÁS INFORMACIÓN",
  };

  return(
    <FrontPage1 {...frontPageInfo}/>
  )
}



   
