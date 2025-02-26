import axios from 'axios';
import {useContext, useState} from 'react';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {GarbageCan} from '../../assets/icons/icons';
import {envs} from '../../config';
import {ShopingCartContext, UserContext} from '../../context';
import {CurrencyContext} from '../../context/currencyContext';
import {formatPrice} from '../../store/helpers/priceFormater';
import { AddIcon,MinusIcon } from '../../assets/icons/icons';

interface ShopingCartCardOptions {
  shoppingCartItem_id: number | string;
  image: string;
  model: string;
  metal?: string;
  rock?: string;
  chain?: string;
  intention?: string;
  price_AR: number;
  price_MX: number;
  price_RM: number;
  quantity: number;
  product_id: string;
}

export const ShopingCartCard = ({
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
  product_id,
}: ShopingCartCardOptions) => {
  const {email} = useContext(UserContext);
  const {currency} = useContext(CurrencyContext);

  const {setShopingCartItems, shopingCartItems} =
    useContext(ShopingCartContext);

  const deleteShopingCartItem = async (
    shoppingCartItem_id: number | string,
  ) => {
    try {
      const shopingCartUpdated = shopingCartItems.filter(item => {
        if (item.shoppingCartItem_id !== shoppingCartItem_id) {
          return item;
        }
      });

      if (email) {
        await axios.delete(
          `${envs.API_DOMAIN}/api/v1/shopping-cart/delete/${shoppingCartItem_id}`,
          {withCredentials: true},
        );
        localStorage.setItem('shopingCart', JSON.stringify(shopingCartUpdated));
      } else {
        localStorage.setItem('shopingCart', JSON.stringify(shopingCartUpdated));
      }

      setShopingCartItems(shopingCartUpdated);
    } catch (error) {
      console.log(error);
    }
  };

  const [productQuantity, setProductQuantity] = useState(quantity);

  const updateCartQuantity = async (newQuantity: number) => {
    const updatedCart = shopingCartItems.map(item =>
      item.shoppingCartItem_id === shoppingCartItem_id
        ? {...item, quantity: newQuantity}
        : item,
    );

    try {
      const response = await axios.put(
        `${envs.API_DOMAIN}/api/v1/shopping-cart/update-quantity`,
        {
          shoppingCartItem_id: email ? shoppingCartItem_id : '',
          quantity: newQuantity,
          product_id,
        },
        {withCredentials: true},
      );

      if (response.status === 200) {
        setShopingCartItems(updatedCart);
        setProductQuantity(newQuantity);
        localStorage.setItem('shopingCart', JSON.stringify(updatedCart));
      }
    } catch (error: unknown) {
      if (
        typeof error === 'object' &&
        error !== null &&
        'response' in error &&
        typeof error.response === 'object' &&
        error.response !== null &&
        'data' in error.response &&
        typeof error.response.data === 'object' &&
        error.response.data !== null &&
        'error' in error.response.data &&
        typeof error.response.data.error === 'string'
      ) {
        toast.error(error.response.data.error);
      } else {
        console.log(error);
      }
    }
  };

  const handleProductQuantity = async (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    const buttonId = event.currentTarget.id;
    let newQuantity = productQuantity;

    if (buttonId === 'next') {
      newQuantity += 1;
    } else if (buttonId === 'previous' && productQuantity > 1) {
      newQuantity -= 1;
    } else {
      return; // No hacer nada si no se cumple ninguna condición
    }

    await updateCartQuantity(newQuantity);
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
              <div className="quantityContainer">
                <button onClick={e => handleProductQuantity(e)} id="previous">
                  <MinusIcon/>
                </button>
                <p>{productQuantity}</p>
                <button onClick={e => handleProductQuantity(e)} id="next">
                  <AddIcon/>
                </button>
              </div>
            </div>

            <div className="card-td price">
              <strong>Subtotal:</strong>
              <span>{` ${
                formatPrice(currency, price_AR*
                  productQuantity, price_MX*
                  productQuantity, price_RM*
                  productQuantity) 
              }`}</span>
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
              <p>{intention?.slice(0,22)}</p>
            </div>
            <div className="card-td">
              <strong>Cantidad:</strong>

              <div className="quantityContainer">
                <button onClick={e => handleProductQuantity(e)} id="previous">
                  <MinusIcon/>
                </button>
                <p>{productQuantity}</p>
                <button onClick={e => handleProductQuantity(e)} id="next">
                  <AddIcon/>
                </button>
              </div>
            </div>

            <div className="card-td price">
              <strong>Subtotal:</strong>
              <span>{` ${
                formatPrice(currency, price_AR*
                  productQuantity, price_MX*
                  productQuantity, price_RM*
                  productQuantity) 
              }`}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
