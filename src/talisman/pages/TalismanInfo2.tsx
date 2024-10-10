import { FrontPage1, FrontPage1Options } from "../../ui/pages/FrontPage1";
import background from "../assets/talisman_info_fondo2.webp";

const frontPageInfo: FrontPage1Options = {
  image: background,
  text: [
    "LOVELIA TE PROPONE ABRIRTE A NUEVAS",
    "EXPERIENCIAS DE CONEXIÓN",
    "INTERIOR, TRANSFORMANDO TU REALIDAD,",
    " CREANDO TU PROPIA FORMA DE ANDAR,",
    "EJERCIENDO EL PODER DE ELEGIR,",
    "SIENDO PROTAGONISTA DE TU VIDA QUE ES",
    " ÚNICA E IRREPETIBLE.",
  ],
  color: "#ffffff",
  button: false,
  buttonText: "VER MÁS INFORMACIÓN",
  arrow: false,
};

export const TalismanInfo2 = () => {
  return <FrontPage1 {...frontPageInfo} />;
};
