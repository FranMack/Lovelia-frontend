import{ useState, createContext, ReactNode } from "react";



export interface ShopingCartItemOptions {
  id: number;
  product: string;
  quantity: number;
  model: string;
  material: string;
  chain: string;
  intention: string;
  image: string;
  price: number;
}

interface ShopingCartContextValue {
  shopingCartOpen: boolean;
  shopingCartItems:ShopingCartItemOptions[],
  toggleMenu: () => void | null;
  setShopingCartItems: (items:ShopingCartItemOptions[]) => void ;
}

interface ShopingCartContextProviderProps {
  children: ReactNode;
}

const shopingCartContextDefaultValue: ShopingCartContextValue = {
  shopingCartOpen: false,
  shopingCartItems:[],
  toggleMenu: () => null,
  setShopingCartItems: () => {},
};

export const ShopingCartContext = createContext(shopingCartContextDefaultValue);



export const ShopingCartContextProvider = ({ children }: ShopingCartContextProviderProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [shopingCartItems, setShopingCartItems] = useState<ShopingCartItemOptions[]>(
    []
  );

  const togleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const value: ShopingCartContextValue = {
    shopingCartOpen: menuOpen,
    toggleMenu: togleMenu,
    shopingCartItems:shopingCartItems,
    setShopingCartItems:setShopingCartItems
  };

  return (
    <ShopingCartContext.Provider value={value}>{children}</ShopingCartContext.Provider>
  );
};


