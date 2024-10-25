import { ArrowDown, ArrowUp, CloseIcon } from '../../assets/icons/icons';


interface TimePickerOptions{
    hours:number | null ;
    minutes:number | null,
    alarmIndex:number,
    nextHour:()=>void,
    previuosHour:()=>void,
    nextMinute:()=>void,
    previousMinute:()=>void,
    handleTimePicker:()=>void,
}


export const TimePicker = ({hours,minutes,alarmIndex,nextHour,previuosHour,nextMinute,previousMinute,handleTimePicker}:TimePickerOptions) => {

   
  return (
    <div className='time-picker-container'>
        <div className='close-icon-container'>
            <CloseIcon onClick={handleTimePicker}/>
        </div>
        <h4>{`Alarma ${alarmIndex+1}`}</h4>

        <div className="time-picker-center-container">
            <div className="clock-container">
              <div
                className="icon-container"
                onClick={nextHour}
              >
                <ArrowUp color="#ffff" />
              </div>
              <p>{hours ===null ? "--":hours < 10 ? `0${hours}` : hours}</p>
              <div
                className="icon-container"
                onClick={previuosHour}
              >
                <ArrowDown color="#ffff" />
              </div>
              <small>HORAS</small>
            </div>
            <p>:</p>

            <div className="clock-container">
              <div
                className="icon-container"
                onClick={nextMinute}
              >
                <ArrowUp color="#ffff" />
              </div>
              <p>{minutes ===null ? "--":minutes < 10 ? `0${minutes}` : minutes}</p>
              <div
                className="icon-container"
                onClick={previousMinute}
              >
                <ArrowDown color="#ffff" />
              </div>
              <small>MINUTOS</small>
            </div>
      
          </div>
    </div>
  )
}
