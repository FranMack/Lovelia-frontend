import  { useContext, useEffect, useRef, useState } from "react";
import { Button } from "../../ui/components/Button";
import { TimerContext } from "../../context/timerContext";
import { timerDurationTransform } from "../helpers/timerDurationTransform";
import { CloseIcon } from "../../assets/icons/icons";
import { TalismanButtonFocusContext } from "../../context";
import { TalismanAudioContext } from "../../context/talismanAudioContext";

interface ChronometerOptions{
  playTrack:(index: number, type: string)=>void
}

export const Chronometer = ({playTrack}:ChronometerOptions) => {
  const { handleButtonFocus } = useContext(TalismanButtonFocusContext);
  
  const { hours, minutes, seconds, setHours, setMinutes, setSeconds } =
    useContext(TimerContext);
    const { setAudioType,audioType,trackIndex,setTrackIndex } = useContext(TalismanAudioContext);

    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [calcSeconds, setCalSeconds] = useState(0);
  const [chronometer, setChronometer] = useState<boolean>(false);
  const [started, setStarted] = useState<boolean>(false);

  useEffect(() => {
    if (
      typeof hours === "number" &&
      typeof minutes === "number" &&
      typeof seconds === "number"
    ) {
      setCalSeconds(hours * 3600 + minutes * 60 + seconds);
      setAudioType("timerSound")
      trackIndex ? null :setTrackIndex(0)
    }
  }, []);

  const startTimer = () => {
    if (intervalRef.current === null) {
      playTrack(trackIndex!,audioType)
      setChronometer(true);
      setStarted(true);
      intervalRef.current = setInterval(() => {
        setCalSeconds((prevSeconds) => {
          if (prevSeconds > 0) {
            return prevSeconds - 1;
          } else {
            playTrack(trackIndex!,audioType)
            setStarted(false);
            setChronometer(false);
            clearInterval(intervalRef.current!);
            intervalRef.current = null; // Restablecer el intervalo
            return hours * 3600 + minutes * 60 + seconds //
          }
        });
      }, 1000);
    }
  };

  const continueTimer = () => {
    if (intervalRef.current === null) {
      setChronometer(true);
      setStarted(true);
      intervalRef.current = setInterval(() => {
        setCalSeconds((prevSeconds) => {
          if (prevSeconds > 0) {
            return prevSeconds - 1;
          } else {
            playTrack(trackIndex!,audioType)
            setStarted(false);
            setChronometer(false);
            clearInterval(intervalRef.current!);
            intervalRef.current = null; // Restablecer el intervalo
            return hours * 3600 + minutes * 60 + seconds //
          }
        });
      }, 1000);
    }
  };

  const stopTimer = () => {
    if (intervalRef.current !== null) {
      setChronometer(false);
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const restart=()=>{

    setStarted(false);
            setChronometer(false);
            clearInterval(intervalRef.current!);
            intervalRef.current = null; // Restablecer el intervalo
            setCalSeconds(hours * 3600 + minutes * 60 + seconds);

            startTimer()

  }

  const exitChronometer=() => {
    handleButtonFocus("");
    setHours(0)
    setMinutes(0)
    setSeconds(0)
    setAudioType("")
  }






  return (
    <div className="chronometer-container">
        <div className="icon-container">
          <CloseIcon
            onClick={exitChronometer}
          />
        </div>
        <div className="chorometer-center-container">
      <p>{timerDurationTransform(calcSeconds)}</p>

      <div className="buttons-container">

      {!started ?<Button text="Iniciar" onClick={startTimer} />: (chronometer && started)?<Button text="Detener" onClick={stopTimer} /> :<Button text="Continuar" onClick={continueTimer} />}

     {started && <Button text="Reiniciar" onClick={restart} />}
     </div>
     </div>
    </div>
  );
};
