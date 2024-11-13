import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ButtonArrowRight2 } from "../../ui/components";
import talismanDigital from "../assets/talisman-wallpaper.png";

interface AcountInfoOptions {
  name?: string;
  lastname?: string;
  email?: string;
  subscription?: boolean;
  talismanActivated?:boolean
}





export const AcountInfo = ({
  name,
  email,
  lastname,
  subscription,
  talismanActivated
}: AcountInfoOptions) => {
  const navigate = useNavigate();


  const linkTo=(path:string)=>{
    navigate(`/${path}`)
  }
 










  return (
    <>
  
    <div className={`acountInfo-container`}>
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
          <label>Talismám digital</label>
          <input type="text" value={talismanActivated ? "Activo" : "Inactivo"} onChange={()=>{}} />
        </div>

       
      </div>
      <div className="acountInfo-internal-right-container">
        <h4>MI TALISMÁN DIGITAL</h4>
        <div className="acountInfo-image-container">
          {(subscription && talismanActivated) ? (
            <img
              className="acountInfo-talismanDigital-image"
              src={talismanDigital}
              alt="talisman Digital"
            />
          ) :
          
          (subscription && !talismanActivated) ?<p>Aún no has activado tu talismán</p>:
           (
            <p>Aún no tienes un talismán digital</p>
          )}
        </div>
        <div className="auxiliar-button-container">
          {(subscription && talismanActivated) ? (
            <ButtonArrowRight2
              color="#ffff"
              text="IR A MI TALISMÁN"
              onClick={()=>{linkTo("myTalisman")}}
            />
          ) :
          (subscription && !talismanActivated) ? (
            <ButtonArrowRight2
              className="button-animation"
              color="#662A80"
              text="ACTIVAR MI TALISMÁN"
              onClick={()=>{linkTo("checkout/digital")}}
            />
          ):
           (
            <ButtonArrowRight2
              color="#ffff"
              text="IR A TIENDA"
              onClick={()=>{linkTo("tienda")}}
            />
          )}
        </div>
      </div>
    </div>
    </div>
    </>
  );
};
