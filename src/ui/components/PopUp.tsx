import { CloseIcon } from "../../assets/icons/icons";
import { Button } from "./Button";

interface PopUpOptions {
  linkTo: () => void;
  closePopUp: () => void;
}

export const PopUp = ({ linkTo, closePopUp }: PopUpOptions) => {
  return (
    <div className="popUpp-container">
      <div className="icon-container">
        <CloseIcon onClick={closePopUp} />
      </div>
      <h4>Para adquirir tu talismán digital debes estar logueado.</h4>
      <Button text="Continuar" onClick={linkTo} />
    </div>
  );
};
