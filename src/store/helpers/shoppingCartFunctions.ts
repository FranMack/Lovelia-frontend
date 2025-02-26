import axios from 'axios';
import {envs} from '../../config';
import {ShopingCartItemOptions} from '../../context';

type ShoppingCartProps=Omit<
ShopingCartItemOptions,
'price_AR'|'price_MX'| 'price_RM'| 'shoppingCartItem_id' | 'product_id'
>

//usario logueado => agrega producto al carrito y se guarda en DB
export const addProductToShoppingCartDB = async (
  product: ShoppingCartProps,
) => {
  try {
    const newProduct = await axios.post(
      `${envs.API_DOMAIN}/api/v1/shopping-cart/add`,
      {...product},
      {withCredentials: true},
    );

    const cart = JSON.parse(localStorage.getItem('shopingCart') || '[]');
    const updatedCart = [{...newProduct.data, image: product.image}, ...cart];
    localStorage.setItem('shopingCart', JSON.stringify(updatedCart));
    return {...newProduct.data, image: product.image};
  } catch (error) {
    console.log(error);
  }
};

//usario NO logueado => agrega producto al carrito, se mantiene en localstorage

export const addProductToShoppingCart = async (
  product:ShoppingCartProps,
) => {
  try {
    const newProduct = await axios.post(
      `${envs.API_DOMAIN}/api/v1/shopping-cart/userNotLogged/add`,
      {...product},
    );

    console.log('newProduct', newProduct);

    const cart = JSON.parse(localStorage.getItem('shopingCart') || '[]');

    if (
      cart.some((product: ShopingCartItemOptions) => {
        return product.product_id === newProduct.data.product_id;
      })
    ) {
      const updatedCart = cart.map((product: ShopingCartItemOptions) => {
        if (product.product_id === newProduct.data.product_id) {
          return {
            ...product,
            quantity: product.quantity + 1,
          };
        } else {
          return product;
        }
      });

      localStorage.setItem('shopingCart', JSON.stringify(updatedCart));

      return {...newProduct.data, image: product.image};
    }

    const shoppingCartItem_id = Math.round(
      Math.random() * 100000000,
    ).toString();
    const updatedCart = [
      {...newProduct.data, image: product.image, shoppingCartItem_id},
      ...cart,
    ];
    localStorage.setItem('shopingCart', JSON.stringify(updatedCart));

    return {...newProduct.data, image: product.image, shoppingCartItem_id};
  } catch (error) {
    console.log(error);
  }
};
