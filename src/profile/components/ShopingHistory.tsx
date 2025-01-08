import {useState} from 'react';
import talismanDigital from '../assets/talisman-wallpaper.png';

interface Product {
  model: string;
  metal: string;
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

const datosCompras = [
  {
    producto: 'Talismán Aura',
    numPedido: 'LA1545',
    fecha: '12/05/2024',
    precio: 1000.0,
    image: [talismanDigital, talismanDigital, talismanDigital],
  },
];

export type ShopingHistoryProp = ShopingHistoryItem[];

interface ShopingHistoryProps {
  shopingHistory: ShopingHistoryProp;
}



export const ShopingHistory = ({shopingHistory}: ShopingHistoryProps) => {
  const [index, setIndex] = useState<number>(0);

  const handleIndex = (index: number) => {
    setIndex(index);
  };

  function totalPrice() {
    if (shopingHistory.length > 0) {
      const total = shopingHistory[index].products.reduce(
        (acc, product) => acc + product.price,
        0,
      );

      const deliveryPrice = shopingHistory[index].deliveryDetails
        ? shopingHistory[index].deliveryDetails.price
        : 0;

      return total + deliveryPrice;
    }
    return 0;
  }

  
  return (
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
                className={
                  index === i
                    ? 'profile-historial-item-card selected'
                    : 'profile-historial-item-card'
                }>
                <div className="auxiliar">
                  <h4>Compra Nº {shopingHistory.length - i}</h4>
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
                  shopingHistory.length > 0 &&
                  shopingHistory[index].billingDetails.id
                }`}</p>
                <p>{`Fecha: ${
                  shopingHistory.length > 0 &&
                  shopingHistory[index].billingDetails.date
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
                        Producto <span>(Metal - Piedra - Cadena)</span>
                      </th>
                      <th className="table-title">Precio</th>
                    </tr>
                  </thead>
                  <tbody>
                    {shopingHistory.length > 0 &&
                      shopingHistory[index].products.map(item => (
                        <tr key={item.id}>
                          {item.model === 'Digital' ? (
                            <td>{`Talismán ${item.model}`}</td>
                          ) : item.model === 'Pulsera' ? (
                            <td>{`${item.model} (${item.metal})`}</td>
                          ) : (
                            <td>{`${item.model} (${item.metal} - ${item.rock} - ${item.chain})`}</td>
                          )}

                          <td>{`$ ${item.price}`}</td>
                        </tr>
                      ))}
                    {shopingHistory[index].deliveryDetails && (
                      <tr>
                        <td>Envío</td>
                        <td>{`$ ${shopingHistory[index].deliveryDetails.price}`}</td>
                      </tr>
                    )}
                    <tr>
                      <td>TOTAL</td>
                      <td>$ {totalPrice()}</td>
                    </tr>
                  </tbody>
                </table>
                <hr />

                <div className="envio-info-container">
                  {shopingHistory[index].deliveryDetails && (
                    <div className="envio-info-auxiliar-container">
                      <h5>Datos de envío</h5>
                      <p>{`Dirección: ${shopingHistory[index].deliveryDetails.address}`}</p>
                      <p>{`CP: ${shopingHistory[index].deliveryDetails.postal_code}`}</p>
                      <p>{`Destinatario: ${shopingHistory[index].deliveryDetails.receiver}`}</p>
                      <p>{`Teléfono: ${shopingHistory[index].deliveryDetails.phone}`}</p>
                    </div>
                  )}
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
  );
};
