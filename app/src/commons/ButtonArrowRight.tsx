import { OptionsButton } from "./Button"
import { RightArrowIcon } from "../assets/images/icons/icons"

interface ButtonArrowRightOptions{
    text:string,
    color:string,
    onClick?:()=>void
}
export function ButtonArrowRight({text,color,onClick}:ButtonArrowRightOptions){

    return(
        <div className="arrowRight-button" onClick={onClick}>
       

      
                <p style={{color:color}}>{text}</p>
                <RightArrowIcon color={color}/>
     
      </div>
    )
}