import { useState } from "react";


export interface DropdownMenuOptions{
title:string,
options:string[]

}


export function DropdownMenu({title,options}:DropdownMenuOptions) {
    const [selectedOption, setSelectedOption] = useState('');
  
    const handleSelectChange = (event) => {
      setSelectedOption(event.target.value);
    };
  
    return (
      <div className="dropdown-container">
      
        <select value={selectedOption} onChange={handleSelectChange}>
          <option value="">{title}</option>
          {options}

          {options.map((option,i)=>{
            return(<option value={option} key={i}>{option}</option>)
          })}
        
        </select>
        
      </div>
    );
  }