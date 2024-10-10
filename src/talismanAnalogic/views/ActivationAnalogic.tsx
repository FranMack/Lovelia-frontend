import { useEffect, useRef, useState } from "react";
import { PlayIcon, StopIcon, RestartIcon } from "../../assets/icons/icons";
import { Button } from "../../ui/components/Button";
import { infoIntenciones } from "../../intentions/assets/infoIntentions";
import { envs } from "../../config";
import { useParams } from "react-router-dom";



 const ActivationAnalogic = () => {

  const { id } = useParams();
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    if (id) {
      setPage(parseInt(id));
    }
  }, [id]);
  const [step, setStep] = useState<number>(1);

  const handleStep = () => {
    if (step === 3) {
      return;
    }
    setStep(step + 1);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const activationSoundRef = useRef<HTMLAudioElement | null>(null);

  const [playing, setPlaying] = useState<boolean>(false);
  const [activationFinished, setActivationFinished] = useState<boolean>(false);

  const playActivation = () => {
    if (activationSoundRef.current) {
      activationSoundRef.current.play();


      setPlaying(true);

      activationSoundRef.current.addEventListener("ended", () => {
        setPlaying(false);
        setActivationFinished(true);
      });
    }
  };

  const stopActivation = () => {
    if (activationSoundRef.current) {
      activationSoundRef.current.pause();
      setPlaying(false);
    }
  };

  const restartActivation = () => {
    if (activationSoundRef.current) {
      activationSoundRef.current.pause();
      activationSoundRef.current.currentTime = 0;
      activationSoundRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <section
      className="activationAnalogic-container"
      style={{ justifyContent: playing ? "center" : "start" }}
    >
      {!playing && !activationFinished && (
        <div className="activationAnalogic-text-container">
          <h1>{`${infoIntenciones[page-1].title.toLocaleUpperCase()}`}</h1>
          {step === 1 && (
            <>
              <h2>
                Hola! te damos la bienvenida a la activación de tu talismán.
              </h2>
              <h3>Para activar tu talismán:</h3>
            </>
          )}
          <ol start={step}>
            {step === 1 && <li>Busca un lugar tranquilo.</li>}
            {step === 2 && <li>Haz tres respiraciones profundas.</li>}
            {step === 3 && (
              <>
                <li>
                  Con tu talismán en tus manos, repite 3 veces:
                  <br />
                  <strong>
                  {infoIntenciones[page-1].activation}
                  </strong>
                </li>
                <li>
                  Reproduce la meditación a continuación.
                </li>
              </>
            )}
          </ol>
        </div>
      )}

      {step < 3 && <Button text="Siguiente" onClick={handleStep} />}

      {step === 3 && (
        <div
          className={
            playing
              ? "activationAnalogic-image-container playing"
              : "activationAnalogic-image-container"
          }
        >
          <img src={infoIntenciones[page-1].image} alt="intention" />
          <div className="icon-container" title="Play / Stop">
            {playing ? (
              <StopIcon onClick={stopActivation} />
            ) : (
              <PlayIcon onClick={playActivation} />
            )}
          </div>
          <div className="icon-container restart" title="Restart">
            <RestartIcon onClick={restartActivation} />
          </div>
        </div>
      )}
      {activationFinished && (
        <div className="activationAnalogic-text-container">
          <h3>
            Cada vez que quieras recordar tu intención o reafirmarla puedes
            volver a escuchar esta meditación. 
          </h3>
        </div>
      )}

      <audio
        ref={activationSoundRef}
        src={`${envs.API_DOMAIN}/activation/activationExample.mp4`}
      />
    </section>
  );
};

export default ActivationAnalogic