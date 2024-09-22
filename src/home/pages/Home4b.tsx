import { RefObject } from "react";
import { useNavigate } from "react-router-dom";
import ebook from "../assets/ebook.png";

interface Home4bOptions {
  reference: RefObject<HTMLElement> | undefined;
}

export const Home4b = ({ reference }: Home4bOptions) => {
  const navigate = useNavigate();
  const linkTo = () => {
    navigate("/ebook");
  };
  return (
    <section ref={reference} id="ebook" className="home-section4b-container">
      <div className="home-section4b-internal-container efectoRevealOut">
        <div className="text-container">
          <h4>
            Ebook:
            <br /> herramientas prácticas para gente sin tiempo
          </h4>
          <h5>
            Cocina 1 dia y come toda la semana.
            <br /> Guía para comprar en el super y ahorrar dinero
          </h5>
          <button onClick={linkTo}>Lo quiero</button>
        </div>
      </div>
      <div className="home-section4b-internal-container efectoRevealOut">
        <img src={ebook} alt="ebook" />
      </div>
    </section>
  );
};
