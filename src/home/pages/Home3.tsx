import intention from "../assets/home_intensiones.webp";
import { ButtonArrowRight } from "../../ui/components"
import { Template1 } from "../../ui/pages/Template1";
import { Template1Options } from "../../ui/pages/Template1";
import { Position } from "../../ui/pages/Template1";
import { useNavigate } from "react-router-dom";



const templateOptions:Template1Options={
  image:intention,
  position:Position.Left,
 color:"#6f3289",
  backgroundColor:"#76CBC0"
}

export const Home3 = () => {
  const navigate=useNavigate()

const buttonRightInfo={
    text:"SEGUIR LEYENDO",
    color:"#6f3289",
    onClick:()=>{navigate("/blog/nota/1")}
}

  return (
   <Template1 {...templateOptions} >
    <div className="section3-home-internal-container right">
    <div className="section3-home-internal-text-container">
  <h2>
    EL PODER
    <br />
    DE LA INTENCIÓN
  </h2>
  <p>
   <span> Existe el poder de transformar los pensamientos en
     realidades durante el proceso de búsqueda de la plenitud y la
     realización personal.
     </span>
  </p>
  
  <p>
  Es el poder de la intención, la semilla de toda transformación y
  creación en nuestras vidas.
    <strong>La intención es el punto de partida para todo cambio y creación</strong>, ya
    que se trata de la energía que dirige nuestros pensamientos,
    nuestras palabras y nuestras acciones hacia la manifestación de
    nuestros deseos más profundos, esos que están <strong>en conexión íntima con
    nuestra esencia, nuestros valores y nuestra visión del mundo</strong>.
  </p>
  <div className="button-wrapper">
  <ButtonArrowRight {...buttonRightInfo}/>
  </div>
  </div>
</div>
</Template1>
  );
};
