import axios from 'axios';
import {createContext, ReactNode, useState} from 'react';
import {envs} from '../config';

export interface ShopingCartItemOptions {
  shoppingCartItem_id: number | string;
  product_id: string;
  quantity: number;
  model: string;
  metal?: string;
  chain?: string;
  intention?: string;
  image: string;
  price: number;
  rock?: string;
}

interface ShopingCartContextValue {
  shopingCartOpen: boolean;
  shopingCartItems: ShopingCartItemOptions[];
  toggleMenu: () => void | null;
  setShopingCartItems: (items: ShopingCartItemOptions[]) => void;
  refreshShoppingCart: () => void;
  cleanShoppingCart: (email: string) => void;
  addItemToCart: (product: ShopingCartItemOptions) => void;
}

interface ShopingCartContextProviderProps {
  children: ReactNode;
}

export const shopingCartContextDefaultValue: ShopingCartContextValue = {
  shopingCartOpen: false,
  shopingCartItems: [],
  toggleMenu: () => null,
  setShopingCartItems: () => {},
  refreshShoppingCart: () => {},
  cleanShoppingCart: () => {},
  addItemToCart: () => {},
};

export const ShopingCartContext = createContext(shopingCartContextDefaultValue);

export const ShopingCartContextProvider = ({
  children,
}: ShopingCartContextProviderProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [shopingCartItems, setShopingCartItems] = useState<
    ShopingCartItemOptions[]
  >([]);

  const refreshShoppingCart = async () => {
    axios
      .get(`${envs.API_DOMAIN}/api/v1/shopping-cart/list`, {
        withCredentials: true,
      })
      .then(response => {
        setShopingCartItems(response.data);
      
        localStorage.setItem('shopingCart', JSON.stringify(response.data));
      })
      .catch(error => {
        console.log(error);
      });
  };

  const cleanShoppingCart = async (email: string) => {
    if (!email) {
      const shopingCartJSON = localStorage.getItem('shopingCart') || '[]';

      setShopingCartItems(JSON.parse(shopingCartJSON));
      return;
    }
    axios
      .delete(`${envs.API_DOMAIN}/api/v1/shopping-cart/clean`, {
        withCredentials: true,
      })
      .catch(error => {
        console.log(error);
      });
  };

  const addItemToCart = (product: ShopingCartItemOptions) => {
    if (
      shopingCartItems.some(item => {
        return (
          item.product_id === product.product_id &&
          item.intention === product.intention
        );
      })
    ) {
      const shoppingCart = shopingCartItems.map(item => {
        if (item.product_id === product.product_id) {
          return {...item, quantity: item.quantity + 1};
        }
        return item;
      });

      setShopingCartItems(shoppingCart);
    } else {
      const shopingCartUpdate = [product, ...shopingCartItems];

      setShopingCartItems(shopingCartUpdate);
    }
  };

  const togleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const value: ShopingCartContextValue = {
    shopingCartOpen: menuOpen,
    toggleMenu: togleMenu,
    shopingCartItems: shopingCartItems,
    setShopingCartItems: setShopingCartItems,
    refreshShoppingCart: refreshShoppingCart,
    cleanShoppingCart: cleanShoppingCart,
    addItemToCart: addItemToCart,
  };

  return (
    <ShopingCartContext.Provider value={value}>
      {children}
    </ShopingCartContext.Provider>
  );
};
