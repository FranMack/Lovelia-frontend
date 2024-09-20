import imagen1 from "../assets/talisman-fisico.png";
import {
  default as imagen2,
  default as imagen4,
} from "../assets/talisman-fisico2.png";

export interface ejemploTalismanAnalogicosOptions {
  title: string;
  image: string;
  description: string;
}

export const ejemploTalismanesAnalogicos: ejemploTalismanAnalogicosOptions[] = [
  { title: "EJEMPLO A", image: imagen1, description: "Descripción modelo" },
  { title: "EJEMPLO B", image: imagen1, description: "Descripción modelo" },
  { title: "EJEMPLO C", image: imagen2, description: "Descripción modelo" },
  { title: "EJEMPLO D", image: imagen4, description: "Descripción modelo" },
];
