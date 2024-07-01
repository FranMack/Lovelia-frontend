import { ChangeEvent, useContext, useState } from "react";
import { CloseIcon } from "../assets/images/icons/icons";
import { UserContext } from "../context/userContext";
import { Button } from "./Button";
import { IntentionContext } from "../context/intentionContext";
import { envs } from "../config/envs";
import axios from "axios";

export interface PopUpOptions {
  handlePopUp: () => void;
}

export function PopUpMyTalisman({ handlePopUp }: PopUpOptions) {
  const [step, setStep] = useState("Paso 1");
  const { name, email } = useContext(UserContext);
  const { intention, setIntention } = useContext(IntentionContext);

  const [inputIntention,setInputIntention]=useState("");

  const handleInputIntention=(event:ChangeEvent<HTMLInputElement>)=>{
    setInputIntention(event.target.value)
  }

  const handleSubmitIntention = () => {
    if (email && inputIntention) {
      axios.patch(
        `${envs.API_DOMAIN}/api/v1/user/add-intention`,
        { email, intention:inputIntention },
        { withCredentials: true }
      )
      .then(()=>{setIntention(inputIntention)})
    }
  };

  return (
    <>
      <div className="popUpMyTalisman-container efectoReveal">
        <div className="closeIcon-container">
          <CloseIcon
            onClick={() => {
              handlePopUp();
            }}
          />
        </div>

        {step === "Paso 1" && (
          <div className="popUpMyTalisman-center-container">
            {intention ? (
              <h4>{`Hola ${name}, Quieres modificar tu intensión?`}</h4>
            ) : (
              <h4>{`Hola ${name}, Quieres activar tu talismán?`}</h4>
            )}

            <div className="button-auxiliar-container">
              <Button
                onClick={() => {
                  setStep("Paso 2");
                }}
                text="Continuar"
              />
            </div>
          </div>
        )}

        {step === "Paso 2" && (
          <div className="popUpMyTalisman-center-container">
            <ol>
              <li>Busca un lugar tranquilo.</li>
              <li>
                Piensa en una intención, deseo o algo que quieras lograr.
                <ul>
                  <li>Exprésalo en forma positiva</li>

                  <li>Que dependa de ti</li>
                  <li>Que sea algo bueno para ti y para quienes te rodean.</li>
                </ul>
              </li>
            </ol>
            <label htmlFor="">Escribe tu intensión</label>
            <input
              value={inputIntention}
              onChange={handleInputIntention}
              type="text"
              placeholder="Tu intención"
            />

            <div className="button-auxiliar-container">
              <Button
                onClick={() => {
                  setStep("Paso 3");
                }}
                text="Continuar"
              />
            </div>
          </div>
        )}

        {step === "Paso 3" && (
          <div className="popUpMyTalisman-center-container">
            <p>
              Te invito a que mires tu talismán con detenimiento, tocando ahora
              el botón de tu sonido (el sonido se repite 3 veces), y llevando
              una de tus manos al corazón:
            </p>

            <div className="button-auxiliar-container">
              <Button
                onClick={() => {
                  setStep("Paso 4");
                }}
                text="Continuar"
              />
            </div>
          </div>
        )}

        {step === "Paso 4" && (
          <div className="popUpMyTalisman-center-container">
            <ul>
              <li>
                Cada vez que toques el sonido, te recordará tu intención y te
                permitirá volver a tu centro.
              </li>
              <li>
                Cuando quieras cambiar tu intención, vuelve a iniciar este
                proceso.
              </li>
              <li>
                Activar tu talismán te permite conectarte con la intención que
                deseas a través de este ritual.
              </li>
            </ul>

            <div className="button-auxiliar-container">
              <Button
                onClick={() => {
                  handleSubmitIntention();
                  handlePopUp();
                }}
                text="Finalizar"
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
