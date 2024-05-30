import { CloseIcon } from "../assets/images/icons/icons"

import { Button } from "./Button"

export interface PopUpOptions{
    title:string,
    text:string,
    buttonText:string,
    handlePopUp:()=>void
}
export function PopUp({title,text,buttonText,handlePopUp}:PopUpOptions){

    return (
        <div className="popUp-container efectoReveal">
            <div className="closeIcon-container"><CloseIcon onClick={handlePopUp}/></div>

            <h4>{title}</h4>
            <p>{text}</p>

            <div className="button-auxiliar-container"><Button onClick={handlePopUp} text={buttonText}/></div>

        </div>
    )
}