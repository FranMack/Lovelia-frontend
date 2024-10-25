export interface Alarm {
    hours: number | null ;
    minutes: number | null;
  }
  
  export interface AlarmState {
    alarms: Alarm[];
  }

  // Acciones para modificar las alarmas
type Action =
| { type: "NEXT_HOUR"; index: number }
| { type: "PREVIOUS_HOUR"; index: number }
| { type: "NEXT_MINUTE"; index: number }
| { type: "PREVIOUS_MINUTE"; index: number }
|{ type: "CLEAR_ALARM"; index: number }
|{ type: "LOAD_ALARM"; alarms:Alarm[] };

export const alarmReducer = (state: AlarmState, action: Action): AlarmState => {
    switch (action.type) {
      case "NEXT_HOUR":
        return {
          alarms: state.alarms.map((alarm, idx) =>
            idx === action.index
              ? {
                  ...alarm,
                  hours: alarm.hours !== null ? (alarm.hours < 23 ? alarm.hours + 1 : 0) : 0
                }
              : alarm
          )
        };
      case "PREVIOUS_HOUR":
        return {
          alarms: state.alarms.map((alarm, idx) =>
            idx === action.index
              ? {
                  ...alarm,
                  hours: alarm.hours !== null ? (alarm.hours > 0 ? alarm.hours - 1 : 23) : 23
                }
              : alarm
          )
        };
      case "NEXT_MINUTE":
        return {
          alarms: state.alarms.map((alarm, idx) =>
            idx === action.index
              ? {
                  ...alarm,
                  minutes: alarm.minutes !== null ? (alarm.minutes < 59 ? alarm.minutes + 1 : 0) : 0
                }
              : alarm
          )
        };
      case "PREVIOUS_MINUTE":
        return {
          alarms: state.alarms.map((alarm, idx) =>
            idx === action.index
              ? {
                  ...alarm,
                  minutes: alarm.minutes !== null ? (alarm.minutes > 0 ? alarm.minutes - 1 : 59) : 59
                }
              : alarm
          )
        };
      case "CLEAR_ALARM":
        return {
          alarms: state.alarms.map((alarm, idx) =>
            idx === action.index
              ? {
                  ...alarm,
                  hours: null,
                  minutes: null
                }
              : alarm
          )
        };


        case "LOAD_ALARM":
      return {
        ...state,
        alarms: action.alarms // Actualiza el estado con las alarmas cargadas
      };

      default:
        return state;
    }
  };
  