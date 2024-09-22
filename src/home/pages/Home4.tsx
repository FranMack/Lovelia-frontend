import { RefObject, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ScreenSizeContext } from "../../context/screenSize.context";
import { plans } from "../assets/plansData";
import { PlansGrid } from "../components/PlansGrid";
import { Slider } from "../components/Slider";

interface Home4Options {
  reference: RefObject<HTMLElement> | undefined;
}

export const Home4 = ({ reference }: Home4Options) => {
  const navigate = useNavigate();

  const linkTo = (path: string) => {
    navigate(`/plan/${path}`);
  };

  const { screenWidth } = useContext(ScreenSizeContext);

  return (
    <section ref={reference} id="plans" className="home-section4-container">
      <div className="home-section4-top-container efectoRevealOut">
        <h3>PLANES</h3>

        <h4>
          Elegi como queres empezar a<br /> cambiar tu vida
        </h4>
        <p>¡Elegí el plan que más se adapte a tus objetivos!</p>
        <p>
          {" "}
          Todos los planes incluyen mediciones de porciones según tus
          requerimientos energéticos y proteicos, kit de menús saludables y
          deliciosas recetas para complementar tu cocina.
        </p>
      </div>
      {screenWidth >= 1024 ? (
        <PlansGrid plans={plans} linkTo={linkTo} />
      ) : (
        <Slider plans={plans} linkTo={linkTo} />
      )}
    </section>
  );
};
