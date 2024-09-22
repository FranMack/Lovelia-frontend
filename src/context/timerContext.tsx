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
}

interface TimerContextProviderProps {
  children: ReactNode;
}

const timerContextDefaultValue: TimerContextValue = {
  seconds: 0,
  minutes: 0,
  hours: 0,
  timerSound:"",
  setSeconds: () => {},
  setMinutes: () => {},
  setHours: () => {},
  setTimerSound: () => {},
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


  const value: TimerContextValue = {
    seconds,
    minutes,
    hours,
    timerSound,
    setSeconds,
    setMinutes,
    setHours,
    setTimerSound
  };

  return (
    <TimerContext.Provider value={value}>{children}</TimerContext.Provider>
  );
};
