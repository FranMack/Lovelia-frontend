import { useNavigate } from "react-router-dom";
import talismanDigital from "../../assets/images/talisman-digital.png";

import { PortadaTalisman } from "../PortadaTalisman";
import { PortadaTalismanOptions } from "../PortadaTalisman";

const infoPortada: PortadaTalismanOptions = {
  image: talismanDigital,
  title: "Talismán Digital",
  description: [
    "El talisman digital es una representación animada de tu ADN energético.",
    "Para diseñarla, combinamos tecnología y saberes antiguos generando un espacio de meditación visual, auditiva y kinestésica, que te posibilita volver a tu centro siempre que lo desees o lo necesites.",
    "Es un espacio que facilita conectar con tu energía y con tu potencial infinito.",
  ],
  button: "Comprar talismán digital",
};



export function DigitalTalismanSection1() {

  const navigatge=useNavigate();

  const linkToComprarTalisman=()=>{
navigatge("/comprar-talisman-digital")
  }
  return (
    <>
      <PortadaTalisman {...infoPortada} onClick={linkToComprarTalisman} />
    </>
  );
}
