import meditation from "../assets/talisman_digital_meditacion.png";
import { Template1 } from "../../ui/pages/Template1";
import { Template1Options } from "../../ui/pages/Template1";
import { Position } from "../../ui/pages/Template1";

const templateOptions: Template1Options = {
  image: meditation,
  position: Position.Right,
  color: "#6f3289",
  backgroundColor: "#76CBC0",
};

export const TalismanDigital2 = () => {
  return (
    <Template1 {...templateOptions}>
      <div className="talismanDigitalTemplate-container right">
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
            {" "}inducir a la concentración y a la relajación profunda,
            </strong>{" "}
            ayudando a tu mente a{" "}
            <strong>
              liberar pensamientos intrusivos,  y guiándola hacia la repetición
              de un ciclo continuo.
            </strong>
           
          </p>
        </div>
      </div>
    </Template1>
  );
};
