import gift from "../assets/tienda_regalo.png";
import { ButtonArrowRight2 } from "../../ui/components/ButtonArrowRight2";
import { Template1 } from "../../ui/pages/Template1";
import { Template1Options } from "../../ui/pages/Template1";
import { Position } from "../../ui/pages/Template1";

const buttonRightInfo={
    text:"VER OPCIONES",
    color:"#6f3289",
    onclick:()=>{}
}

const templateOptions:Template1Options={
  image:gift,
  position:Position.Left,
 color:"#6f3289",
  backgroundColor:"#EDC7B9"
}

export const Store3 = () => {

  return (
   <Template1 {...templateOptions} >
    <div className="section3-store-internal-container right">
    <div className="section3-store-internal-text-container">

        <div className="title-container">
        <h2>
  REGALA UN TALISMÁN
  </h2>
  
        </div>
  
  

  <p>
  Cuando regalas un talismán, brindas a<br/> alguien querido <strong>la oportunidad de<br/> conectar con su deseo o propósito.</strong>
  </p>
  
  

  </div>
</div>
</Template1>
  );
};
