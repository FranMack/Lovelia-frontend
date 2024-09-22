import activation from "../assets/talisman_analog_activacion.png";
import { Template1 } from "../../ui/pages/Template1";
import { Template1Options } from "../../ui/pages/Template1";
import { Position } from "../../ui/pages/Template1";



const templateOptions: Template1Options = {
  image: activation,
  position: Position.Right,
  color: "#ffff",
  backgroundColor: "#662A80",
};

export const TalismanAnalogic4 = () => {


  return (
    <Template1 {...templateOptions}>
      <div className="section4-talismanAnalogic-internal-container right">
        <div className="section4-talismanAnalogic-internal-text-container">
          <h2>ACTIVA TU TALISMÁN</h2>

          <p>
            La activación de tu talismán es un ritual para que
            <br /> puedas conectarte{" "}
            <strong>
              profundamente con tu
              <br /> intención y energía personal.
            </strong>
            <br />A través de este proceso te embarcarás en un{" "}
            <strong>
              viaje
              <br /> introspectivo que fortalecerá tu conexión con tu
              <br /> ser interior
            </strong>
            , facilitando que tu intención se manifieste
            <br /> en tu vida diaria.
            <br />
            Este momento de activación{" "}
            <strong>
              es una oportunidad
              <br /> para centrarte
            </strong>
            , con intención y atención, enfocando
            <br /> tu energía en lo que verdaderamente deseas alcanzar.
          </p>
        </div>
      </div>
    </Template1>
  );
};
