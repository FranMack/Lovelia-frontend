import talismanDigital from "../assets/talisman_info_td.webp";
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
  position: Position.Left,
  color: "#6f3289",
  backgroundColor: "#76CBC0",
};

export const TalismanInfo3 = () => {
  const navigate = useNavigate();
  const linkToTalismanDigital = () => {
    navigate("/talisman-digital");
  };
  const buttonRightInfo: OptionsArrowRight2 = {
    text: "VER MÁS",
    color: "#6f3289",
    onClick: linkToTalismanDigital,
  };

  const animationRef = useScrollReveal<HTMLDivElement>("topReveal");
  return (
    <Template1 {...templateOptions}>
      <div ref={animationRef} className="talismanInfo3-internal-container right">
        <div className="talismanInfo3-internal-text-container">
          <h2>
            <div className="icon-container">
              <ObliqueArrow color="#6f3289" />
            </div>
            TALISMÁN
          </h2>
          <h2>DIGITAL</h2>
          <br />
          <br />

          <p>
          El talismán digital es un <strong>espacio virtual</strong>, es una expresión de tu ADN energético, es un sonido, un mantra, es <strong>recordar tu propósito</strong>, enfocarte, es una herramienta para <strong>conectarte</strong>, es <strong>saber que puedes</strong>.
          </p>
          <p>
          Combinando tecnología y saberes ancestrales generamos un <strong>espacio de meditación visual, auditiva y kinestésica</strong>, que te posibilita <strong>volver a tu centro</strong> siempre que lo desees, mediante una <strong>representación 3D de tu ADN energético.</strong>
          </p>
          <p>El talismán digital te conecta con <strong>tu intención personal y con las intenciones de Lovelia</strong>, para que puedas enfocar tu energía y conectar con tu <strong>potencial infinito</strong>.</p>
          <div className="button-wrapper"></div>
          <ButtonArrowRight2 {...buttonRightInfo} />
        </div>
      </div>
    </Template1>
  );
};
