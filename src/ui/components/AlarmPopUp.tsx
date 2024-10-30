import { useRef, useEffect, useState, useContext } from "react";
import { CloseIcon } from "../../assets/icons/icons";
import background from "../assets/alarma.webp";
import { Button } from "./Button";
import { TimerContext } from "../../context/timerContext";

interface AlarmPopUpOptions {
  alarmUrl: string;

}

export const AlarmPopUp = ({ alarmUrl }: AlarmPopUpOptions) => {
  const alarmSoundRef = useRef<HTMLAudioElement | null>(null);
  const [alarmPath, setAlarmPath] = useState(alarmUrl);
  
  const{handleActivatedAlarm}=useContext(TimerContext)

  useEffect(() => {
    setAlarmPath(alarmUrl);
  }, [alarmUrl]);

  const playAlarmSoundWithCount = (): Promise<void> => {
    return new Promise<void>((resolve) => {
      if (alarmSoundRef.current) {
        alarmSoundRef.current.currentTime = 0;
        alarmSoundRef.current.play();

        // Cuando el audio termina, resolvemos la promesa
        const handleEnded = () => {
          alarmSoundRef.current?.removeEventListener("ended", handleEnded);
          resolve();
        };

        alarmSoundRef.current.addEventListener("ended", handleEnded);
      } else {
        resolve();
      }
    });
  };

  const playAlarmSequentially = async () => {
    const maxPlays = 50;
    for (let i = 0; i < maxPlays; i++) {
      await playAlarmSoundWithCount();
    }
  };

  useEffect(() => {
    if (alarmPath) {
      playAlarmSequentially();
    }
  }, [alarmPath]);

  return (
    <div className="alarm-popUp-container efectoReveal">
      <audio
        ref={alarmSoundRef}
        src={`https://lovelia.org/public/userSounds/${alarmPath}`}
      />
      <div className="close-icon-container">
        <CloseIcon onClick={handleActivatedAlarm} />
      </div>
      <img src={background} alt="alarm background" />
      <span>Respira profundo, es hora de meditar</span>
      <Button text="Cancelar" onClick={handleActivatedAlarm} />
    </div>
  );
};
