import axios from 'axios';
import {ChangeEvent, useContext, useEffect, useState} from 'react';
import {CloseIcon} from '../../assets/icons/icons';
import {envs} from '../../config/envs';
import {TalismanButtonFocusContext} from '../../context';
import {ActivationStepsContex} from '../../context/activationStepsContext';
import {IntentionContext} from '../../context/intentionContext';
import {TalismanAudioContext} from '../../context/talismanAudioContext';
import {UserContext} from '../../context/userContext';
import {Button} from '../../ui/components/Button';

export interface PopUpOptions {
  handleActivation: () => void;
  pauseTrack: (type: string) => void;
}

export function Activation({handleActivation, pauseTrack}: PopUpOptions) {
  const {step, setStep} = useContext(ActivationStepsContex);
  const {name, email} = useContext(UserContext);
  const {intention, setIntention} = useContext(IntentionContext);
  const {handleButtonFocus} = useContext(TalismanButtonFocusContext);
  const {audioType, handlePlaying, setAudioType} =
    useContext(TalismanAudioContext);

  const [inputIntention, setInputIntention] = useState('');
  const [warning, setWarning] = useState<boolean>(false);

  const handleInputIntention = (event: ChangeEvent<HTMLInputElement>) => {
    setInputIntention(event.target.value);
  };

  const handleSubmitIntention = () => {
    if (email && inputIntention) {
      axios
        .patch(
          `${envs.API_DOMAIN}/api/v1/user/add-intention`,
          {email, intention: inputIntention},
          {withCredentials: true},
        )
        .then(() => {
          setIntention(inputIntention);
        });
    }
  };

  useEffect(() => {
    pauseTrack(audioType);
    handlePlaying(false);
    setAudioType('');
  }, []);

  return (
    <>
      <div className="activation-container ">
        <div className="closeIcon-container">
          <CloseIcon
            onClick={() => {
              handleButtonFocus('');
              setStep('Paso 1');
            }}
          />
        </div>

        {step === 'Paso 1' && (
          <div className="activation-center-container">
            {intention ? (
              <h4>{`Hola ${name}, Quieres modificar tu intención?`}</h4>
            ) : (
              <h4>{`Hola ${name}, Quieres intencionar con tu talismán?`}</h4>
            )}

            <div className="button-auxiliar-container">
              <Button
                onClick={() => {
                  setStep('Paso 2');
                }}
                text="Siguiente"
              />
            </div>
          </div>
        )}

        {step === 'Paso 2' && (
          <div className="activation-center-container">
            <h4>Busca un lugar tranquilo</h4>
            <ol >
              <li>
                Piensa en una Intención, en un deseo o en algo que quieras
                lograr.
    
              </li>
            </ol>

            <ul>
              <li>Exprésalo en forma positiva.</li>
              <li> Que dependa de ti.</li>
              <li> Que sea algo bueno para ti y para quienes te rodean.</li>
            </ul>
            <div className="button-auxiliar-container">
              <Button
                onClick={() => {
                  setStep('Paso 3');
                }}
                text="Siguiente"
              />
            </div>
          </div>
        )}

       

        {step === 'Paso 3' && (
          <div className="activation-center-container">
            <h4>Expresa tu deseo o intención</h4>
            <input
              className={warning ? 'input-warning' : ''}
              value={inputIntention}
              onChange={handleInputIntention}
              type="text"
              placeholder="Tu intención"
            />
            {warning && <strong>Debes completar la intención</strong>}

            <div className="button-auxiliar-container">
              <Button
                onClick={() => {
                  if (!inputIntention) {
                    setWarning(true);
                    return;
                  }
                  handleSubmitIntention();
                  handleActivation();
                  setStep('Paso 4');
                }}
                text="Continuar"
              />
            </div>
          </div>
        )}

        {step === 'Paso 4' && (
          <div className="activation-center-container">
            <ol>
              <li>
                Te invito a que mires tu talismán con detenimiento, tocando
                ahora el botón de tu sonido, y llevando una de tus manos al
                corazón:
              </li>
            </ol>
            <div className="button-auxiliar-container">
              <Button
                onClick={() => {
                  handleButtonFocus('');
                }}
                text="Continuar"
              />
            </div>
          </div>
        )}

        {step === 'Paso 5' && (
          <div className="activation-center-container">
            <ol>
              <li>
                Cada vez que toques el sonido, te recordará tu intención y te
                permitirá volver a tu centro. Cuando quieras cambiar tu
                intención, vuelve a iniciar este proceso.
              </li>
            </ol>
            <div className="button-auxiliar-container">
              <Button
                onClick={() => {
                  handleButtonFocus('');
                  setStep('Paso 1');
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
