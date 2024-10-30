import { useState, createContext, ReactNode } from "react";

interface TimerContextValue {
  seconds: number;
  setSeconds: (seconds: number) => void;
  minutes: number;
  setMinutes: (minutes: number) => void;
  hours: number;
  setHours: (hours: number) => void;
  timerSound:string,
  setTimerSound:(sound:string)=>void
  activatedAlarm:boolean;
  setActivatedAlarm:(alarm:boolean)=>void
  
  handleActivatedAlarm:()=>void
}

interface TimerContextProviderProps {
  children: ReactNode;
}

const timerContextDefaultValue: TimerContextValue = {
  seconds: 0,
  minutes: 0,
  hours: 0,
  timerSound:"",
  activatedAlarm:false,
  setSeconds: () => {},
  setMinutes: () => {},
  setHours: () => {},
  setTimerSound: () => {},
  setActivatedAlarm: () => {},
  handleActivatedAlarm: () => {},
};

export const TimerContext = createContext<TimerContextValue>(
  timerContextDefaultValue
);

export const TimerContextProvider = ({
  children,
}: TimerContextProviderProps) => {
  const [seconds, setSeconds] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [timerSound, setTimerSound] = useState<string>("");
  const[activatedAlarm,setActivatedAlarm]=useState(false)

  const handleActivatedAlarm=()=>{
    setActivatedAlarm(!activatedAlarm)
  }


  const value: TimerContextValue = {
    seconds,
    minutes,
    hours,
    timerSound,
    activatedAlarm,
    setSeconds,
    setMinutes,
    setHours,
    setTimerSound,
    setActivatedAlarm,
    handleActivatedAlarm
  };

  return (
    <TimerContext.Provider value={value}>{children}</TimerContext.Provider>
  );
};
