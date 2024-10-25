import { Alarm } from "./alarmReducer";

export function timerDurationTransform(time:number) {
    // Calcula las horas
    const hours = Math.floor(time / 3600);
    
    // Calcula los minutos, restando las horas en segundos del tiempo total y luego dividiendo entre 60
    const minutes = Math.floor((time % 3600) / 60);
    
    // Calcula los segundos restantes después de descontar horas y minutos
    const seconds = time % 60;
  
    // Formatea los minutos y segundos para que siempre tengan dos dígitos
    const formatMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const formatSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
  
    return `${hours}:${formatMinutes}:${formatSeconds}`;
  }


  export const timeFormater=(time:number |null)=>{

    if(time !==null){
      return time < 10 ? `0${time}` : time
    }

    return `--`
  
  }


  interface AlarmDataOptions{
    alarm1:string,
    alarm2:string,
    alarm3:string,
    alarm4:string,
  }

  export const transformAlarms = (alarmData:AlarmDataOptions): Alarm[] => {
    return Object.values(alarmData).map((alarmString: string) => {
      if (typeof alarmString === 'string' && alarmString) { // Asegurarse de que el valor sea un string
        const [hours, minutes] = alarmString.split(":").map(Number);
        return {
          hours: hours ?? null,
          minutes: minutes ?? null
        };
      } else {
        return {
          hours: null,
          minutes: null
        };
      }
    });
  };
  