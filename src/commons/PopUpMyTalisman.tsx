import { useState, useContext, useEffect } from "react";
import { CloseIcon } from "../assets/images/icons/icons";
import { Button } from "./Button";
import { UserContext } from "../context/userContext";



export interface PopUpOptions {
   
    handlePopUp: () => void;
 
  }

export function PopUpMyTalisman({handlePopUp}:PopUpOptions) {
  const [step, setStep] = useState("Paso 1");
  const { name } = useContext(UserContext);

 

  return (
    <>
      <div className="popUpMyTalisman-container efectoReveal">
        <div className="closeIcon-container">
          <CloseIcon onClick={() => {handlePopUp()}} />
        </div>

        {step === "Paso 1" && (
          <div className="popUpMyTalisman-center-container">
            <h4>{`Hola ${name}, Quieres activar tu talismán?`}</h4>

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
                Piensa en una intención, deseo o algo que quieras
                lograr.
                <ul>
                  <li>Exprésalo en forma positiva</li>

                  <li>Que dependa de ti</li>
                  <li>Que sea algo bueno para ti y para quienes te rodean.</li>
                </ul>
              </li>
            </ol>

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
          Te invito a que mires tu talismán con detenimiento, tocando ahora el botón de tu  sonido (el sonido se repite 3 veces), y llevando una de tus manos al corazón:
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
              <li>Cada vez que toques el sonido, te recordará tu intención  y te permitirá volver a tu centro.</li>
              <li>
              Cuando quieras cambiar tu intención, vuelve a iniciar este proceso.
                
              </li>
              <li>
              Activar tu talismán te permite conectarte con la intención que deseas a través de este ritual.
                
              </li>
            </ul>

            <div className="button-auxiliar-container">
              <Button
                onClick={handlePopUp}
                text="Finalizar"
              />
            </div>
          </div>
        )}






      </div>
    </>
  );
}
