import { useNavigate } from "react-router";
import { Button } from "../../ui/components";
import {
  Position,
  Template1,
  Template1Options,
} from "../../ui/pages/Template1";
import meditation from "../assets/talisman_digital_meditacion.webp";
import { useScrollReveal } from "../../hooks/useScrollReveal";

const templateOptions: Template1Options = {
  image: meditation,
  position: Position.Right,
  color: "#6f3289",
  backgroundColor: "#76CBC0",
};

export const TalismanDigital2 = () => {
  const navigate = useNavigate();
  const linkTo = () => {
    navigate("/buy-digital");
    
  };

   const animationRef = useScrollReveal<HTMLDivElement>("topReveal");
  return (
    <Template1 {...templateOptions}>
      <div ref={animationRef} className="talismanDigitalTemplate-container right">
        <div className="talismanDigitalTemplate-internal-text-container">
          <h2>
            (1)
            <br />
            MEDITACIÓN VISUAL
          </h2>
          <p>
            El Talismán Digital es una{" "}
            <strong>animación 3D única por cada usuario</strong>, cuidadosamente
            diseñada para reflejar el ADN energético de cada persona en el
            momento de su nacimiento.
          </p>
          <p>
            {" "}
            Esta meditación tiene como propósito principal
            <strong>
              {" "}
              inducir a la concentración y a la relajación profunda,
            </strong>{" "}
            ayudando a tu mente a{" "}
            <strong>
              liberar pensamientos intrusivos, y guiándola hacia la repetición
              de un ciclo continuo.
            </strong>
          </p>
        </div>
        <div className="button-container">
          <Button text="QUIERO MI TALISMÁN" onClick={linkTo} />
        </div>
      </div>
    </Template1>
  );
};
