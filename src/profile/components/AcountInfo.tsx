import { ButtonArrowRight2 } from "../../ui/components";
import { useNavigate } from "react-router-dom";
import talismanDigital from "../assets/talisman-wallpaper.png";

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

  return (
    <div className="acountInfo-container">
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

        <button>Modificar datos de perfil</button>
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
  );
};
