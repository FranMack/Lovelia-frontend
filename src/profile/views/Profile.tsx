import axios from "axios";
import { useContext, useEffect, useState } from "react";
import talismanDigital from "../assets/talisman-wallpaper.png";
import { BackgroundVideo } from "../../ui/components/BackgroundVideo";
import { envs } from "../../config/envs";
//import { ShopingCartContext } from "../../context/modalShopingCartContext";
import { UserContext } from "../../context/userContext";
import { ProfileNavbar, AcountInfo } from "../components";

interface DatosCompra {
  producto: string;
  numPedido: string;
  fecha: string;
  precio: number;
  image: string[];
}

interface Product {
  model: string;
  material: string;
  rock: string;
  chain: string;
  intention: string;
  price: number;
  quantity: number;
  delivery_id: string;
  billing_id: string;
  id: string;
}

interface DeliveryDetails {
  _id: string;
  phone: string;
  address: string;
  postal_code: string;
  receiver: string;
  price: number;
  __v: number;
}

interface BillingDetails {
  payment_method: string;
  date: string;
  id: string;
}

interface ShopingHistoryItem {
  products: Product[];
  deliveryDetails: DeliveryDetails;
  billingDetails: BillingDetails;
}

type ShopingHistory = ShopingHistoryItem[];

const datosCompras: DatosCompra[] = [
  {
    producto: "Talismán Aura",
    numPedido: "LA1545",
    fecha: "12/05/2024",
    precio: 1000.0,
    image: [talismanDigital, talismanDigital, talismanDigital],
  },
  {
    producto: "Talismán Aura",
    numPedido: "LA1545",
    fecha: "12/05/2024",
    precio: 1000.0,
    image: [talismanDigital],
  },
  {
    producto: "Talismán Aura",
    numPedido: "LA1545",
    fecha: "12/05/2024",
    precio: 1000.0,
    image: [talismanDigital],
  },
  {
    producto: "Talismán Aura",
    numPedido: "LA1545",
    fecha: "12/05/2024",
    precio: 1000.0,
    image: [talismanDigital],
  },
  {
    producto: "Talismán Aura",
    numPedido: "LA1545",
    fecha: "12/05/2024",
    precio: 1000.0,
    image: [talismanDigital],
  },
];

 function Profile() {
  const [buttonFocusPosition, setButttonFocusPosition] = useState("Datos de cuenta");

  const handleButtonFocus = (buttonName: string) => {
    setButttonFocusPosition(buttonName);
  };

 // const { shopingCartOpen } = useContext(ShopingCartContext);
  const { name, lastname, email, subscription } = useContext(UserContext);

  const [shopingHistory, setShopingHistory] = useState<ShopingHistory>([]);
  const [index, setIndex] = useState<number>(0);

  const handleIndex = (index: number) => {
    setIndex(index);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    if (email) {
      axios
        .get(`${envs.API_DOMAIN}/api/v1/product/list/${email}`, {
          withCredentials: true,
        })
        .then((response) => {
          setShopingHistory(response.data.reverse());
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [email]);

  function totalPrice() {
    if (shopingHistory.length > 0) {
      const total = shopingHistory[index].products.reduce((acc, product) => acc + product.price, 0);
      return total + shopingHistory[index].deliveryDetails.price;
    }
    return 0;
  }

  return (
    <section className="profile-container efectoReveal">
      <BackgroundVideo />
      <ProfileNavbar
        buttonFocusPosition={buttonFocusPosition}
        handleButtonFocus={handleButtonFocus}
      />
      {buttonFocusPosition === "Datos de cuenta" && (
        <AcountInfo
          name={name}
          lastname={lastname}
          email={email}
          subscription={subscription}
        />
      )}

      {buttonFocusPosition === "Historial de compras" && (
        <div className="profile-historial-container">
          {shopingHistory.length <= 0 ? (
            <div className="profile-historial-container-noRegister">
              <h4>No se encuentran registros de compra</h4>
            </div>
          ) : (
            <>
              <div className="profile-historial-internal-left-container">
                {shopingHistory.map((item, i) => (
                  <div
                 
                    onClick={() => handleIndex(i)}
                    key={i}
                    className={index===i ? "profile-historial-item-card selected":"profile-historial-item-card"}
                  >
                    <div className="auxiliar">
                      <h4>Compra Nº {shopingHistory.length-i}</h4>
                      <p>{item.billingDetails.date}</p>
                    </div>
                    <p>{`Nº de pedido: ${item.billingDetails.id}`}</p>
                  </div>
                ))}
              </div>

              <div className="profile-historial-internal-right-container">
                <h4>DETALLES DE COMPRA</h4>
                <div className="profile-historial-detalle-container">
                  <div className="profile-historial-detalle-center-container">
                    <p>{`Nro. pedido: ${
                      shopingHistory.length > 0 && shopingHistory[index].billingDetails.id
                    }`}</p>
                    <p>{`Fecha: ${
                      shopingHistory.length > 0 && shopingHistory[index].billingDetails.date
                    }`}</p>
                    <hr />
                    <div className="product-image-container">
                      {datosCompras[0].image.map((item, i) => (
                        <img key={i} src={item} alt={`Producto ${i + 1}`} />
                      ))}
                    </div>
                    <hr />
                    <table>
                      <thead>
                        <tr>
                          <th className="table-title">
                            Producto <span>(Material - Piedra - Cadena)</span>
                          </th>
                          <th className="table-title">Precio</th>
                        </tr>
                      </thead>
                      <tbody>
                        {shopingHistory.length > 0 &&
                          shopingHistory[index].products.map((item) => (
                            <tr key={item.id}>
                              <td>{`${item.model} (${item.material} - ${item.rock} - ${item.chain})`}</td>
                              <td>{`$ ${item.price}`}</td>
                            </tr>
                          ))}
                        <tr>
                          <td>Envío</td>
                          <td>{`$ ${shopingHistory[index].deliveryDetails.price}`}</td>
                        </tr>
                        <tr>
                          <td>TOTAL</td>
                          <td>$ {totalPrice()}</td>
                        </tr>
                      </tbody>
                    </table>
                    <hr />

                    <div className="envio-info-container">
                      <div className="envio-info-auxiliar-container">
                        <h5>Datos de envío</h5>
                        <p>{`Dirección: ${shopingHistory[index].deliveryDetails.address}`}</p>
                        <p>{`CP: ${shopingHistory[index].deliveryDetails.postal_code}`}</p>
                        <p>{`Destinatario: ${shopingHistory[index].deliveryDetails.receiver}`}</p>
                        <p>{`Teléfono: ${shopingHistory[index].deliveryDetails.phone}`}</p>
              
                      </div>
                      <div className="envio-info-auxiliar-container">
                        <h5>Método de pago</h5>
                        <p>{shopingHistory[index].billingDetails.payment_method}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </section>
  );
}

export default Profile;