import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CloseIcon } from "../../assets/icons/icons";
import { ShopingCartContext } from "../../context/modalShopingCartContext";
import { Button } from "./Button";
import { ShopingCartCard } from "./ShopingCartCard";


export interface ProductosOptions {
  id: number;
  product: string;
  quantity: number;
  model: string;
  material: string;
  chain: string;
  intention: string;
  image: string;
  price: number;
}

export function ShopingCart() {
  const navigate = useNavigate();

  const { toggleMenu, shopingCartItems } =
    useContext(ShopingCartContext);

  const totalPrice = () => {
    return shopingCartItems.reduce((acc, item) => acc + item.price, 0);
  };

  

  const linkToCheckOut = () => {
    if (shopingCartItems.length > 0) {
      navigate("checkout/store");
      toggleMenu();
    } else {
      toast.warning("No hay productos en el carrito de compra");
      return;
    }
  };

  return (
    <div className="shoping-cart-conteiner shopingCartReveal">
      <div className="shoping-cart-top-container">
        <div className="shoping-cart-title">
          <h4>
            Carrito de compras
            {shopingCartItems.length > 0 && ` (${shopingCartItems.length})`}
          </h4>
          <CloseIcon onClick={toggleMenu} />
        </div>
      </div>

      <div className="shoping-cart-center-container">
        {shopingCartItems.map((item) => {
          return (
          <ShopingCartCard key={item.id} {...item}/>
          );
        })}
      </div>

      <div className="shoping-cart-button-container">
        <hr />
        <div className="shoping-cart-button-price-container">
          <p>Total estimado</p>
          <p>${totalPrice()}</p>
        </div>
        <Button onClick={linkToCheckOut} text="CONTINUAR AL CHECKOUT" />
        <div className="auxiliar-button-container">
          <Button onClick={toggleMenu} text="SEGUIR COMPRANDO" />
        </div>

       
        <hr />
      </div>
    </div>
  );
}
