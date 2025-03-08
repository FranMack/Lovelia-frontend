import { useNavigate } from "react-router-dom";
import { ObliqueArrow } from "../../assets/icons/icons";
import aura from "../assets/Lu-Aura Oro Onix N 3.webp";
import talismanDigital from "../assets/ejemplo3_talisman_digital.webp";

export const Store1 = () => {
  const navigate = useNavigate();
  const linkToBuyDigital = () => {
    navigate("/buy-digital");
  };
  const linkToBuyAnalogic = () => {
    navigate("/buy-analogic");
  };
  return (
    <section className="section1-store-container efectoReveal">
      <div className="section1-store-internal-contaner">
        <img src={talismanDigital} alt="talisman digital" />
        <div className="section1-store-text-container">
          <div className="icon-container">
            <ObliqueArrow color="#ffff" />
          </div>
          <h2 onClick={linkToBuyDigital}>TALISMÁN DIGITAL</h2>
        </div>
      </div>
      <div className="section1-store-internal-contaner">
        <img src={aura} alt="talisman analogico" />
        <div className="section1-store-text-container">
          <div className="icon-container">
          <ObliqueArrow color="#662A80" />
          </div>
          <h2 onClick={linkToBuyAnalogic}>TALISMANES FÍSICOS</h2>
        </div>
      </div>
    </section>
  );
};
