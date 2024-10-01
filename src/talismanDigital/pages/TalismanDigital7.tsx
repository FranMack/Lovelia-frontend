import timer from "../assets/talisman_digital_timer.png";
import { Template1 } from "../../ui/pages/Template1";
import { Template1Options } from "../../ui/pages/Template1";
import { Position } from "../../ui/pages/Template1";

const templateOptions: Template1Options = {
  image: timer,
  position: Position.Left,
  color: "#6f3289",
  backgroundColor: "#FFEFEE",
};

export const TalismanDigital7 = () => {
  return (
    <Template1 {...templateOptions}>
      <div className="talismanDigitalTemplate-container right">
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
      </div>
    </Template1>
  );
};
