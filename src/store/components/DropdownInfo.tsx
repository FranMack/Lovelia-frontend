import {ArrowDown } from "../../assets/icons/icons"

type sectionOptions={
title:string,
description:string,

}

export interface DropdownInfoOptions{

    name:string,
    section:sectionOptions[],
    handleDropDown?:()=>void
}

export function DropDownInfo({name,section,handleDropDown}:DropdownInfoOptions){

    return(
        <div className="dropDownInfo-container">
            <div className="dropDownInfo-button-container">
        <p>{name}</p>
        <div onClick={handleDropDown} className="icon-container">
        <ArrowDown color="red" />
        </div>
            
        </div>

        {section.map((item,i)=>{

            return(<div className="dropDownInfo-card-container" key={i}>
                <h5>{item.title}</h5>
                <p>{item.description}</p>
            </div>)
        })}


        </div>
    )
}