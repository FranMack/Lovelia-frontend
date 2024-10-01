import { useState } from "react";
import { ButtonTransparent } from "../../ui/components";
import { Slider } from "../components/Slider";
import {
  infoStones,
  infoTalismans,
  infoChains,
  infoMaterials,
} from "../assets";
import background from "../assets/talisman_analog_options.png";

export const TalismanAnalogic3 = () => {
  const [buttonPosition, setButtonPosition] = useState<string>("MODELOS");
  return (
    <section className="section3-talismanAnalogic-container">
      <img src={background} alt="pink sky" />
      <div className="section3-talismanAnlaogic-top-container">
        <h2>TUS OPCIONES</h2>
        <div className="section3-talismanAnlaogic-buttons-container">
          <ButtonTransparent
            color={buttonPosition === "MODELOS" ? "#662A80" : ""}
            backgroundColor={buttonPosition === "MODELOS" ? "#ECEA60" : ""}
            text="MODELOS"
            onClick={() => {
              setButtonPosition("MODELOS");
            }}
          />
             <ButtonTransparent
            color={buttonPosition === "METAL" ? "#662A80" : ""}
            backgroundColor={
              buttonPosition === "METAL" ? "#ECEA60" : ""
            }
            text="METAL"
            onClick={() => {
              setButtonPosition("METAL");
            }}
          />
          <ButtonTransparent
            color={buttonPosition === "PIEDRAS" ? "#662A80" : ""}
            backgroundColor={buttonPosition === "PIEDRAS" ? "#ECEA60" : ""}
            text="PIEDRAS"
            onClick={() => {
              setButtonPosition("PIEDRAS");
            }}
          />
          <ButtonTransparent
            color={buttonPosition === "COLGANTE" ? "#662A80" : ""}
            backgroundColor={buttonPosition === "COLGANTE" ? "#ECEA60" : ""}
            text="COLGANTE"
            onClick={() => {
              setButtonPosition("COLGANTE");
            }}
          />
       
        </div>
      </div>
      <div className="section3-talismanAnlaogic-center-container">
        {buttonPosition === "MODELOS" && <Slider sliderInfo={infoTalismans} />}
        {buttonPosition === "METAL" && (
          <Slider sliderInfo={infoMaterials} />
        )}
        {buttonPosition === "PIEDRAS" && <Slider sliderInfo={infoStones} />}
        {buttonPosition === "COLGANTE" && <Slider sliderInfo={infoChains} />}
        
      </div>
    </section>
  );
};
