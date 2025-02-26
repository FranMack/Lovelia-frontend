import {ShopingCartItemOptions} from '../../context';
import {formatPrice} from '../../store/helpers/priceFormater';

type CheckoutCardProps = ShopingCartItemOptions & {currency: string};

export const CheckOutCard = ({
  shoppingCartItem_id,
  image,
  model,
  metal,
  rock,
  chain,
  intention,
  price_AR,
  price_MX,
  price_RM,
  quantity,
  currency,
}: CheckoutCardProps) => {
  return (
    <>
      {model === 'Digital' ? (
        <div key={shoppingCartItem_id} className="checkout-card-container">
          <img src={image} alt={model} />

          <div className="checkout-card-info-container">
            <div className="card-title">
              <h4>{`Talismán ${model}`}</h4>
            </div>

            <div className="card-td">
              <strong>Animación 3D única</strong>
       
            </div>
            <div className="card-td">
              <strong>Listas con meditaciones</strong>
            </div>
            <div className="card-td">
              <strong>ADN energetico</strong>
            </div>
            <div className="card-td">
              <strong>Y más</strong> 
            </div>
            <div className="card-td">
              <strong>Cantidad:</strong>
              <p>{quantity}</p>
            </div>

            <div className="card-td">
              <strong>Subtotal:</strong>
              <span>{`${formatPrice(
                currency,
                price_AR * quantity,
                price_MX * quantity,
                price_RM * quantity,
              )}`}</span>
            </div>
          </div>
        </div>
      ) : (
        <div key={shoppingCartItem_id} className="checkout-card-container">
          <img src={image} alt={model} />

          <div className="checkout-card-info-container">
            <div className="card-title">
              <h4>{`Talismán ${model}`}</h4>
            </div>

            <div className="card-td">
              <strong>Metal:</strong>
              <p>{metal}</p>
            </div>
            <div className="card-td">
              <strong>Piedra:</strong>
              <p>{rock}</p>
            </div>
            <div className="card-td">
              <strong>Calgante:</strong>
              <p>{chain}</p>
            </div>
            <div className="card-td">
              <strong>Intención:</strong>
              <p>{intention?.slice(0,22)}</p>
            </div>
            <div className="card-td">
              <strong>Cantidad:</strong>
              <p>{quantity}</p>
            </div>

            <div className="card-td">
              <strong>Subtotal:</strong>
              <span>{` ${formatPrice(
                currency,
                price_AR * quantity,
                price_MX * quantity,
                price_RM * quantity,
              )}`}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
