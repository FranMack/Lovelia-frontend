import { useEffect, useRef, useState } from "react";
import abundanciaImg from "../../intentions/assets/imagen-intensiones3.png";
import { PlayIcon, StopIcon, RestartIcon } from "../../assets/icons/icons";
import { Button } from "../../ui/components/Button";

const intention = "Abundancia";

export const ActivationAnalogic = () => {
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
          <h1>{`Intención: ${intention.toLocaleUpperCase()}`}</h1>
          {step === 1 && (
            <>
              <h2>
                Hola! te damos la bienvenida a la activación de tu talismán.
              </h2>
              <h3>Para activar tu talismán:</h3>
            </>
          )}
          <ol start={step}>
            {step === 1 && <li>Buscar un lugar tranquilo.</li>}
            {step === 2 && <li>Haz tres respiraciones profundas.</li>}
            {step === 3 && (
              <>
                <li>
                  Con tu talismán en tus manos, repite 3 veces:
                  <br />
                  <strong>
                    Yo "Nombre" decreto traer la abundancia en mi vida.{" "}
                  </strong>
                </li>
                <li>
                  Reproduce la meditación a continuación,elegida para atraer
                  abundancia.
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
          <img src={abundanciaImg} alt="intention" />
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
        src="http://localhost:3000/activation/activationExample.mp4"
      />
    </section>
  );
};
