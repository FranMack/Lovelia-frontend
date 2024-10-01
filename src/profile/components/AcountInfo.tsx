import { ButtonArrowRight2 } from "../../ui/components";
import { useNavigate } from "react-router-dom";
import talismanDigital from "../assets/talisman-wallpaper.png";
import { PopUp } from "../../ui/components/PopUp";
import { useState } from "react";

interface AcountInfoOptions {
  name?: string;
  lastname?: string;
  email?: string;
  subscription?: boolean;
}

export const AcountInfo = ({
  name,
  email,
  lastname,
  subscription,
}: AcountInfoOptions) => {
  const navigate = useNavigate();

  const linkToMyTalisman = () => {
    navigate("/myTalisman");
  };
  const linkToBuyTalisman = () => {
    navigate("/tienda");
  };

  const linkToSubscription=()=>{
    navigate("/checkout/digital");
  }

  const [openPopUp,setOpenPopUp]=useState<boolean>(false)

  const tolgglePopUp=()=>{
    setOpenPopUp(!openPopUp)
  }

  return (
    <div className={openPopUp ? "acountInfo-container":"acountInfo-container"} >
  {  openPopUp && <PopUp linkTo={()=>{}} closePopUp={tolgglePopUp} buttonText="Confirmar" text="¿Esta seguro que desea cancelar la subscripción?"/>}
    <div className="acountInfo-internal-container" style={{ opacity: openPopUp ? "0.4" : "1" }}>
      <div className="acountInfo-internal-left-container">
        <div className="acountInfo-item-info-container">
          <h5>Nombre</h5>
          <input type="text" value={name} />
        </div>
        <div className="acountInfo-item-info-container">
          <h5>Apellido</h5>
          <input type="text" value={lastname} />
        </div>
        <div className="acountInfo-item-info-container">
          <h5>Correo electrónico</h5>
          <input type="email" value={email} />
        </div>
        <div className="acountInfo-item-info-container">
          <h5>Suscripción</h5>
          <input type="text" value={subscription ? "Activa" : "Inactiva"} />
        </div>

        {subscription && <button onClick={tolgglePopUp}>Cancelar subscripción</button>}
        {!subscription && <button onClick={linkToSubscription}>Activar subscripción</button>}
      </div>
      <div className="acountInfo-internal-right-container">
        <h4>MI TALISMÁN DIGITAL</h4>
        <div className="acountInfo-image-container">
          {subscription ? (
            <img
              className="acountInfo-talismanDigital-image"
              src={talismanDigital}
              alt="talisman Digital"
            />
          ) : (
            <p>Aún no tienes un talismán digital</p>
          )}
        </div>
        <div className="auxiliar-button-container">
          {subscription ? (
            <ButtonArrowRight2
              color="#ffff"
              text="IR A MI TALISMÁN"
              onClick={linkToMyTalisman}
            />
          ) : (
            <ButtonArrowRight2
              color="#ffff"
              text="IR A TIENDA"
              onClick={linkToBuyTalisman}
            />
          )}
        </div>
      </div>
    </div>
    </div>
  );
};
