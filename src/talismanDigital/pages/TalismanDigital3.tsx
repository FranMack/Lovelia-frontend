import sonido from "../assets/talisman_digital_sonidopng.png";
import { Template1 } from "../../ui/pages/Template1";
import { Template1Options } from "../../ui/pages/Template1";
import { Position } from "../../ui/pages/Template1";


const templateOptions: Template1Options = {
  image: sonido,
  position: Position.Left,
  color: "#6f3289",
  backgroundColor: "#EDC7B9",
};

export const TalismanDigital3 = () => {
  return (
    <Template1 {...templateOptions}>
      <div className="talismanDigitalTemplate-container right">
        <div className="talismanDigitalTemplate-internal-text-container">
          <h2>(2)<br/>TU SONIDO</h2>
          <p>
          Tu talismán está acompañado de un <strong>sonido<br/> especial,</strong> algo que puedes tocar siempre que lo<br/> necesites. Este sonido será tu compañero en<br/> momentos de meditación, <strong>para volver a tu<br/> centro, o para enfocar tus intenciones.</strong><br/> 
          Es tuyo, y puedes utilizarlo según lo que sientas<br/> en el momento. Establece un vínculo especial<br/> entre ese sonido y tu <strong>capacidad de regresar a<br/> tu esencia, a ese lugar de calma y<br/> autenticidad en tu interior.</strong>
          </p>
        </div>
      </div>
    </Template1>
  );
};
