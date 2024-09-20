import talismanDigital from "../assets/talisman_info_td.png"
import { Template1 } from "../../ui/pages/Template1";
import { Template1Options } from "../../ui/pages/Template1";
import { Position } from "../../ui/pages/Template1";
import { ButtonArrowRight2 } from "../../ui/components/ButtonArrowRight2";
import { OptionsArrowRight2 } from "../../ui/components/ButtonArrowRight2";
import { ObliqueArrow } from "../../assets/icons/icons";
import { useNavigate } from "react-router-dom";



const templateOptions:Template1Options={
  image:talismanDigital,
  position:Position.Left,
  color:"#6f3289",
  backgroundColor:"#76CBC0"
}

export const TalismanInfo3 = () => {

  const navigate=useNavigate()
  const linkToTalismanDigital=()=>{navigate("/talisman-digital")}
  const buttonRightInfo:OptionsArrowRight2={
    text:"VER MÁS",
    color:"#6f3289",
    onClick:linkToTalismanDigital
}
 
  return (
   <Template1 {...templateOptions} >
    <div className="talismanInfo3-internal-container right">
    <div className="talismanInfo3-internal-text-container">
  <h2>
    <div className="icon-container">
      <ObliqueArrow color="#6f3289"/>
    </div>
    TALISMÁN
  </h2>
  <h2>DIGITAL</h2>
  <br/>
  <br/>
  

  
  <p>
  El talisman digital es un <strong>espacio virtual</strong>, es una<br/> expresion de tu adn energetico, es un sonido, un mantra,<br/> es <strong>volver al centro</strong>, es <strong>recordar tu propósito,</strong> es<br/> enfocarte, es un vehículo, es una herramienta para<br/> conectarte, es <strong>saber que podes.</strong>
  </p>
  <p>
  Combinando tecnología y saberes ancestrales<br/> generamos un <strong>espacio de meditación visual</strong>,<br/> <strong>auditiva y kinestésica,</strong> que te posibilita volver a tu<br/> centro siempre que lo desees o lo necesites mediante<br/> <strong>una representación 3D de tu ADN energético.</strong><br/>
  El talismán digital te conecta con <strong>tu intención personal<br/> y con las intenciones de Lovelia,</strong> para que puedas<br/> enfocar tu energía y conectar con <strong>tu potencial infinito.</strong>
  </p>
  <div className="button-wrapper">
  
  </div>
<ButtonArrowRight2 {...buttonRightInfo}/>
  </div>
</div>
</Template1>
  );
};
