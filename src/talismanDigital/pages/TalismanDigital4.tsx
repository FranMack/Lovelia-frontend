import activation from "../assets/talisman_digital_activacion.png";
import { ButtonArrowRight } from "../../ui/components";
import { Template1 } from "../../ui/pages/Template1";
import { Template1Options } from "../../ui/pages/Template1";
import { Position } from "../../ui/pages/Template1";

const buttonRightInfo = {
  text: "SEGUIR LEYENDO",
  color: "#6f3289",
  onclick: () => {},
};

const templateOptions: Template1Options = {
  image: activation,
  position: Position.Right,
  color: "#ffff",
  backgroundColor: "#82B74D",
};

export const TalismanDigital4 = () => {
  return (
    <Template1 {...templateOptions}>
      <div className="talismanDigitalTemplate-container right">
        <div className="talismanDigitalTemplate-internal-text-container">
          <h2>
            (3)
            <br />
            ACTIVACIÓN
          </h2>
          <p>
            La activación de tu talismán es un ritual para que<br/> puedas <strong>conectarte
            profundamente con tu<br/> intención y energía personal.</strong> </p>
            <p>
            A través de este
            proceso te embarcarás en un <strong>viaje<br/> introspectivo que fortalecerá tu
            conexión con<br/> tu ser interior,</strong> facilitando que tu intención se<br/>
            manifieste en tu vida diaria.
            </p>
            <p>
            Este momento de activación <strong>es una
            oportunidad<br/> para centrarte, con intención y atención,</strong><br/> enfocando tu
            energía en lo que verdaderamente <br/>deseas alcanzar.
            </p>
          
        </div>
      </div>
    </Template1>
  );
};
