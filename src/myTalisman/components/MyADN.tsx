import React, { useContext, useState } from 'react'
import { CloseIcon } from '../../assets/icons/icons';
import { starsInfo } from '../assets/fakeData';
import { TalismanButtonFocusContext } from '../../context';


const sections = [
    "Números",
    "Astros",
    "Naturaleza",
    "Mayas"
  ];

  


export const MyADN = () => {
    const{handleButtonFocus}=useContext(TalismanButtonFocusContext)

    const [sectionPosition,setSectionPosition]=useState<string>("Números")
    const handleSectionPosition=(item:string)=>{setSectionPosition(item)}

  return (
    <div className="dropDownMyTalisman-container">
    <div className="dropDownMyTalisman-button-container">
      <div className="icon-container">
        <CloseIcon
          onClick={() => {
            handleButtonFocus("");
          }}
        />
      </div>
    </div>

    <div className="dropDownMyTalisman-title-wrapper">
          <h3>{sectionPosition ==="Naturaleza"? `Energía de la ${sectionPosition}`:`Energía de los ${sectionPosition}`}</h3>
        </div>

    <div className="dropDownMyTalisman-top-container">
        
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

    {sectionPosition === "Números" && (
      <div className="dropDownMyTalisman-section-container">
       

        {starsInfo.section.map((item, i) => {
          return (
            <div className="dropDownMyTalisman-card-container" key={i}>
              <h5>{item.title}</h5>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    )}

{sectionPosition === "Astros" && (
      <div className="dropDownMyTalisman-section-container">
       

        {starsInfo.section.map((item, i) => {
          return (
            <div className="dropDownMyTalisman-card-container" key={i}>
              <h5>{item.title}</h5>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    )}
     {sectionPosition === "Naturaleza" && (
      <div className="dropDownMyTalisman-section-container">
      

        {starsInfo.section.map((item, i) => {
          return (
            <div className="dropDownMyTalisman-card-container" key={i}>
              <h5>{item.title}</h5>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    )}

{sectionPosition === "Mayas" && (
      <div className="dropDownMyTalisman-section-container">
        

        {starsInfo.section.map((item, i) => {
          return (
            <div className="dropDownMyTalisman-card-container" key={i}>
              <h5>{item.title}</h5>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    )}


    
  
  </div>
  )
}
