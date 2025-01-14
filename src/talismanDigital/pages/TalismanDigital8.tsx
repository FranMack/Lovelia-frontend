import { useNavigate } from "react-router";
import { Button } from "../../ui/components";
import {
  Position,
  Template1,
  Template1Options,
} from "../../ui/pages/Template1";
import sounds from "../assets/talisman_banco_sonidos.webp";
import { useScrollReveal } from "../../hooks/useScrollReveal";

const templateOptions: Template1Options = {
  image: sounds,
  position: Position.Right,
  color: "#ffff",
  backgroundColor: "#D58630",
};

export const TalismanDigital8 = () => {
  const navigate = useNavigate();
  const linkTo = () => {
    navigate("/buy-digital");
  };

    const animationRef = useScrollReveal<HTMLDivElement>('topReveal');
  return (
    <Template1 {...templateOptions}>
      <div ref={animationRef} className="talismanDigitalTemplate-container right">
        <div className="talismanDigitalTemplate-internal-text-container">
          <h2>
            (7)
            <br />
            BANCO DE SONIDOS
          </h2>
          <p>
            Lovelia pone a <strong>tu disposición sonidos y música</strong> para
            que medites o te acompañe en tu vida diaria.
          </p>
        </div>
        <div className="button-container">
          <Button text="QUIERO MI TALISMÁN" onClick={linkTo} />
        </div>
      </div>
    </Template1>
  );
};
