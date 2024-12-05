import { useNavigate } from "react-router";
import { Button } from "../../ui/components";
import {
  Position,
  Template1,
  Template1Options,
} from "../../ui/pages/Template1";
import activation from "../assets/talisman_digital_activacion.webp";

const templateOptions: Template1Options = {
  image: activation,
  position: Position.Right,
  color: "#ffff",
  backgroundColor: "#82B74D",
};

export const TalismanDigital4 = () => {
  const navigate = useNavigate();
  const linkTo = () => {
    navigate("/buy-digital");
  };
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
            La activación de tu talismán es un ritual para que puedas{" "}
            <strong>
              conectarte profundamente con tu intención y energía personal.
            </strong>{" "}
          </p>
          <p>
            A través de este proceso te embarcarás en un{" "}
            <strong>
              viaje introspectivo que fortalecerá tu conexión con tu ser
              interior,
            </strong>{" "}
            facilitando que tu intención se manifieste en tu vida diaria.
          </p>
          <p>
            Este momento de activación{" "}
            <strong>
              es una oportunidad para centrarte, con intención y atención,
            </strong>{" "}
            enfocando tu energía en lo que verdaderamente deseas alcanzar.
          </p>
        </div>
        <div className="button-container">
          <Button text="QUIERO MI TALISMÁN" onClick={linkTo} />
        </div>
      </div>
    </Template1>
  );
};
