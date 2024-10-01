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
            La activación de tu talismán es un ritual para que puedas conectarte{" "}
            <strong>profundamente con tu intención y energía personal.</strong>
          </p>

         
          <p>
            A través de este proceso puedes embarcarte en un <strong>viaje introspectivo
            que fortalecerá la conexión con tu ser interior</strong>, facilitando que tu
            intención se manifieste en tu vida diaria.
          </p>

          <p>
            Con la compra de tu talismán recibirás un <strong>QR para realizar la
            activación</strong>, y será <strong>una oportunidad para centrarte</strong> con intención y
            atención enfocando tu energía en lo que realmente deseas alcanzar.
          </p>
        </div>
      </div>
    </Template1>
  );
};
