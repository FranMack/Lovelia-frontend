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
            <span>LA ENERGÍA DE LOS ASTROS</span> <br />
            Lorem ipsum dolor sit amet, consectetur
            <br /> adipiscing elit, sed do eiusmod tempor
            <br /> incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </Template1>
  );
};
