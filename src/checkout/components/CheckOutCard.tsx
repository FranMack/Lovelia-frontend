import {ShopingCartItemOptions} from '../../context';

export const CheckOutCard = ({
  shoppingCartItem_id,
  image,
  model,
  metal,
  rock,
  chain,
  intention,
  price,
  quantity
}: ShopingCartItemOptions) => {
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
              <strong>Meditación visual</strong>
              <p>Animación 3D única</p>
            </div>
            <div className="card-td">
              <strong>Banco de sonidos</strong>
              <p>Listas con meditaciones</p>
            </div>
            <div className="card-td">
              <strong>ADN energetico</strong>
              <p>Información astrológica</p>
            </div>
            <div className="card-td">
              <strong>Y más</strong>
              <p>Timer, alarma, activación, ...</p>
            </div>
            <div className="card-td">
              <strong>Cantidad:</strong>
              <p>{quantity}</p>
            </div>

            <div className="card-td">
              <strong>Subtotal:</strong>
              <span>{`$ ${price * quantity}`}</span>
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
              <p>{intention}</p>
            </div>
            <div className="card-td">
              <strong>Cantidad:</strong>
              <p>{quantity}</p>
            </div>
            

            <div className="card-td">
            <strong>Subtotal:</strong>
            <span>{`$ ${price * quantity}`}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
