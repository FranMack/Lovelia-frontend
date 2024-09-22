import { ArrowUp } from "../../assets/icons/icons"

interface ButtonArrowUpOptions{
    text:string,
    color:string,
    onClick?:()=>void
}

export function ButtonArrowUp({text,color,onClick}:ButtonArrowUpOptions){

    return(<div onClick={onClick} className="buttonArrowUp-container">
    <p style={{color:`${color}`}}>{text}</p>
    <div className="buttonArrowUp-icon-container"><ArrowUp color={color}/></div>
    
</div>)
}