import sonido from "../assets/talisman_digital_sonidopng.webp";
import { Template1 } from "../../ui/pages/Template1";
import { Template1Options } from "../../ui/pages/Template1";
import { Position } from "../../ui/pages/Template1";
import { Button } from "../../ui/components";
import { useNavigate } from "react-router";


const templateOptions: Template1Options = {
  image: sonido,
  position: Position.Left,
  color: "#6f3289",
  backgroundColor: "#EDC7B9",
};

export const TalismanDigital3 = () => {

  const navigate = useNavigate();
  const linkTo = () => {
    navigate("/buy-digital");
  };
  
  return (
    <Template1 {...templateOptions}>
      <div className="talismanDigitalTemplate-container right">
        <div className="talismanDigitalTemplate-internal-text-container">
          <h2>(2)<br/>TU SONIDO</h2>
          <p>
          Tu talismán está acompañado de un <strong>sonido especial,</strong> algo que puedes tocar siempre que lo necesites. Este sonido será tu compañero en momentos de meditación, <strong>para volver a tu centro, o para enfocar tus intenciones.</strong> 
          
          </p>
          <p>Es tuyo, y puedes utilizarlo según lo que sientas en el momento. Establece un vínculo especial entre ese sonido y tu <strong>capacidad de regresar a tu esencia, a ese lugar de calma y autenticidad en tu interior.</strong></p>
        </div>
        <div className="button-container">
          <Button text="QUIERO MI TALISMÁN" onClick={linkTo} />
        </div>
      </div>
    </Template1>
  );
};
