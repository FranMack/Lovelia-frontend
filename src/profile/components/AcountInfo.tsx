import { ButtonArrowRight2 } from "../../ui/components";
import { useNavigate } from "react-router-dom";
import talismanDigital from "../assets/talisman-wallpaper.png";
import { PopUp } from "../../ui/components/PopUp";
import { useContext, useMemo, useState } from "react";
import axios from "axios";
import { envs } from "../../config";
import { UserContext } from "../../context";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

  const{setSuscription}=useContext(UserContext)

  const cancelSubscription=()=>{
   
   
    axios.put(`${envs.API_DOMAIN}/api/v1/payment-mercadopago/cancel-subscription`,{email},{ withCredentials: true })
    .then(()=>{
      localStorage.removeItem("subscriptionActive")
    setSuscription(false)
    toast.warning("Subscripción cancelada",{style:{backgroundColor:"#6f3289",color:"#ece976"},hideProgressBar:true,autoClose:4000})
    tolgglePopUp()
    })
    .catch((error)=>{console.log(error)})
  }

  const backgroundClass = useMemo(() => {
    if (!openPopUp) {
      return ;
    }

    return "viewport-background"
  }, [openPopUp]);



  return (
    <>
  {  openPopUp && <PopUp linkTo={cancelSubscription} closePopUp={tolgglePopUp} buttonText="Confirmar" text="¿Esta seguro que desea cancelar la subscripción?"/>}
    <div className={`acountInfo-container ${backgroundClass}`}>
    <div className={"acountInfo-internal-container"}>
      <div className="acountInfo-internal-left-container">
      <h4>DATOS DE USUARIO</h4>
        <div className="acountInfo-item-info-container">
        
          <label>Nombre</label>
          <input type="text" value={name} onChange={()=>{}} />
        </div>
        <div className="acountInfo-item-info-container">
          <label>Apellido</label>
          <input type="text" value={lastname} onChange={()=>{}} />
        </div>
        <div className="acountInfo-item-info-container">
          <label>Correo electrónico</label>
          <input type="email" value={email} onChange={()=>{}} />
        </div>
        <div className="acountInfo-item-info-container">
          <label>Suscripción</label>
          <input type="text" value={subscription ? "Activa" : "Inactiva"} onChange={()=>{}} />
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
    </>
  );
};
