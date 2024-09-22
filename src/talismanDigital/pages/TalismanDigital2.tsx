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
            <strong>
              animación 3D única por
              <br /> cada usuario
            </strong>
            , cuidadosamente diseñada para reflejar
            <br /> el ADN energético de cada individuo en el momento de
            <br /> su nacimiento.
            <br /> Esta meditación tiene como propósito principal
            <br />{" "}
            <strong>
              inducir la concentración y la relajación
              <br />
              profunda,
            </strong>{" "}
            ayudando a tu mente a{" "}
            <strong>
              liberar
              <br /> pensamientos intrusivos,  y guiándola hacia la
              <br /> repetición de un ciclo continuo.
            </strong>
            <br /> Puedes acceder a esta meditación en todos tus
            <br /> dispositivos digitales, lo que te permite disfrutar de
            <br /> sus beneficios <strong>en cualquier momento y lugar.</strong>
          </p>
        </div>
      </div>
    </Template1>
  );
};
