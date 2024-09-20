import talismanDigital from "../assets/tienda_td.png";
import talismanAnalogic from "../assets/tienda_ta.png";
import { ObliqueArrow } from "../../assets/icons/icons";
import { useNavigate } from "react-router-dom";

export const Store1 = () => {
  const navigate=useNavigate();
  const linkToBuyDigital=()=>{navigate("/buy-digital")}
  const linkToBuyAnalogic=()=>{navigate("/buy-analogic")}
  return (
    <section className="section1-store-container">
      <div className="section1-store-internal-contaner">
        <img src={talismanDigital} alt="talisman digital" />
        <div className="section1-store-text-container">
            <div className="icon-container"><ObliqueArrow color="#ffff"/></div>
          <h2 onClick={linkToBuyDigital}>TALISMÁN DIGITAL</h2>
        </div>
      </div>
      <div className="section1-store-internal-contaner">
        <img src={talismanAnalogic} alt="talisman analogico" />
        <div className="section1-store-text-container">
        <div className="icon-container"><ObliqueArrow color="#6f3289"/></div>
          <h2 onClick={linkToBuyAnalogic}>TALISMÁN ANALÓGICO</h2>
        </div>
      </div>
    </section>
  );
};
