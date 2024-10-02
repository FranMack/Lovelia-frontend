import { useState, useContext } from "react";
import { ejDigitalTalisman } from "../assets/ejDigitalTalisman";
import { RightNextIcon } from "../../assets/icons/icons";
import { Button } from "../../ui/components/Button";
import { UserContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";
import { PopUp } from "../../ui/components/PopUp";

const precio = "15,00";

export function BuyDigitalTalisman() {
  window.scrollTo(0, 0);
  const [index, setIndex] = useState<number>(0);

  const [popUp, setPopUp] = useState<boolean>(false);
  const togglePopUp = () => {
    setPopUp(!popUp);
  };

  const nextIndex = () => {
    if (index < ejDigitalTalisman.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };
  const previousIndex = () => {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(ejDigitalTalisman.length - 1);
    }
  };

  const { email, subscription } = useContext(UserContext);

  const navigate = useNavigate();

  const linkTo = () => {
    navigate("/portal-usuario");
  };

  const handleBuyTalisman = () => {
    if (!email) {
      setPopUp(true);
      return;
    }
    if (subscription) {
      navigate("/profile");
    } else {
      navigate("/checkout/digital");
    }
  };

  return (
    <section className="buyDigitalTalisman-container efectoReveal">
      {popUp && <PopUp linkTo={linkTo} closePopUp={togglePopUp} buttonText="Continuar" text="Para adquirir tu talismán digital debes estar logueado." />}
      <div
        style={{ opacity: popUp ? "0.4" : "1" }}
        className="buyDigitalTalisman-internal-container"
      >
        <img src={ejDigitalTalisman[index].image} alt="talisman digital" />
        <div className="buyDigitalTalisman-internal-bullet-container left">
          {ejDigitalTalisman.map((item, i) => {
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
          onClick={previousIndex}
          className="buyDigitalTalisman-internal-arrow-container left"
        >
          <RightNextIcon />
        </div>
        <div
          onClick={nextIndex}
          className="buyDigitalTalisman-internal-arrow-container"
        >
          <RightNextIcon />
        </div>
      </div>

      <div
        className="buyDigitalTalisman-internal-container right"
        style={{ opacity: popUp ? "0.4" : "1" }}
      >
        <div className="buyDigitalTalisman-internal-center-container">
          <h2>Inicio /Tienda /Talismán Digital</h2>

          <h3>Talismán Digital</h3>
          <h5>{`$${precio}`}</h5>

          <h6>Descripción y detalles</h6>
          <p>
          El Talismán Digital es una animación 3D única por cada usuario, cuidadosamente diseñada para reflejar el ADN energético de cada individuo en el momento de su nacimiento.
          </p>
          <h6>Importante:</h6>
          <div className="info-requerida-container">
            <p>Para generar tu talismán necesitaremos:</p>
            <ul>
              <li>Nombre completo</li>
              <li>Lugar, fecha, y hora de nacimiento</li>
             
            </ul>
          </div>
        </div>

        <div className="buttons-container">
          <div className="auxiliar-buttons-container">
            <Button onClick={handleBuyTalisman} text={`Suscribirme`} />
          </div>
        </div>
      </div>
    </section>
  );
}
