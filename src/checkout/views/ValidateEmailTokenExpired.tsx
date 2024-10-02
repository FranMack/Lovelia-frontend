import { BackgroundVideo } from "../../ui/components";
import { Button } from "../../ui/components/Button";
import lovelia from "../../contact/assets/logoSimple.png";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const ValidateEmailTokenExpired = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  const linkToMyTalisman = () => {
    navigate("/register");
  };
  return (
    <section className="wellcomeDigital-container">
      <BackgroundVideo />

      <div className="wellcomeDigital-center-container">
        <div className="wellcomeDigital-center-top-container">
          <img src={lovelia} alt="logo lovelia" />
          <h2>te da la bienvenida. </h2>
        </div>
        <h3>Tu tiempo de activación de cuenta ha expirado</h3>
        <h4>Vuelve a registrarte en Lovelia para poder activar tu cuenta</h4>
        <Button text="Registrame" onClick={linkToMyTalisman} />
      </div>
    </section>
  );
};
