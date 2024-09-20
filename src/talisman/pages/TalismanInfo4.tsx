import talismanDigital from "../assets/talisman_info_ta.png"
import { Template1 } from "../../ui/pages/Template1";
import { Template1Options } from "../../ui/pages/Template1";
import { Position } from "../../ui/pages/Template1";
import { ButtonArrowRight2 } from "../../ui/components/ButtonArrowRight2";
import { OptionsArrowRight2 } from "../../ui/components/ButtonArrowRight2";
import { ObliqueArrow } from "../../assets/icons/icons";
import { useNavigate } from "react-router-dom";



const templateOptions:Template1Options={
  image:talismanDigital,
  position:Position.Right,
  color:"#ffff",
  backgroundColor:"#82B74D"
}

export const TalismanInfo4 = () => {
  const navigate=useNavigate()
  const linkToTalismanDigital=()=>{navigate("/talisman-analogico")}


  const buttonRightInfo:OptionsArrowRight2={
    text:"VER MÁS",
    color:"#ffffff",
    onClick:linkToTalismanDigital
}

  return (
   <Template1 {...templateOptions} >
    <div className="talismanInfo3-internal-container right">
    <div className="talismanInfo3-internal-text-container">
  <h2>
    <div className="icon-container">
      <ObliqueArrow color="#ffff"/>
    </div>
    TALISMÁN
  </h2>
  <h2>ANALÓGICO</h2>
  <br/>
  <br/>
  

  
  <p>
  Los talismanes analógicos Lovelia son una<br/> <strong>manifestación física de nuestras intenciones,</strong> un<br/> <strong>reflejo de nuestro poder interior</strong> y de la maravillosa<br/> capacidad que todos poseemos para <strong>co-crear<br/> nuestra propia realidad. </strong>
  
 </p>
 <p>
 Tendrás la libertad de elegir cuidadosamente cada<br/> elemento que lo conforma, incluso la intención que<br/> deseas que esté presente en este momento de tu vida.
 </p>
  <div className="button-wrapper">
  
  </div>
<ButtonArrowRight2 {...buttonRightInfo}/>
  </div>
</div>
</Template1>
  );
};
