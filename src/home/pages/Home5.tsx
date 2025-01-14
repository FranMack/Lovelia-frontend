import { useNavigate } from "react-router-dom";
import { LazyImage } from "../../ui/components";
import image1 from "../assets/Home_quiero mitalisman_izquierda.webp";
import image2 from "../assets/Home_quiero mitalisman_derecha.webp";
import { useScrollReveal } from "../../hooks/useScrollReveal";

export const Home5 = () => {
  const navigate = useNavigate();
  const linkToStore = () => {
    navigate("/tienda");
  };

    const animationRef = useScrollReveal<HTMLDivElement>('leftReveal');
    const animationRef2 = useScrollReveal<HTMLDivElement>('rightReveal');
  return (
    <section className="section5-home-container">
      <div ref={animationRef} className="section5-home-internal-container">
        <LazyImage src={image1} alt="colgante" />
      </div>
      <div ref={animationRef2} className="section5-home-internal-container">
        <LazyImage src={image2} alt="colgante" />
      </div>

      <button onClick={linkToStore} className="section5-home-button">
        QUIERO MI TALISMÁN
      </button>
    </section>
  );
};
