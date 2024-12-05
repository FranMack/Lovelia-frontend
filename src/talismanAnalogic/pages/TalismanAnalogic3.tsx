import { useState } from "react";
import { ButtonTransparent } from "../../ui/components";
import { Slider } from "../components/Slider";
import { Button } from "../../ui/components";
import {
  infoStones,
  infoTalismans,
  infoChains,
  infoMaterials,
} from "../assets";
import { infoIntenciones } from "../assets/infoIntentions";
import background from "../assets/talisman_analog_options.webp";
import { useNavigate } from "react-router";

// Definir las opciones de botones y sus datos relacionados
const OPTIONS = [
  { id: "MODELOS", label: "MODELOS", data: infoTalismans },
  { id: "METAL", label: "METAL", data: infoMaterials },
  { id: "PIEDRAS", label: "PIEDRAS", data: infoStones },
  { id: "COLGANTE", label: "COLGANTE", data: infoChains },
  { id: "INTENCIONES", label: "INTENCIONES", data: infoIntenciones },
];

// Componente para renderizar botones
const OptionButton = ({
  id,
  label,
  isActive,
  onClick,
}: {
  id: string;
  label: string;
  isActive: boolean;
  onClick: (id: string) => void;
}) => (
  <ButtonTransparent
    color={isActive ? "#662A80" : ""}
    backgroundColor={isActive ? "#ECEA60" : ""}
    text={label}
    onClick={() => onClick(id)}
  />
);

export const TalismanAnalogic3 = () => {
  const [activeOption, setActiveOption] = useState<string>("MODELOS");

  // Obtener los datos correspondientes a la opción activa
  const activeData = OPTIONS.find((option) => option.id === activeOption)?.data;

  const navigate=useNavigate();

  const linkTo=()=>{
    navigate("/buy-analogic")
  }

  return (
    <section className="section3-talismanAnalogic-container">
      <img src={background} alt="pink sky" />
      <div className="section3-talismanAnlaogic-top-container">
        <h2>TUS OPCIONES</h2>
        <div className="section3-talismanAnlaogic-buttons-container">
          {OPTIONS.map((option) => (
            <OptionButton
              key={option.id}
              id={option.id}
              label={option.label}
              isActive={activeOption === option.id}
              onClick={setActiveOption}
            />
          ))}
        </div>
      </div>
      <div className="section3-talismanAnlaogic-center-container">
        {activeData && <Slider sliderInfo={activeData} />}
      </div>
  <Button text="Arma tu Talismán" onClick={linkTo}/>
    </section>
  );
};