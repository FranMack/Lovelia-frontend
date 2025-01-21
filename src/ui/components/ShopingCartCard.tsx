import {useContext} from 'react';
import {GarbageCan} from '../../assets/icons/icons';
import {ShopingCartContext, UserContext} from '../../context';
import axios from 'axios';
import { envs } from '../../config';

interface ShopingCartCardOptions {
  shoppingCartItem_id: number | string;
  image: string;
  model: string;
  metal?: string;
  rock?: string;
  chain?: string;
  intention?: string;
  price: number;
  quantity:number
}

export const ShopingCartCard = ({
  shoppingCartItem_id,
  image,
  model,
  metal,
  rock,
  chain,
  intention,
  price,
  quantity
}: ShopingCartCardOptions) => {

  const {email}=useContext(UserContext)
  const {setShopingCartItems, shopingCartItems} =
    useContext(ShopingCartContext);

  const deleteShopingCartItem = async (
    shoppingCartItem_id: number | string,
  ) => {

    try{

      const shopingCartUpdated = shopingCartItems.filter(item => {
        if (item.shoppingCartItem_id !== shoppingCartItem_id) {
          return item;
        }
      });

      if(email){await axios.delete(`${envs.API_DOMAIN}/api/v1/shopping-cart/delete/${shoppingCartItem_id}`,{withCredentials:true})}

      else{

        localStorage.setItem('shopingCart', JSON.stringify(shopingCartUpdated));
      }
    
      setShopingCartItems(shopingCartUpdated);

    }


    catch(error){
      console.log(error)
    }



   
  };
  return (
    <>
      {model === 'Digital' ? (
        <div key={shoppingCartItem_id} className="shoping-cart-card-container">
          <img src={image} alt={model} />
          <div className="card-info-container">
            <div className="card-title">
              <h4>{`Talismán ${model}`}</h4>
              <GarbageCan
                onClick={() => {
                  deleteShopingCartItem(shoppingCartItem_id);
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
              <strong>Cantidad:</strong>
              <p>{quantity}</p>
            </div>

            <div className="card-td price">
              <strong>Subtotal:</strong>
              <span>{`$ ${price * quantity}`}</span>
            </div>
          </div>
        </div>
      ) : (
        <div key={shoppingCartItem_id} className="shoping-cart-card-container">
          <img src={image} alt={model} />
          <div className="card-info-container">
            <div className="card-title">
              <h4>{`${model}`}</h4>
              <GarbageCan
                onClick={() => {
                  deleteShopingCartItem(shoppingCartItem_id);
                }}
              />
            </div>

            <div className="card-td">
              <strong>Metal:</strong>
              <p>{metal}</p>
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
            <div className="card-td">
              <strong>Cantidad:</strong>
              <p>{quantity}</p>
            </div>

            <div className="card-td price">
              <strong>Subtotal:</strong>
              <span>{`$ ${price * quantity}`}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
