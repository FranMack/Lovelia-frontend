import { useContext,useState } from "react";
import { CloseIcon, PlayIcon,StopIcon } from "../assets/images/icons/icons";
import { TalismanButtonFocusContext } from "../context/talismanButtonFocusContext";

type SoundsType={
  name:string,
  url:string
}

export interface DropdownOptions {
  handleDropDown: () => void;
  sounds:SoundsType[]
  meditations:SoundsType[]
  playTrack:(i:number,type:string)=>void
  pauseTrack:(type:string)=>void
  restartTrack:(i:number,type:string)=>void
  trackIndex?:number | null
  playing:boolean,
  audioType:string
}



const sections = [
  "Meditaciones lovelia",
  "Mi ADN Energético",
  "Biblioteca de sonidos",
];

const adnInfo = {
  name: "Energía de los astros",
  section: [
    {
      title: "Sol",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },
    {
      title: "Luna",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Jupiter",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Neptuno",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Saturno",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Pluton",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ],
};





export function DropDownMyTalisman({ handleDropDown,sounds,meditations,audioType,trackIndex,playTrack,pauseTrack,restartTrack,playing }: DropdownOptions) {
  const { buttonFocusPosition, handleButtonFocus } = useContext(
    TalismanButtonFocusContext
  );

  const [tableFocus, setTableFocus] = useState(0);





  return (
    <div className="dropDownMyTalisman-container">
      <div className="dropDownMyTalisman-button-container">
        <div onClick={handleDropDown} className="icon-container">
          <CloseIcon
            onClick={() => {
              handleDropDown();
            }}
          />
        </div>
      </div>

      <div className="dropDownMyTalisman-top-container">
        <ul>
          {sections.map((item, i) => {
            return (
              <li
                onClick={() => handleButtonFocus(item)}
                className={
                  buttonFocusPosition === item ? "button-focus-style" : ""
                }
                key={i}
              >
                {item}
              </li>
            );
          })}
        </ul>
      </div>

      {buttonFocusPosition === "Mi ADN Energético" && (
        <div className="dropDownMyTalisman-section-container">
          <div className="dropDownMyTalisman-title-wrapper">
            <h3>{adnInfo.name}</h3>
          </div>

          {adnInfo.section.map((item, i) => {
            return (
              <div className="dropDownMyTalisman-card-container" key={i}>
                <h5>{item.title}</h5>
                <p>{item.description}</p>
              </div>
            );
          })}
        </div>
      )}
      {buttonFocusPosition === "Meditaciones lovelia" && (
        <div className="dropDownMyTalisman-section-container">
          <div className="dropDownMyTalisman-title-wrapper">
            <h3>Meditaciones Lovelia</h3>
            <table className="dropDownMyTalisman-sounds-table">
              <thead>
                <tr>
                  <th>###</th>
                  <th className="th-trackname-column">
                    <strong>Pista</strong>
                  </th>
                  <th>Duración</th>
                </tr>
              </thead>
              {sounds.map((item, i) => {
                return (
                  <tbody>
                    <tr className={trackIndex===i && audioType==="sound" ? "selected-track":""}
                      key={i}
                      onDoubleClick={() => {
                        restartTrack(i,"sound")
             
                      }}
                      onMouseEnter={() => {
                        setTableFocus(i + 1);
                      }}
                      onMouseLeave={() => {
                        setTableFocus(0);
                      }}
                    >
                      <td>
                        {tableFocus === i + 1 ? (
                          <div className="play-icon-container" >
                          {  (trackIndex===i && audioType==="sound" && playing) ? <StopIcon onClick={()=>{pauseTrack("sound")}} />: <PlayIcon onClick={()=>{playTrack(i,"sound")}} />}
                          </div>
                        ) : (
                          (trackIndex===i && audioType==="sound" && playing) ? <div className="play-icon-container"><StopIcon onClick={()=>{pauseTrack("sound")}} /></div>:i + 1
                        )}
                      </td>
                      <td className="td-trackname-column">
                        <strong>{item.name}</strong>
                        <p>{item.name}</p>
                      </td>
                      <td>{"10:10"}</td>
                    
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </div>
        </div>
      )}
      {buttonFocusPosition === "Biblioteca de sonidos" && (
        <div className="dropDownMyTalisman-section-container">
          <div className="dropDownMyTalisman-title-wrapper">
            <h3>Sonidos lovelia</h3>
            <table className="dropDownMyTalisman-sounds-table">
              <thead>
                <tr>
                <th>###</th>
                  <th className="th-trackname-column">
                    <strong>Pista</strong>
                  </th>
                  <th>Duración</th>
                </tr>
              </thead>
              {meditations.map((item, i) => {
                return (
                  <tbody>
                    <tr className={trackIndex===i && audioType==="meditation" ? "selected-track":""}
                      key={i}
                      onDoubleClick={() => {
                        restartTrack(i,"meditation");
                
                      }}
                      onMouseEnter={() => {
                        setTableFocus(i + 1);
                      }}
                      onMouseLeave={() => {
                        setTableFocus(0);
                      }}
                    >
                      <td>
                        {tableFocus === i + 1 ? (
                          <div className="play-icon-container" >
                          { (trackIndex===i && audioType==="meditation") ? <StopIcon onClick={()=>{pauseTrack("meditation")}} />: <PlayIcon onClick={()=>{playTrack(i,"meditation")}} />}
                          </div>
                        ) : (
                          (trackIndex===i && audioType==="meditation") ? <div className="play-icon-container"><StopIcon onClick={()=>{pauseTrack("meditation")}} /></div>:i + 1
                        )}
                      </td>
                      <td className="td-trackname-column">
                        <strong>{item.name}</strong>
                        <p>{item.name}</p>
                      </td>
                      <td>{"10:10"}</td>
                    
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
