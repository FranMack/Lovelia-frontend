import { InputHTMLAttributes, useContext, useState } from "react";
import { CloseIcon } from "../../assets/icons/icons";
import { TalismanButtonFocusContext } from "../../context";
import { ArrowUp, ArrowDown } from "../../assets/icons/icons";
import { Button } from "../../ui/components/Button";
import timerCircle from "../assets/timer.png";
import { TimerContext } from "../../context/timerContext";
import { TalismanAudioContext } from "../../context/talismanAudioContext";


type SoundsType={
  name:string,
  url:string
}
interface TimerOptions{
  sounds:SoundsType[]
}






const sections = ["timer", "alarm"];

export const Timer = ({sounds}:TimerOptions) => {
  const { handleButtonFocus } = useContext(TalismanButtonFocusContext);

  const [sectionPosition, setSectionPosition] = useState<string>("timer");
  const handleSectionPosition = (item: string) => {
    setSectionPosition(item);
  };


  const {seconds,minutes,hours,setSeconds,setMinutes,setHours,timerSound,setTimerSound}=useContext(TimerContext)

  const {setTrackIndex}=useContext(TalismanAudioContext)
  

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  
    setTimerSound(event.target.value);
   setTrackIndex(event.target.selectedIndex)
   
  };
  
  const [warning,setWarning]=useState<boolean>(false)
  const startMeditation=()=>{

    if(!hours && !minutes && !seconds){
      setWarning(true)
      return
    }

    handleButtonFocus("chronometer")
    return
  }

  const[alarmActivated,setAlarmActivated]=useState<boolean>(false)

  const handleAlarm=(event: React.ChangeEvent<HTMLInputElement>)=>{
    setAlarmActivated(event.target.checked)
  }


  return (
    <div className="timer-container">
      <div className="timer-button-container">
        <div className="icon-container">
          <CloseIcon
            onClick={() => {
              handleButtonFocus("");
              setHours(0)
              setMinutes(0)
              setSeconds(0)
            }}
          />
        </div>
      </div>

      <div className="timer-top-container">
        
      <ul>
        {sections.map((item, i) => {
          return (
            <li
              onClick={() => handleSectionPosition(item)}
              className={
                sectionPosition === item ? "button-focus-style" : ""
              }
              key={i}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>

    {sectionPosition==="timer" &&  <div className="timer-section-container">
        <img src={timerCircle} alt="circle" />

        <div className="timer-top-container">
          <div className="clock-container">
            <div className="icon-container" onClick={()=>{hours<24 ? setHours(hours+1):setHours(0)}}>
              <ArrowUp color="#ffff" />
            </div>
            <p>{hours<10 ?`0${hours}`:hours}</p>
            <div className="icon-container" onClick={()=>{hours>0 ? setHours(hours-1):setHours(24)}}>
              <ArrowDown color="#ffff" />
            </div>
            <small>HORAS</small>
          </div>
          <p>:</p>

          <div className="clock-container">
          <div className="icon-container" onClick={()=>{minutes<59 ? setMinutes(minutes+1):setMinutes(0)}}>
              <ArrowUp color="#ffff" />
            </div>
            <p>{minutes<10 ?`0${minutes}`:minutes}</p>
            <div className="icon-container" onClick={()=>{minutes>0 ? setMinutes(minutes-1):setMinutes(59)}}>
              <ArrowDown color="#ffff" />
            </div>
            <small>MINUTOS</small>
          </div>
          <p>:</p>
          <div className="clock-container">
          <div className="icon-container" onClick={()=>{seconds<59 ? setSeconds(seconds+1):setSeconds(0)}}>
              <ArrowUp color="#ffff" />
            </div>
            <p>{seconds<10 ?`0${seconds}`:seconds}</p>
            <div className="icon-container" onClick={()=>{seconds>0 ? setSeconds(seconds-1):setSeconds(59)}}>
              <ArrowDown color="#ffff" />
            </div>
            <small>SEGUNDOS</small>
          </div>
        </div>
        {warning && <strong className="warning">POR FAVOR DEFINA EL INTERVALO</strong>}

        <div className="timer-dropdown-container">
          <label>Sonido para inicio y fin de meditación</label>
          <select defaultValue={sounds[0].name} value={timerSound} onChange={handleSelectChange}>
           {sounds.map((item,i)=>{
            return(<option  value={item.name} key={i} data-index={i}>{item.name} </option>)
           })}
          </select>
        </div>

       

        <Button text="Iniciar meditación" onClick={startMeditation} />
       
      </div>}

      {sectionPosition==="alarm" &&  <div className="timer-section-container">
        <img src={timerCircle} alt="circle" />

       
        <div className="timer-top-container">
         
          <div className="clock-container">
            <div className="icon-container" onClick={()=>{hours<24 ? setHours(hours+1):setHours(0)}}>
              <ArrowUp color="#ffff" />
            </div>
            <p>{hours<10 ?`0${hours}`:hours}</p>
            <div className="icon-container" onClick={()=>{hours>0 ? setHours(hours-1):setHours(24)}}>
              <ArrowDown color="#ffff" />
            </div>
            <small>HORAS</small>
          </div>
          <p>:</p>

          <div className="clock-container">
          <div className="icon-container" onClick={()=>{minutes<59 ? setMinutes(minutes+1):setMinutes(0)}}>
              <ArrowUp color="#ffff" />
            </div>
            <p>{minutes<10 ?`0${minutes}`:minutes}</p>
            <div className="icon-container" onClick={()=>{minutes>0 ? setMinutes(minutes-1):setMinutes(59)}}>
              <ArrowDown color="#ffff" />
            </div>
            <small>MINUTOS</small>
          </div>
       
        </div>

        <div className="timer-dropdown-container">
          <label>Sonidos alarma</label>
          <select>
            <option>Cuencos de cuarzo</option>
            <option>Cuencos tibetanos</option>
            <option>El sonido del silencio</option>
          </select>
        </div>

        <div className="alarm-state-container">
            <p>Alarma activada</p>
            <input type="checkbox" checked={alarmActivated} onChange={handleAlarm} />
          </div>

       

       
      </div>}


     
    </div>
  );
};
