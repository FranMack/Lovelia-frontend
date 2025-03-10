import {useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {CloseIcon} from '../../assets/icons/icons';
import {CurrencyContext} from '../../context/currencyContext';
import {ShopingCartContext} from '../../context/modalShopingCartContext';
import {numberOfProducts} from '../../utils/numberOfProducts';
import {Button} from './Button';
import {ShopingCartCard} from './ShopingCartCard';
import { totalPrice } from '../../store/helpers/priceFormater';

export function ShopingCart() {
  const navigate = useNavigate();

  const {toggleMenu, shopingCartItems} = useContext(ShopingCartContext);

  const {currency} = useContext(CurrencyContext);



  const linkToCheckOut = () => {
    if (shopingCartItems.length > 0) {
      navigate('checkout/store');
      toggleMenu();
    } else {
      toast.warning('No hay productos en el carrito de compra');
      return;
    }
  };

  const linkTo = (path: string) => {
    navigate(path);
    toggleMenu();
  };

  return (
    <div className="shoping-cart-conteiner shopingCartReveal">
      <div className="shoping-cart-top-container">
        <div className="shoping-cart-title">
          <h4>
            Carrito de compras
            {shopingCartItems.length > 0 &&
              ` (${numberOfProducts(shopingCartItems)})`}
          </h4>
          <CloseIcon onClick={toggleMenu} />
        </div>
      </div>

      <div className="shoping-cart-center-container">
        {shopingCartItems.map(item => {
          return <ShopingCartCard key={item.shoppingCartItem_id} {...item} />;
        })}
      </div>

      <div className="shoping-cart-button-container">
        <div className="termsAndConditions-container">
          <p>
            {' '}
            <span onClick={() => linkTo('/terminos-y-condiciones')}>
              Términos y condiciones
            </span>{' '}
          </p>
          <hr />
        </div>

        <div className="shoping-cart-button-price-container">
          <p>Total estimado</p>
          <p>${totalPrice(currency,shopingCartItems)}</p>
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
