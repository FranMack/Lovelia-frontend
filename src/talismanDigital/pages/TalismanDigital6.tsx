import adnEnergetico from "../assets/talisman_digital_ADN.webp"
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
          Los astros ejercen una influencia tanto energética como simbólica en la
vida de las personas y en los acontecimientos en la Tierra. Al momento
del nacimiento de una persona, así como en momentos específicos, las
posiciones de estos cuerpos celestes en el cielo pueden impactar en su
personalidad, emociones y trayectoria vital.
          </p>

          <p>
          <span>LA ENERGÍA DE LOS NÚMEROS</span> <br/>
          Cada número emite una frecuencia única que puede influir en el estado
emocional, las relaciones y personalidad de un individuo.
El sendero de vida, que se determina a partir de la fecha de nacimiento,
revela el propósito y las lecciones esenciales que una persona debe
aprender a lo largo de su vida.
          </p>
  
          <p>
          <span>LA ENERGÍA DE LA NATURALEZA </span><br/>
          El horóscopo chino se basa en la observación de la naturaleza y los
ciclos de vida, combinando animales, elementos, y principios de Yin y
Yang, que reflejan cómo los seres humanos se relacionan con el
entorno que los rodea, ofreciendo un marco para la autoexploración y
la comprensión de las influencias astrológicas en la vida de las
personas.
          </p>

          <p>
          <span>LA ENERGÍA DE LOS MAYAS </span><br/>
          El Kin Maya es una parte integral del calendario maya, y se relaciona
con ciertas cualidades, emociones y energías que influyen en la vida de
las personas según el día de su nacimiento. Es una herramienta que
busca conectar a los individuos con el cosmos y su propósito en la vida.
          </p>
          
          
        </div>
      </div>
    </Template1>
  );
};
