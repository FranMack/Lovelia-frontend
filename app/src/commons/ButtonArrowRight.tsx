import { OptionsButton } from "./Button"
import { RightArrowIcon } from "../assets/images/icons/icons"

interface ButtonArrowRightOptions{
    text:string,
    color:string
}
export function ButtonArrowRight({text,color}:ButtonArrowRightOptions){

    return(
        <div className="arrowRight-button">
       

        <div className="section3-bottom-container">
                <p style={{color:color}}>{text}</p>
                <RightArrowIcon color={color}/>
             </div>
      </div>
    )
}