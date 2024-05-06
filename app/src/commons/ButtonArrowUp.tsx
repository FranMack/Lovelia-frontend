import { ArrowUp } from "../assets/images/icons/icons"

interface ButtonArrowUpOptions{
    text:string,
    color:string
}

export function ButtonArrowUp({text,color}:ButtonArrowUpOptions){

    return(<div className="buttonArrowUp-container">
    <p style={{color:`${color}`}}>{text}</p>
    <div className="buttonArrowUp-icon-container"><ArrowUp color={color}/></div>
    
</div>)
}