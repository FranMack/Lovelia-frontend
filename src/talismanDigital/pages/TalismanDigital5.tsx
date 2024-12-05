import meditaciones from "../assets/talisman_digital_meditaciones.webp"
import { Template1 } from "../../ui/pages/Template1";
import { Template1Options } from "../../ui/pages/Template1";
import { Position } from "../../ui/pages/Template1";
import { useNavigate } from "react-router";
import { Button } from "../../ui/components";


const templateOptions: Template1Options = {
  image: meditaciones,
  position: Position.Left,
  color: "#6f3289",
  backgroundColor: "#ECEA60",
};

export const TalismanDigital5 = () => {
  const navigate = useNavigate();
  const linkTo = () => {
    navigate("/buy-digital");
  };
  return (
    <Template1 {...templateOptions}>
      <div className="talismanDigitalTemplate-container right">
        <div className="talismanDigitalTemplate-internal-text-container">
          <h2>(4)<br/>MEDITACIONES LOVELIA</h2>
          <p>
          Tendrás <strong>acceso ilimitado</strong> a una biblioteca con meditaciones de Lovelia para que las puedas usar en <strong>cualquier momento y lugar.</strong>
          </p>
        </div>
        <div className="button-container">
          <Button text="QUIERO MI TALISMÁN" onClick={linkTo} />
        </div>
      </div>
    </Template1>
  );
};
