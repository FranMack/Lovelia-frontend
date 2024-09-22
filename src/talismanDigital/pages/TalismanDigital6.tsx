import adnEnergetico from "../assets/talisman_digital_ADN.png"
import { Template1 } from "../../ui/pages/Template1";
import { Template1Options } from "../../ui/pages/Template1";
import { Position } from "../../ui/pages/Template1";


const templateOptions: Template1Options = {
  image: adnEnergetico,
  position: Position.Right,
  color: "#ffff",
  backgroundColor: "#662A80",
};

export const TalismanDigital6 = () => {
  return (
    <Template1 {...templateOptions}>
      <div className="talismanDigitalTemplate-container right">
        <div className="talismanDigitalTemplate-internal-text-container">
          <h2>(5)<br/>TU ADN ENERGÉTICO</h2>
          <p>
          <span>LA ENERGÍA DE LOS ASTROS</span> <br/>
          Lorem ipsum dolor sit amet, consectetur<br/> adipiscing elit, sed do eiusmod tempor<br/> incididunt ut labore et dolore magna aliqua. 
          </p>

          <p>
          <span>LA ENERGÍA DE LOS NÚMEROS</span> <br/>
          Lorem ipsum dolor sit amet, consectetur<br/> adipiscing elit, sed do eiusmod tempor<br/> incididunt ut labore et dolore magna aliqua. 
          </p>
  
          <p>
          <span>LA ENERGÍA DE LA NATURALEZA </span><br/>
          Lorem ipsum dolor sit amet, consectetur<br/> adipiscing elit, sed do eiusmod tempor<br/> incididunt ut labore et dolore magna aliqua. 
          </p>
          
          
        </div>
      </div>
    </Template1>
  );
};
