import timer from "../assets/talisman_digital_timer.webp";
import { Template1 } from "../../ui/pages/Template1";
import { Template1Options } from "../../ui/pages/Template1";
import { Position } from "../../ui/pages/Template1";
import { Button } from "../../ui/components";
import { useNavigate } from "react-router";
import { useScrollReveal } from "../../hooks/useScrollReveal";

const templateOptions: Template1Options = {
  image: timer,
  position: Position.Left,
  color: "#6f3289",
  backgroundColor: "#FFEFEE",
};

export const TalismanDigital7 = () => {

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
            (6)
            <br />
            TIMER
          </h2>
          <p>
          Tendrás la posibilidad de usar el timer <strong>para meditar</strong> y para también <strong>programar tu sonido personal.</strong>
          </p>
        </div>
        <div className="button-container">
          <Button text="QUIERO MI TALISMÁN" onClick={linkTo} />
        </div>
      </div>
    </Template1>
  );
};
