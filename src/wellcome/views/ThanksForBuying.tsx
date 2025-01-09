import { BackgroundVideo } from "../../ui/components";
import { Button } from "../../ui/components/Button";
import lovelia from "../../contact/assets/logoSimple.png";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { ShopingCartContext } from "../../context";

 const ThanksForBuying = () => {

  const {setShopingCartItems}=useContext(ShopingCartContext)
  useEffect(() => {
    window.scrollTo(0, 0);
    localStorage.removeItem('shopingCart');
    setShopingCartItems([]);
  }, []);

  const navigate = useNavigate();

  const linkToHome = () => {
    navigate("/");
  };
  return (
    <section className="wellcomeDigital-container">
      <BackgroundVideo />

      <div className="wellcomeDigital-center-container">
        <div className="wellcomeDigital-center-top-container">
          <img src={lovelia} alt="logo lovelia" />
      
        </div>
        <h3>Tu pedido esta siendo procesado</h3>
        <h4>Recibirás un email con el resúmen de compra</h4>
        <Button text="Continuar" onClick={linkToHome} />
      </div>
    </section>
  );
};

export default ThanksForBuying