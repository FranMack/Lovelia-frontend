import { useContext, useEffect, useState } from "react";
import { BackgroundVideo } from "../commons/BackgroundVideo";
import { ShopingCartContext } from "../context/modalShopingCart";
import { ProductosOptions } from "../components/ShopingCart";

const sections = ["1. Dirección de envío", "2. Detalles de pago"];

const deliveryPrice=200


export function CheckOutAnalogic() {
  const [buttonFocusPosition, setButttonFocusPosition] = useState(
    "1. Dirección de envío"
  );

  const handleButtonFocus = (buttonName: string) => {
    setButttonFocusPosition(buttonName);
  };

  const{menuOpen}=useContext(ShopingCartContext)


  const [shopingCartItems, setShopingCartItems] = useState<ProductosOptions[]>([]);

    useEffect(() => {
      const shopingCartJSON = localStorage.getItem('shopingCart') || "[]";
      setShopingCartItems(JSON.parse(shopingCartJSON));
    }, []);

    const productsPrice = () => {
      return shopingCartItems.reduce((acc, item) => acc + item.price, 0);
    };



      
      return (
        <main className={menuOpen ? "viewport-background":"" } >
      <BackgroundVideo />
      <section className="checkout-container efectoReveal">
        <div className="checkout-top-container">
          <ul>
            {sections.map((item, i) => {
              return (
                <li
                  onClick={() => handleButtonFocus(item)}
                  className={
                    buttonFocusPosition === item ? "button-focus-style" : ""
                  }
                  key={i}
                >
                  {item}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="checkout-botton-container">
          {buttonFocusPosition === "1. Dirección de envío" ? (
            <div className="checkout-botton-left-container">
              <div className="checkout-title-container">
                <h3>Dirección de envío</h3>
                <h6>Ingresa los datos para la dirección de envío.</h6>
              </div>

              <form onSubmit={() => {}} className="checkout-form" action="">
                <input
                  value={""}
                  onChange={() => {}}
                  onBlur={() => {}}
                  name="text"
                  type="name"
                  placeholder="Nombre y apellido"
                />
                <input
                  value={""}
                  onChange={() => {}}
                  onBlur={() => {}}
                  name="text"
                  type="name"
                  placeholder="Pais"
                />

                <input
                  value={""}
                  onChange={() => {}}
                  onBlur={() => {}}
                  name="text"
                  type="name"
                  placeholder="Provincia"
                />
                <input
                  value={""}
                  onChange={() => {}}
                  onBlur={() => {}}
                  name="text"
                  type="name"
                  placeholder="Localidad"
                />
                <input
                  value={""}
                  onChange={() => {}}
                  onBlur={() => {}}
                  name="text"
                  type="name"
                  placeholder="Dirección"
                />
                <input
                  value={""}
                  onChange={() => {}}
                  onBlur={() => {}}
                  name="text"
                  type="name"
                  placeholder="Codigo postal"
                />

                <div className="checkout-tipo-envio-container">
                  <h5>Selecciona una opción de envío:</h5>
                  <div className="tipo-envio">
                    <div className="tipo-envio-auxiliar">
                      <label>
                        <input
                          type="radio"
                          name="opcion"
                          value="opcion1"
                          checked
                        />
                        Envío express $0
                      </label>
                      <p>Entrega dentro de 7 días</p>
                    </div>

                    <div className="tipo-envio-auxiliar">
                      <label>
                        <input
                          className="checkmark"
                          type="radio"
                          name="opcion"
                          value="opcion1"
                          checked
                        />
                        Envío económico $0
                      </label>
                      <p>Entrega dentro de 15 - 30 días</p>
                    </div>
                  </div>
                </div>
                <button>Continuar</button>
              </form>
            </div>
          ) : (
            <div className="checkout-botton-left-container">
              <div className="checkout-title-container">
                <h3>Detalle de pago</h3>
                <h6>Ingresa los datos según tu método de pago seleccionado.</h6>
              </div>

              <form onSubmit={() => {}} className="checkout-form" action="">
                <div className="checkout-tipo-envio-container">
                  <h5>Selecciona un método de pago</h5>
                  <div className="tipo-envio">
                    <div className="tipo-envio-auxiliar">
                      <label>
                        <input
                          type="radio"
                          name="opcion"
                          value="opcion1"
                          checked
                        />
                        Mercado Pago
                      </label>
                    </div>

                    <div className="tipo-envio-auxiliar">
                      <label>
                        <input
                          className="checkmark"
                          type="radio"
                          name="opcion"
                          value="opcion1"
                          checked
                        />
                        Paypal
                      </label>
                    </div>
                  </div>
                </div>
                <input
                  value={""}
                  onChange={() => {}}
                  onBlur={() => {}}
                  name="text"
                  type="name"
                  placeholder="Nombre y apellido"
                />
                <input
                  value={""}
                  onChange={() => {}}
                  onBlur={() => {}}
                  name="text"
                  type="name"
                  placeholder="Pais"
                />

                <input
                  value={""}
                  onChange={() => {}}
                  onBlur={() => {}}
                  name="text"
                  type="name"
                  placeholder="Provincia"
                />
                <input
                  value={""}
                  onChange={() => {}}
                  onBlur={() => {}}
                  name="text"
                  type="name"
                  placeholder="Localidad"
                />
                <input
                  value={""}
                  onChange={() => {}}
                  onBlur={() => {}}
                  name="text"
                  type="name"
                  placeholder="Dirección"
                />
                <input
                  value={""}
                  onChange={() => {}}
                  onBlur={() => {}}
                  name="text"
                  type="name"
                  placeholder="Codigo postal"
                />

                <button>Continuar</button>
              </form>
            </div>
          )}
          <div className="checkout-botton-right-container">
            <div className="checkout-title-container">
              <h3>Resumen de pedido</h3>
            </div>
            <div className="checkout-botton-right-center-container">
              {shopingCartItems.map((item) => {
                return (
                  <div key={item.id} className="checkout-card-container">
                    <div className="card-image-container">
                      <img src={item.image} alt={item.product} />
                    </div>

                    <div className="checkout-card-info-container">
                      <div className="card-title">
                        <h4>{item.product}</h4>
                      </div>
                      <table>
                        <tr>
                          <th className="">Cantidad</th>
                          <th className="">Modelo</th>
                          <th className="">Material</th>
                          <th className="">Colgado</th>
                          <th className="">Intension</th>
                        </tr>
                        <tr>
                          <td className="">{item.quantity}</td>
                          <td className="">{item.model}</td>
                          <td className="">{item.material}</td>
                          <td className="">{item.chain}</td>
                          <td className="">{item.intention}</td>
                        </tr>
                      </table>
                      <div className="precio-unitario-container">
                        <p>Precio unitario</p>
                        <strong>{`$ ${item.price}`}</strong>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="checkout-price-container">
              <div className="checkout-prince">
                <p>Total estimado</p>
                <p>${productsPrice()}</p>
              </div>
              <div className="checkout-prince">
                <p>Envío express</p>
                <p>${deliveryPrice}</p>
              </div>
              <div className="checkout-prince">
                <p>Impuestos</p>
                <p>${productsPrice()*0.21}</p>
              </div>
              <hr />
              <div className="checkout-prince">
                <p>
                  <strong>Total</strong>
                </p>
                <p>
                  <strong>${(productsPrice()*1.21)+deliveryPrice}</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
