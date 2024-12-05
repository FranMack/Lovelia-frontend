import { useNavigate } from "react-router-dom";
import { ObliqueArrow } from "../../assets/icons/icons";
import bindus from "../../home/assets/Lu-Bindu Plata Rodo 4.jpg";
import talismanDigital from "../assets/ejemplo2_talisman_digital.png";

export const Store1 = () => {
  const navigate = useNavigate();
  const linkToBuyDigital = () => {
    navigate("/buy-digital");
  };
  const linkToBuyAnalogic = () => {
    navigate("/buy-analogic");
  };
  return (
    <section className="section1-store-container">
      <div className="section1-store-internal-contaner">
        <img src={talismanDigital} alt="talisman digital" />
        <div className="section1-store-text-container">
          <div className="icon-container">
            <ObliqueArrow color="#662A80" />
          </div>
          <h2 onClick={linkToBuyDigital}>TALISMÁN DIGITAL</h2>
        </div>
      </div>
      <div className="section1-store-internal-contaner">
        <img src={bindus} alt="talisman analogico" />
        <div className="section1-store-text-container">
          <div className="icon-container">
          <ObliqueArrow color="#ffff" />
          </div>
          <h2 onClick={linkToBuyAnalogic}>TALISMÁN ANALÓGICO</h2>
        </div>
      </div>
    </section>
  );
};
