import { useNavigate } from "react-router-dom";
import talismanFisico from "../../assets/images/talisman-fisico.png";
import { PortadaTalisman, PortadaTalismanOptions } from "../PortadaTalisman";

const infoPortada: PortadaTalismanOptions = {
  image: talismanFisico,
  title: "Talismán Analógico",
  description: [
    "Los talismanes analógicos lovelia son una manifestación física de nuestras intenciones, un reflejo de nuestro poder interior y de la maravillosa capacidad que todos poseemos para co-crear nuestra propia realidad.",
    "En un mundo en el que cada uno de nosotros tiene el poder de moldear su propio rumbo y tiene el poder de escribir su propia historia, Lovelia te invita con cariño a diseñar tu propio talismán.",
  ],
  button: "Comprar talismán analógico",
};

export function AnalogTalismanSection1() {
  const navigatge = useNavigate();

  const linkToComprarTalisman = () => {
    navigatge("/comprar-talisman-analogico");
  };

  return (
    <>
      <PortadaTalisman {...infoPortada} onClick={linkToComprarTalisman} />
    </>
  );
}
