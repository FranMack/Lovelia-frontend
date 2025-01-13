import axios from "axios";
import { envs } from "../../config";
import { ShopingCartItemOptions } from "../../context";



//usario logueado => agrega producto al carrito y se guarda en DB
export const addProductToShoppingCartDB = async (
    product: Omit<ShopingCartItemOptions, 'price' | 'shoppingCartItem_id' |'product_id'>,
  ) => {
    try {
      const newProduct = await axios.post(
        `${envs.API_DOMAIN}/api/v1/shopping-cart/add`,
        {...product},
        {withCredentials: true},
      );
      return {...newProduct.data, image: product.image};
    } catch (error) {
      console.log(error);
    }
  };


  //usario NO logueado => agrega producto al carrito, se mantiene en localstorage
  
  export const addProductToShoppingCart = async (
    product: Omit<ShopingCartItemOptions, 'price' | 'shoppingCartItem_id'|'product_id'>,
  ) => {
    try {
      const newProduct = await axios.post(
        `${envs.API_DOMAIN}/api/v1/shopping-cart/userNotLogged/add`,
        {...product},
      );
  
      const shoppingCartItem_id=Math.round(Math.random()*100000).toString()
      const cart = JSON.parse(localStorage.getItem('shopingCart') || '[]');
      const updatedCart = [{...newProduct.data, image: product.image,shoppingCartItem_id}, ...cart];
      localStorage.setItem('shopingCart', JSON.stringify(updatedCart));
  
      return {...newProduct.data, image: product.image};
    } catch (error) {
      console.log(error);
    }
  };