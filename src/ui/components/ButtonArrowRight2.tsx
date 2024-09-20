import { RightArrowIcon } from "../../assets/icons/icons"

export interface OptionsArrowRight2{
    text:string,
    color:string,
    onClick?:()=>void,
}

export const ButtonArrowRight2 = ({text,color,onClick}:OptionsArrowRight2) => {
  return (
    <button onClick={onClick} className="arrowRight-button2" style={{color:color,borderColor:color}}>
    <div className="icon-wrapper"><RightArrowIcon color={color}/></div>
        {text}</button>
  )
}
