import { useNavigate } from "react-router-dom";
import background from "../assets/background_home.png";

export const Home1 = () => {
  const navigate = useNavigate();

  const linkToTest = () => {
    navigate("test");
  };
  const linkToPlans = () => {
    navigate("#plans");
  };
  return (
    <section id="home" className="home-section1-container">
      <img src={background} alt="background-fruits" />
      <div className="home-section1-center-container revealLogo">
        <h1>Decile adiós a las dietas, comé sin culpas y sentite renovada.</h1>
        <h2>
          Aprenderás a comer sin restricciones, adaptando tu alimentación a tus
          objetivos y estilo de vida.
          <br />
          <br />
          De manera real, no perfecta.{" "}
        </h2>

        <div className="home-section1-button-container">
          <button onClick={linkToTest}>Hacer el test</button>
          <button onClick={linkToPlans}>Conocer planes</button>
        </div>
      </div>
    </section>
  );
};
