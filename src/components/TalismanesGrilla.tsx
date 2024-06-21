import { useNavigate } from "react-router-dom";
import { ejemploTalismanesAnalogicos } from "../assets/images/ejemplos-talisman-analogico/ejemplosTalismanes";
import talisman from "../assets/images/talisman-fisico.png";
import talisman2 from "../assets/images/talisman-fisico2.png";
import { Button } from "../commons/Button";

export function TalismanesGrilla() {
  const navigate = useNavigate();

  const linkToComprarTalisman = () => {
    navigate("/comprar-talisman-analogico");
  };

  return (
    <>
      <div className="talismanesGrilla-top-container">
        <div className="talismanesGrilla-top-image-container">
          <img src={talisman} alt="Talisman-vista1" />
        </div>
        <div className="talismanesGrilla-top-image-container">
          <img src={talisman2} alt="Talisman-vista2" />
        </div>
      </div>
      <div className="talismanesGrilla-bottom-container">
        {ejemploTalismanesAnalogicos.map((talisman, i) => {
          return (
            <div className="talismanesGrilla-bottom-image-container" key={i}>
              <img src={talisman.image} alt={talisman.title} />
            </div>
          );
        })}
      </div>
      <div className="talismanesGrilla-buttom-container">
        <Button
          text="Comprar talismán analógico"
          onClick={linkToComprarTalisman}
        />
      </div>
    </>
  );
}
