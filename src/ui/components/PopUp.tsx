import { useState } from "react";
import { CloseIcon } from "../../assets/icons/icons";
import { Button } from "./Button";
import { BeatLoader } from "react-spinners";

export interface PopUpOptions {
  linkTo?: () => void;
  closePopUp: () => void;
  text:string,
  buttonText:string
}

export const PopUp = ({ linkTo, closePopUp,text,buttonText }: PopUpOptions) => {

const [loading,setLoading]=useState<boolean>(false)


  return (
    <div className="popUpp-container efectoReveal">
      <div className="icon-container">
        <CloseIcon onClick={closePopUp} />
      </div>
      <h4>{text}</h4>
      {!loading && <div className="popUpp-buttons-container">
        <Button text={buttonText} onClick={()=>{linkTo ? linkTo():null;setLoading(true)}} />
        <Button text="Salir" onClick={closePopUp} />
      </div>}
      {loading &&  <BeatLoader color={"#6f3289"} speedMultiplier={0.4} />}
      
      
    </div>
  );
};
