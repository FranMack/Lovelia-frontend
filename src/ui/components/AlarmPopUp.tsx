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

const playAlarm=()=>{

  if(alarmSoundRef.current){
    alarmSoundRef.current.play()
  }
}

  useEffect(() => {
    if (alarmPath) {
      playAlarm();
    }
  }, [alarmPath]);

  return (
    <div className="alarm-popUp-container efectoReveal">
      <audio
      preload="metadata"
        ref={alarmSoundRef}
        src={`https://lovelia.org/public/userSounds/${alarmPath}`}
      />
      <div className="close-icon-container">
        <CloseIcon onClick={handleActivatedAlarm} />
      </div>

      <span>Respira, conecta con tu intención, y deja que guie tu día.</span>
      <Button text="Continuar" onClick={handleActivatedAlarm} />
    </div>
  );
};
