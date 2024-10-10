import { BackgroundVideo } from "../../ui/components";
import { Button } from "../../ui/components/Button";
import lovelia from "../../contact/assets/logoSimple.png";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

 const WelcomeRegister = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  const linkToLogin = () => {
    navigate("/login");
  };
  return (
    <section className="wellcomeDigital-container">
      <BackgroundVideo />

      <div className="wellcomeDigital-center-container">
        <div className="wellcomeDigital-center-top-container">
          <img src={lovelia} alt="logo lovelia" />
          <h2>te da la bienvenida. </h2>
        </div>
        <h3>Tuc cuenta ha sido activada</h3>
        <h4>Hace click a continuación para iniciar sesión</h4>
        <Button text="Iniciar Sesión" onClick={linkToLogin} />
      </div>
    </section>
  );
};

export default WelcomeRegister