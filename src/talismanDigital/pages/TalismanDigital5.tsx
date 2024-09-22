import meditaciones from "../assets/talisman_digital_meditaciones.png"
import { Template1 } from "../../ui/pages/Template1";
import { Template1Options } from "../../ui/pages/Template1";
import { Position } from "../../ui/pages/Template1";


const templateOptions: Template1Options = {
  image: meditaciones,
  position: Position.Left,
  color: "#6f3289",
  backgroundColor: "#ECEA60",
};

export const TalismanDigital5 = () => {
  return (
    <Template1 {...templateOptions}>
      <div className="talismanDigitalTemplate-container right">
        <div className="talismanDigitalTemplate-internal-text-container">
          <h2>(4)<br/>MEDITACIONES LOVELIA</h2>
          <p>
          Tendrás <strong>acceso ilimitado</strong> a una biblioteca con<br/> meditaciones de Lovelia para que las puedas<br/> usar en <strong>cualquier momento y lugar.</strong>
          </p>
        </div>
      </div>
    </Template1>
  );
};
