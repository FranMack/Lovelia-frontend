import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

 const AuthFrontPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();

  const linkToRegister = () => {
    navigate("/register");
  };
  const linkToLogin = () => {
    navigate("/login");
  };
  return (
    <section className="auth-frontpage-container">
      <div className="auth-frontpage-center-container">
        <h2>CONECTATE CON TU ESENCIA Y PROPÓSITO.</h2>
        <div className="buttons-container">
          <button onClick={linkToLogin}>ACCEDER A MI CUENTA</button>
          <button onClick={linkToRegister}>REGISTRAME</button>
        </div>
      </div>
    </section>
  );
};

export default AuthFrontPage;
