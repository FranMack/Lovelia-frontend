import {useContext} from 'react';
import {GarbageCan} from '../../assets/icons/icons';
import {ShopingCartContext} from '../../context';

interface ShopingCartCardOptions {
  id: number;
  image: string;
  product: string;
  model: string;
  material?: string;
  rock?: string;
  chain?: string;
  intention?: string;
  price: number;
}

export const ShopingCartCard = ({
  id,
  image,
  product,
  model,
  material,
  rock,
  chain,
  intention,
  price,
}: ShopingCartCardOptions) => {
  const {setShopingCartItems, shopingCartItems} =
    useContext(ShopingCartContext);

  const deleteShopingCartItem = (id: number) => {
    const shopingCartUpdated = shopingCartItems.filter(item => {
      if (item.id !== id) {
        return item;
      }
    });
    localStorage.setItem('shopingCart', JSON.stringify(shopingCartUpdated));
    setShopingCartItems(shopingCartUpdated);
  };
  return (
    <>
      {model === 'Digital' ? (
        <div key={id} className="shoping-cart-card-container">
          <img src={image} alt={product} />
          <div className="card-info-container">
            <div className="card-title">
              <h4>{`Talismán ${model}`}</h4>
              <GarbageCan
                onClick={() => {
                  deleteShopingCartItem(id);
                }}
              />
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
              <strong>Precio unitario:</strong>
              <span>{`$ ${price}`}</span>
            </div>
          </div>
        </div>
      ) : (
        <div key={id} className="shoping-cart-card-container">
          <img src={image} alt={product} />
          <div className="card-info-container">
            <div className="card-title">
              <h4>{`${model}`}</h4>
              <GarbageCan
                onClick={() => {
                  deleteShopingCartItem(id);
                }}
              />
            </div>

            <div className="card-td">
              <strong>Metal:</strong>
              <p>{material}</p>
            </div>
            {model !== 'Pulsera' && (
              <>
                <div className="card-td">
                  <strong>Piedra:</strong>
                  <p>{rock}</p>
                </div>
                <div className="card-td">
                  <strong>Calgante:</strong>
                  <p>{chain}</p>
                </div>
              </>
            )}
            <div className="card-td">
              <strong>Intención:</strong>
              <p>{intention}</p>
            </div>

            <div className="card-td price">
              <strong>Precio unitario:</strong>
              <span>{`$ ${price}`}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
