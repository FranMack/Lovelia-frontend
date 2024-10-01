import { CloseIcon } from "../../assets/icons/icons";
import { Button } from "./Button";

interface PopUpOptions {
  linkTo: () => void;
  closePopUp: () => void;
  text:string,
  buttonText:string
}

export const PopUp = ({ linkTo, closePopUp,text,buttonText }: PopUpOptions) => {
  return (
    <div className="popUpp-container">
      <div className="icon-container">
        <CloseIcon onClick={closePopUp} />
      </div>
      <h4>{text}</h4>
      <div className="popUpp-buttons-container">
        <Button text={buttonText} onClick={linkTo} />
        <Button text="Salir" onClick={closePopUp} />
      </div>
      
      
    </div>
  );
};
