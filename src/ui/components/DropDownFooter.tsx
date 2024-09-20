import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

interface ItemsOptions{
    title:string,
    path:string,
  }
  
  export interface DropdownOptions{
    title:string,
    items:ItemsOptions[]
  
  }

 

  

export const DropDownFooter = ({title,items}:DropdownOptions) => {

    const navigate= useNavigate()

    const [dropDownOpen,setDropDownOpen]=useState<boolean>(false);
    const handleDropDown=()=>{
      setDropDownOpen(!dropDownOpen)
    
    }

    const linkTo=(path:string)=>{
        navigate(path)
    }


  return (
    <div className="mobile-footer-card-container">
        <div className='mobile-footer-card-title-container'>
    <p>
        {title}
    </p>
    <p onClick={handleDropDown}>
       +
    </p>
    </div>
    {
        dropDownOpen &&<div className='mobile-footer-card-items-container'>
  
            {items.map((item)=>{
                return(
                    <p onClick={()=>{linkTo(item.path);handleDropDown()}}>{item.title}</p>
                )
            })}
     

    
    </div>}
    </div>
  )
}
