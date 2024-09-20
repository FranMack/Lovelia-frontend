import sounds from "../assets/talisman_banco_sonidos.png";

import { Template1 } from "../../ui/pages/Template1";
import { Template1Options } from "../../ui/pages/Template1";
import { Position } from "../../ui/pages/Template1";

const templateOptions: Template1Options = {
  image: sounds,
  position: Position.Right,
  color: "#ffff",
  backgroundColor: "#D58630",
};

export const TalismanDigital8 = () => {
  return (
    <Template1 {...templateOptions}>
      <div className="talismanDigitalTemplate-container right">
        <div className="talismanDigitalTemplate-internal-text-container">
          <h2>
            (7)
            <br />
           BANCO DE SONIDOS
          </h2>
          <p>
          Lovelia pone a <strong>tu disposición sonidos y<br/> música</strong> para que medites o te acompañe<br/> en tu vida diaria.
          </p>
        </div>
      </div>
    </Template1>
  );
};
