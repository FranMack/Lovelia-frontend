import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ShopingCartContext } from "../../context";
import { TimerContext } from "../../context/timerContext";

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
  const{activatedAlarm}=useContext(TimerContext)
  const {shopingCartOpen}=useContext(ShopingCartContext)


  return (
    <main className={activatedAlarm || shopingCartOpen ? "viewport-background":""}>
    <section className="auth-frontpage-container">
      <div className="auth-frontpage-center-container">
        <h2>CONECTATE CON TU ESENCIA Y PROPÓSITO.</h2>
        <div className="buttons-container">
          <button onClick={linkToLogin}>ACCEDER A MI CUENTA</button>
          <button onClick={linkToRegister}>REGISTRAME</button>
        </div>
      </div>
    </section>
    </main>
  );
};

export default AuthFrontPage;
