import { ButtonTransparent } from "../../ui/components"


export interface AuthPopUpOptions{
    title:string,
    text:string,
    handlePopUp:()=>void
    buttonText:string
}

export const AuthPopUp = ({title,text,handlePopUp,buttonText}:AuthPopUpOptions) => {

    
  return (
    <div className="authPopUp-container efectoReveal">
  

    <h4>{title}</h4>
    <p>{text}</p>

    <div className="button-auxiliar-container">
      <ButtonTransparent text={buttonText} backgroundColor="" onClick={handlePopUp}/>
    </div>
  </div>
  )
}
