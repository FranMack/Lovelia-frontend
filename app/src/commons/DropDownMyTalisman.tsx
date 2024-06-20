import { useState,useContext, useEffect, useRef } from "react";
import { TalismanButtonFocusContext } from "../context/talismanButtonFocusContext";
import { ArrowDown, CloseIcon } from "../assets/images/icons/icons";
import { PlayIcon } from "../assets/images/icons/icons";
import axios from "axios";

export interface DropdownOptions {
  handleDropDown: () => void;
}

interface MeditationsOptions {
  name: string;
  url: string;
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

const meditacionesInfo={
  name:"Meditaciones lovelia",
  sections:[
    {
      trackName:"Cuencos tibetanos",
      path:"",
      duration:"12:15"
    },
    {
      trackName:"El sonido del silencio",
      path:"",
      duration:"12:15"
    }
    ,{
      trackName:"Reiki melody",
      path:"",
      duration:"12:15"
    }
    ,{
      trackName:"Cuencos tibetanos",
      path:"",
      duration:"12:15"
    }
    ,{
      trackName:"Cuencos tibetanos",
      path:"",
      duration:"12:15"
    },
    {
      trackName:"Cuencos tibetanos",
      path:"",
      duration:"12:15"
    },
    {
      trackName:"El sonido del silencio",
      path:"",
      duration:"12:15"
    }
    ,{
      trackName:"Reiki melody",
      path:"",
      duration:"12:15"
    }
    ,{
      trackName:"Cuencos tibetanos",
      path:"",
      duration:"12:15"
    }
    ,{
      trackName:"Cuencos tibetanos",
      path:"",
      duration:"12:15"
    },

    

  ]
}


const sonidosInfo={
  name:"Sonidos lovelia",
  sections:[
    {
      trackName:"Cuencos tibetanos",
      path:"",
      duration:"12:15"
    },
    {
      trackName:"El sonido del silencio",
      path:"",
      duration:"12:15"
    }
    ,{
      trackName:"Reiki melody",
      path:"",
      duration:"12:15"
    }
    ,{
      trackName:"Cuencos tibetanos",
      path:"",
      duration:"12:15"
    }
    ,{
      trackName:"Cuencos tibetanos",
      path:"",
      duration:"12:15"
    },
    {
      trackName:"Cuencos tibetanos",
      path:"",
      duration:"12:15"
    },
    {
      trackName:"El sonido del silencio",
      path:"",
      duration:"12:15"
    }
    ,{
      trackName:"Reiki melody",
      path:"",
      duration:"12:15"
    }
    ,{
      trackName:"Cuencos tibetanos",
      path:"",
      duration:"12:15"
    }
    ,{
      trackName:"Cuencos tibetanos",
      path:"",
      duration:"12:15"
    },

    

  ]
}




export function DropDownMyTalisman({ handleDropDown }: DropdownOptions) {

  const {buttonFocusPosition,handleButtonFocus}=useContext(TalismanButtonFocusContext)

  const [tableFocus,setTableFocus]=useState(0)


  const audioRefs = useRef<HTMLAudioElement[]>([]);
  const [meditations,setMeditations]=useState<MeditationsOptions[]>([])
  const [sounds,setSounds]=useState<MeditationsOptions[]>([])


  const playAudio = (index: number) => {
    audioRefs.current.forEach(audio => audio.pause());
    if (audioRefs.current[index]) {
      audioRefs.current[index].play();
    }
  };
  


  useEffect(()=>{
    axios.get(
        `http://localhost:3000/api/v1/user/meditations`,
        { withCredentials: true }
      )
      .then((response)=>{
        setMeditations(response.data)

      })

      axios.get(
        `http://localhost:3000/api/v1/user/sounds`,
        { withCredentials: true }
      )
      .then((response)=>{
        setSounds(response.data)

      })


      
  },[])



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
          {buttonFocusPosition==="Meditaciones lovelia" && <div className="dropDownMyTalisman-section-container">
            <div className="dropDownMyTalisman-title-wrapper">
            <h3>{meditacionesInfo.name}</h3>
            <table className="dropDownMyTalisman-sounds-table">
            <thead>
              <tr>
                <th>#</th>
                <th className="th-trackname-column"><strong>Pista</strong></th>
                <th>Duración</th>
              </tr>
              </thead>
            {sounds.map((item,i)=>{return(
              <tbody>
               <tr key={i} onDoubleClick={()=>{playAudio(i)}}  onMouseEnter={()=>{setTableFocus(i+1)}} onMouseLeave={()=>{setTableFocus(0)}}>
                <td>{tableFocus===i+1 ? <div className="play-icon-container"><PlayIcon/></div>:i+1}</td>
                <td className="td-trackname-column">
                  <strong>{item.name}</strong>
                  <p>{item.name}</p></td>
                <td>{"10:10"}</td>
                <audio ref={el => (audioRefs.current[i] = el!)}>
              <source src={`http://localhost:3000${item.url}`} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
            
             </tr>
             </tbody>
            )})}
            </table>
          </div>

            </div>}
            {buttonFocusPosition==="Biblioteca de sonidos" && <div className="dropDownMyTalisman-section-container">
            <div className="dropDownMyTalisman-title-wrapper">
            <h3>{sonidosInfo.name}</h3>
            <table className="dropDownMyTalisman-sounds-table">
            <thead>
              <tr>
                <th>#</th>
                <th className="th-trackname-column"><strong>Pista</strong></th>
                <th>Duración</th>
              </tr>
              </thead>
            {meditations.map((item,i)=>{return(
              <tbody>
               <tr onDoubleClick={()=>{playAudio(i)}} key={i} onMouseEnter={()=>{setTableFocus(i+1)}} onMouseLeave={()=>{setTableFocus(0)}}>
                <td>{tableFocus===i+1 ? <div className="play-icon-container"><PlayIcon/></div>:i+1}</td>
                <td className="td-trackname-column">
                  <strong>{item.name}</strong>
                  <p>{item.name}</p></td>
                <td>10:12</td>
                <audio ref={el => (audioRefs.current[i] = el!)}>
              <source src={`http://localhost:3000${item.url}`} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
            
             </tr>
             </tbody>
            )})}
            </table>
          </div>

            </div>}
    </div>
  );
}
