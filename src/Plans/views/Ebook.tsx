import { useContext, useEffect } from "react";
import {
  ShopingCartContext,
  ShopingCartItemOptions,
} from "../../context/shopingCart.context";
import ebbok from "../assets/ebook.png";

export const Ebook = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { toggleMenu, setShopingCartItems } = useContext(ShopingCartContext);

  const addToShopingCart = () => {
    const shopingCartJSON = localStorage.getItem("shopingCart") || "[]";
    const shopingCart: ShopingCartItemOptions[] = JSON.parse(shopingCartJSON);

    const shopingCartNewItem: ShopingCartItemOptions = {
      id: 5,
      product: "Ebook: Preparate 1 día y come toda la semana",
      price: 5000,
      image: ebbok,
      consult: false,
      consultPrice: 0,
    };

    if (
      shopingCart.find((item) => {
        return item.id === 5;
      })
    ) {
      toggleMenu();
      return;
    }

    const shopingCartUpdate = [shopingCartNewItem, ...shopingCart];
    localStorage.setItem("shopingCart", JSON.stringify(shopingCartUpdate));
    setShopingCartItems(shopingCartUpdate);

    toggleMenu();
  };

  return (
    <section className="plan-container">
      <div className="plan-center-container leftReveal">
        <div className="plan-center-top-container">
          <h2>INICIO / PLANES / TIENDA</h2>
        </div>
        <div className="plan-center-bottom-container">
          <div className="plan-image-container">
            <img src={ebbok} alt="food plate" />
          </div>
          <div className="plan-info-container">
            <h3>Ebook:Preparate 1 día y come toda la semana</h3>
            <h4>{`$ 5000`}</h4>
            <button onClick={addToShopingCart}>Agregar al carrito</button>
            <div className="text-container">
              <h4>Descripción</h4>
              <p>
                De una manera simple y sencilla conseguirás tener una
                alimentación equilibrada, comer sano la mayor parte de tus días.
                <br /> Aprenderás a planificar tus comidas semanales y
                realizando las compras inteligentemente para cocinar 1 día y
                comer toda la semana
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
