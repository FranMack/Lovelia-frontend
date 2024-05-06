import { useState } from "react";
import talismanDigital from "../assets/images/talisman-digital.png";
import { ejemploTalismanes } from "../assets/images/ejemplos-talismanes/ejemplosTalismanes";
import { RightNextIcon } from "../assets/images/icons/icons";
import { ButtonArrowRight } from "../commons/ButtonArrowRight";
import { Button } from "../commons/Button";
import { ButtonArrowUp } from "../commons/ButtonArrowUp";

const precio="0.000"

export function BuyDigitalTalisman() {
  const [index, setIndex] = useState<number>(0);

  const handleIndex = () => {
    if (index < ejemploTalismanes.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  return (
    <section className="buyDigitalTalisman-container">
      <div className="buyDigitalTalisman-internal-container">
        <img src={talismanDigital} alt="talisman digital" />
        <div className="buyDigitalTalisman-internal-bullet-container left">
          {ejemploTalismanes.map((item, i) => {
            return (
              <div
                className={index === i ? "bullet-visible" : "bullet"}
                key={i}
              >
                <img src={item.image} alt={item.title} />
              </div>
            );
          })}
        </div>
        <div
          onClick={handleIndex}
          className="buyDigitalTalisman-internal-arrow-container"
        >
          <RightNextIcon />
        </div>
      </div>

      <div className="buyDigitalTalisman-internal-container right">
        <h6>Inicio /Tienda /Talisman Digital</h6>
        <h5>$0.000</h5>
        <h3>Talisman Digital</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.{" "}
        </p>
        <strong>Descripción y detalles</strong>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.{" "}
        </p>
        <p><strong>Para generar tu talismán necesitaremos “estos” datos luego del pago....</strong></p>
      <div className="buttons-arrows-container">
        

      <ButtonArrowRight text="¿Qué hay dentro del talismán digital?" color="#6f3289"/>
      
      </div>

       

      <div className="buttons-container">
        <Button text={`$${precio}  Ir a comprar`}/>
        <div className="auxiliar-buttons-container">
        <ButtonArrowUp text="Devoluciones y envío" color="#6f3289"/>
    <Button text="Agregar al carrito de compras"/>
    </div>
    </div>
      </div>

     
    </section>
  );
}
