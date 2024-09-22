import { RefObject } from "react";
import { Breake } from "../../ui/components";
import asterix from "../assets/Asterisk 1.png";
import flower2 from "../assets/Flower.png";
import flower from "../assets/Soft Flower.png";
import arrowLeft from "../assets/arrow_left.png";
import arrowRight from "../assets/arrow_right.png";

interface Home3Options {
  reference: RefObject<HTMLElement> | undefined;
}

export const Home3 = ({ reference }: Home3Options) => {
  return (
    <section ref={reference} className="home-section3-container">
      <div className="home-section3-top-container efectoRevealOut">
        <h3>Te cuento cÓmo empezar</h3>

        <h4>Conocé como trabajaremos en conjunto</h4>
      </div>

      <div className="home-section3-center-container">
        <div className="home-section3-card-container">
          <div className="card-container-left">
            <div className="number-container">
              <img src={flower} alt="flower" />
              <p>01</p>
            </div>
            <div className="text-container">
              <h3>
                Elegí el plan según
                <br /> tus objetivos
              </h3>
              <p>
                Podrás elegir el plan que mejor se adapte a vos y a los
                objetivos que quieras lograr, luego te enviaré un formulario
                donde podrás contarme sobre tus hábitos, tus consumos de
                alimentos y que te gustaría lograr.
              </p>
            </div>
          </div>
          <div className="card-container-right">
            <div className="arrow-container">
              <img src={arrowRight} alt="arrow" />
              <p>02</p>
            </div>
          </div>
        </div>

        <div className="home-section3-card-container right">
          <div className="card-container-right">
            <div className="arrow-container">
              <img src={arrowLeft} alt="arrow" />
              <p>02</p>
            </div>
          </div>

          <div className="card-container-left">
            <div className="number-container">
              <img src={asterix} alt="flower" />
              <p>02</p>
            </div>
            <div className="text-container">
              <h3>
                Conocé tu nuevo
                <br /> estilo de vida
              </h3>
              <p>
                A las 48-72 horas recibirás tu plan alimentario totalmente
                adaptado a vos y con guías complementarias para que puedas estar
                al 100% comprometida con tu nuevo estilo de vida.
              </p>
            </div>
          </div>
        </div>

        <div className="home-section3-card-container">
          <div className="card-container-left">
            <div className="number-container">
              <img src={flower2} alt="flower" />
              <p>03</p>
            </div>
            <div className="text-container">
              <h3>
                Charlamos sobre cómo
                <br /> adaptar el plan a tu día a día
              </h3>
              <p>
                Podrás elegir que la explicación del plan sea por videollamada
                en donde comentaremos juntas cada parte del plan a detalle,
                despejando tus dudas y donde te dare tips y sugerencias para que
                logres una excelente conexión con la nueva manera de vivir que
                te espera.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Breake />
    </section>
  );
};
