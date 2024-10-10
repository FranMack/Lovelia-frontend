import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CloseIcon } from "../../assets/icons/icons";
import { ShopingCartContext } from "../../context/modalShopingCartContext";
import { Button } from "./Button";

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

  const { toggleMenu, shopingCartItems, setShopingCartItems } =
    useContext(ShopingCartContext);

  const totalPrice = () => {
    return shopingCartItems.reduce((acc, item) => acc + item.price, 0);
  };

  const deleteShopingCartItem = (id: number) => {
    const shopingCartUpdated = shopingCartItems.filter((item) => {
      if (item.id !== id) {
        return item;
      }
    });
    localStorage.setItem("shopingCart", JSON.stringify(shopingCartUpdated));
    setShopingCartItems(shopingCartUpdated);
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
            <div key={item.id} className="shoping-cart-card-container">
              <img src={item.image} alt={item.product} />
              <div className="card-info-container">
                <div className="card-title">
                  <h4>{`Talismán ${item.model}`}</h4>
                  <CloseIcon
                    onClick={() => {
                      deleteShopingCartItem(item.id);
                    }}
                  />
                </div>

                <div className="card-td">
                  <strong>Metal:</strong>
                  <p>{item.material}</p>
                </div>
                <div className="card-td">
                  <strong>Piedra:</strong>
                  <p>{item.rock}</p>
                </div>
                <div className="card-td">
                  <strong>Calgante:</strong>
                  <p>{item.chain}</p>
                </div>
                <div className="card-td">
                  <strong>Intención:</strong>
                  <p>{item.intention}</p>
                </div>

                <div className="card-td">
                  <strong>Precio unitario:</strong>
                  <span>{`$ ${item.price}`}</span>
                </div>

         
              </div>
            </div>
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
