import axios from "axios";
import { useContext, useEffect, useReducer, useState } from "react";
import { BeatLoader } from "react-spinners";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { envs } from "../../config";
import { TalismanAudioContext } from "../../context/talismanAudioContext";
import { TimerContext } from "../../context/timerContext";
import { Button } from "../../ui/components/Button";
import timerCircle from "../assets/timer.png";
import { alarmReducer, AlarmState } from "../helpers/alarmReducer";
import { timeFormater, transformAlarms } from "../helpers/timerDurationTransform";
import { TimePicker } from "./TimePicker";

type SoundsType = {
  name: string;
  url: string;
};
interface TimerOptions {
  sounds: SoundsType[];
}



export const Alarm = ({ sounds=[] }: TimerOptions) => {
    const [loading,setIsLoading]=useState<boolean>(false)

  const [alarmMode, setAlarmMode] = useState<string>("Nunca");

  const selectAlarm = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setAlarmMode(event.target.value);
  };

  const initialForm = {
    alarm1: "",
    alarm2: "",
    alarm3: "",
    alarm4: "",
  };

 

  const { timerSound, setTimerSound } = useContext(TimerContext);

  const { setTrackIndex } = useContext(TalismanAudioContext);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTimerSound(event.target.value);
    setTrackIndex(event.target.selectedIndex);
  };

  useEffect(() => {
    axios
      .get(`${envs.API_DOMAIN}/api/v1/alarm/get-alarm`, {
        withCredentials: true,
      })
      .then((response) => {
        const { data } = response;
 

  const dbAlarms={
    alarm1:data.alarm1,
    alarm2:data.alarm2,
    alarm3:data.alarm3,
    alarm4:data.alarm4,

  }

  const transformedAlarms = transformAlarms(dbAlarms);
  dispatch({ type: "LOAD_ALARM", alarms: transformedAlarms });

  
        setTimerSound(data.sound ? data.sound : sounds[0].name);
        if (data.alarm4) {
          setAlarmMode("4 veces al día");
          return;
        }
        if (data.alarm3) {
          setAlarmMode("3 veces al día");
          return;
        }
        if (data.alarm2) {
          setAlarmMode("2 veces al día");
          return;
        }
        if (data.alarm1) {
          setAlarmMode("1 vez al día");
          return;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (alarmMode === "Nunca") {
       () => dispatch({ type: "CLEAR_ALARM", index:0 });
       () => dispatch({ type: "CLEAR_ALARM", index:1 });
       () => dispatch({ type: "CLEAR_ALARM", index:2 });
       () => dispatch({ type: "CLEAR_ALARM", index:3 });
    } else if (alarmMode === "1 vez al día") {
      () => dispatch({ type: "CLEAR_ALARM", index:1 });
      () => dispatch({ type: "CLEAR_ALARM", index:2 });
      () => dispatch({ type: "CLEAR_ALARM", index:3 });
    } else if (alarmMode === "2 veces al día") {
      () => dispatch({ type: "CLEAR_ALARM", index:2 });
       () => dispatch({ type: "CLEAR_ALARM", index:3 });
    } else if (alarmMode === "3 veces al día") {
      () => dispatch({ type: "CLEAR_ALARM", index:3 });
    }
  }, [alarmMode]);


  const [warning,setWarning]=useState<boolean>(false)

  const handleAlarm = () => {

   
    if(alarmMode === "1 vez al día" && (state.alarms[0].hours === null || state.alarms[0].minutes === null) ){
      setWarning(true)
      toast.error("Existen alarmas sin definir",{style:{backgroundColor:"#6f3289",color:"#ece976"},hideProgressBar:true,autoClose:4000})

      setIsLoading(false)
      toast.error("Existen alarmas sin definir",{style:{backgroundColor:"#6f3289",color:"#ece976"},hideProgressBar:true,autoClose:4000})
      return
    }

    if(alarmMode === "2 veces al día" && (state.alarms[0].hours === null || state.alarms[0].minutes === null ||state.alarms[1].hours === null || state.alarms[1].minutes === null) ){
      setWarning(true)
      toast.error("Existen alarmas sin definir",{style:{backgroundColor:"#6f3289",color:"#ece976"},hideProgressBar:true,autoClose:4000})
      return
    }
    if(alarmMode === "3 veces al día" && (state.alarms[0].hours === null || state.alarms[0].minutes === null ||state.alarms[1].hours === null || state.alarms[1].minutes === null ||state.alarms[2].hours === null || state.alarms[2].minutes === null) ){
      setWarning(true)
      toast.error("Existen alarmas sin definir",{style:{backgroundColor:"#6f3289",color:"#ece976"},hideProgressBar:true,autoClose:4000})
      return
    }

    if(alarmMode === "4 veces al día" && (state.alarms[0].hours === null || state.alarms[0].minutes === null ||state.alarms[1].hours === null || state.alarms[1].minutes === null ||state.alarms[2].hours === null || state.alarms[2].minutes === null || state.alarms[3].hours === null || state.alarms[3].minutes === null) ){
      setWarning(true)
      toast.error("Existen alarmas sin definir",{style:{backgroundColor:"#6f3289",color:"#ece976"},hideProgressBar:true,autoClose:4000})
      return
    }



setWarning(false)

    const newAlarms = {
      alarm1: (state.alarms[0].hours === null || state.alarms[0].minutes === null)
        ? ""
        : `${state.alarms[0].hours !== null ? timeFormater(state.alarms[0].hours) : ""}:${timeFormater(state.alarms[0].minutes)}`,
      alarm2: (state.alarms[1].hours === null || state.alarms[1].minutes === null || alarmMode==="1 vez al día")
        ? ""
        : `${state.alarms[1].hours !== null ? timeFormater(state.alarms[1].hours) : ""}:${timeFormater(state.alarms[1].minutes)}`,
      alarm3: (state.alarms[2].hours === null || state.alarms[2].minutes === null || alarmMode==="1 vez al día" || alarmMode==="2 veces al día" )
        ? ""
        : `${state.alarms[2].hours !== null ? timeFormater(state.alarms[2].hours) : ""}:${timeFormater(state.alarms[2].minutes)}`,
      alarm4: (state.alarms[3].hours === null || state.alarms[3].minutes === null || alarmMode==="1 vez al día" || alarmMode==="2 veces al día" || alarmMode==="3 veces al día")
        ? ""
        : `${state.alarms[3].hours !== null ? timeFormater(state.alarms[3].hours) : ""}:${timeFormater(state.alarms[3].minutes)}`,
    }

    
    
    const alarms = alarmMode !== "Nunca" ? newAlarms : initialForm;
    const activated =alarmMode !== "Nunca" ? true : false;

    setIsLoading(true)

    axios
      .post(
        `${envs.API_DOMAIN}/api/v1/alarm/set-alarm`,
        {
          ...alarms,
          sound: timerSound,
          alarm_active:activated
        },
        { withCredentials: true }
      )
      .then(() => {
        toast.success("Alarma modificada",{style:{backgroundColor:"#6f3289",color:"#ece976"},hideProgressBar:true,autoClose:4000})

        setIsLoading(false)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  


  const [timePicker,setTimePicker]=useState(false)

  const handleTimePicker=()=>{
    setTimePicker((timePicker)=>!timePicker)
  }

  const initialState: AlarmState = {
    alarms: [
      { hours: null, minutes: null },
      { hours: null, minutes: null },
      { hours: null, minutes: null },
      { hours: null, minutes: null },
    ]
  };
    


  const [state, dispatch] = useReducer(alarmReducer, initialState);

  const [alarmIndex,setAlarmIndex]=useState(0)

 

  return (
    <div className="alarm-container revealLogo">
    {timePicker &&  <TimePicker hours={state.alarms[alarmIndex].hours} minutes={state.alarms[alarmIndex].minutes} nextHour={() => dispatch({ type: "NEXT_HOUR", index:alarmIndex })} previuosHour={() => dispatch({ type: "PREVIOUS_HOUR", index:alarmIndex })} nextMinute={() => dispatch({ type: "NEXT_MINUTE", index:alarmIndex })} previousMinute={() => dispatch({ type: "PREVIOUS_MINUTE", index:alarmIndex })} handleTimePicker={handleTimePicker} alarmIndex={alarmIndex}/>}
          <img src={timerCircle} alt="circle" />
      <div className="alarm-dropdown-container">
        <label>Alarma</label>
        <select defaultValue="Nunca" value={alarmMode} onChange={selectAlarm}>
          <option value="Nunca">Nunca</option>
          <option value="1 vez al día">1 vez al día </option>
          <option value="2 veces al día">2 veces al día</option>
          <option value="3 veces al día">3 veces al día</option>
          <option value="4 veces al día">4 veces al día</option>
        </select>
      </div>

      <div className="alarm-dropdown-container">
        <label>Sonido</label>
        <select
          defaultValue={sounds.length ? sounds[0].name:" - "}
          value={timerSound}
          onChange={handleSelectChange}
        >
          {sounds.length && sounds.map((item, i) => {
            return (
              <option value={item.name} key={i} data-index={i}>
                {item.name}{" "}
              </option>
            );
          })}
        </select>
      </div>

      

      {alarmMode !== "Nunca" && (
        <div className="alarm-inputs-container">
          <div onClick={()=>{handleTimePicker();setAlarmIndex(0)}} className="alarmn-internal-input-conainer">
            <p>Horario 1</p>{" "}
           <p >{timeFormater(state.alarms[0].hours) }:{timeFormater(state.alarms[0].minutes)}</p>
          </div>
          {alarmMode !== "1 vez al día" && (
          <div onClick={()=>{handleTimePicker();setAlarmIndex(1)}} className="alarmn-internal-input-conainer">
              <p>Horario 2</p>{" "}
              <p >{timeFormater(state.alarms[1].hours) }:{timeFormater(state.alarms[1].minutes)}</p>
            </div>
          )}

          {alarmMode !== "1 vez al día" && alarmMode !== "2 veces al día" && (
           <div onClick={()=>{handleTimePicker();setAlarmIndex(2)}} className="alarmn-internal-input-conainer">
              <p>Horario 3</p>{" "}
              <p >{timeFormater(state.alarms[2].hours) }:{timeFormater(state.alarms[2].minutes)}</p>
            </div>
          )}

          {alarmMode !== "1 vez al día" &&
            alarmMode !== "2 veces al día" &&
            alarmMode !== "3 veces al día" && (
              <div onClick={()=>{handleTimePicker();setAlarmIndex(3)}} className="alarmn-internal-input-conainer">
                <p>Horario 4</p>{" "}
                <p >{timeFormater(state.alarms[3].hours) }:{timeFormater(state.alarms[3].minutes)}</p>
              </div>
            )}
        </div>
      )}

      {warning && <strong className="warning">EXISTEN ALARMAS SIN DEFINIR</strong>}

    {  loading ?  <BeatLoader color={"white"} speedMultiplier={0.4} /> :<Button text="Guardar alarma" onClick={handleAlarm} />}
    </div>
  );
};
