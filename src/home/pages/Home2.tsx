import { RefObject } from "react";
import profile from "../assets/abril.png";

interface Home2Options {
  reference: RefObject<HTMLDivElement> | undefined;
}

export const Home2 = ({ reference }: Home2Options) => {
  return (
    <section id="me" className="home-section2-container">
      <div ref={reference} className="home-section2-center-container  ">
        <div className="image-container efectoRevealOut">
          <img src={profile} alt="profile-image" />
        </div>
        <div className="text-container efectoRevealOut">
          <h3>QuiEn soy</h3>
          <h4>
            Soy Abril Sack, especialista
            <br /> en nutrición para la salud
            <br /> hormonal de la mujer.
          </h4>
          <p>
            Como licenciada en nutrición mi enfoque se centra en mujeres desde
            30 años en adelante que quieren tener una mejor relación con la
            comida y que van más allá de la dieta convencional (anti/dieta) que
            nos permite una mejor adherencia a largo plazo sin efecto rebote.
          </p>
          <p>
            Me gustaría enseñarte a vivir una vida saludable sin restricciones
            para que puedas sentirte tú misma y brindarte herramientas que te
            permitan tener el cuerpo que deseas y la salud que te mereces.
          </p>
        </div>
      </div>
    </section>
  );
};
