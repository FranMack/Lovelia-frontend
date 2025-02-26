import talismanDigital from "../assets/talisman_info_ta.webp";
import { Template1 } from "../../ui/pages/Template1";
import { Template1Options } from "../../ui/pages/Template1";
import { Position } from "../../ui/pages/Template1";
import { ButtonArrowRight2 } from "../../ui/components/ButtonArrowRight2";
import { OptionsArrowRight2 } from "../../ui/components/ButtonArrowRight2";
import { ObliqueArrow } from "../../assets/icons/icons";
import { useNavigate } from "react-router-dom";
import { useScrollReveal } from "../../hooks/useScrollReveal";

const templateOptions: Template1Options = {
  image: talismanDigital,
  position: Position.Right,
  color: "#ffff",
  backgroundColor: "#82B74D",
};

export const TalismanInfo4 = () => {
  const navigate = useNavigate();
  const linkToTalismanDigital = () => {
    navigate("/talisman-analogico");
  };

  const buttonRightInfo: OptionsArrowRight2 = {
    text: "VER MÁS",
    color: "#ffffff",
    onClick: linkToTalismanDigital,
  };

  const animationRef = useScrollReveal<HTMLDivElement>("topReveal");

  return (
    <Template1 {...templateOptions}>
      <div ref={animationRef} className="talismanInfo3-internal-container right">
        <div className="talismanInfo3-internal-text-container">
          <h2>
            <div className="icon-container">
              <ObliqueArrow color="#ffff" />
            </div>
            TALISMÁNES
          </h2>
          <h2>FISICOS</h2>
          <br />
          <br />

          <p>
            Los talismanes Lovelia son una
        
            {" "}<strong>manifestación física de nuestras intenciones,</strong> un
            {" "}<strong>reflejo de nuestro poder interior</strong> y de la
            maravillosa
            capacidad que todos poseemos para{" "}
            <strong>
              cocrear
               nuestra propia realidad.{" "}
            </strong>
          </p>
          <p>
            Tienes la libertad de elegir cuidadosamente cada
             elemento que lo conforma, incluso la intención que
             deseas que esté presente en este momento de tu vida.
          </p>
          <div className="button-wrapper"></div>
          <ButtonArrowRight2 {...buttonRightInfo} />
        </div>
      </div>
    </Template1>
  );
};
