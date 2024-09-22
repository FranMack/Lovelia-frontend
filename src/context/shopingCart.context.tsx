import{ useState, createContext, ReactNode } from "react";

export interface ShopingCartItemOptions{
  id:number,
  product:string,
  price:number,
  image:string,
  consult:boolean,
  consultPrice:number
}

interface ShopingCartContextValue {
  shopingCartOpen: boolean;
  toggleMenu: () => void | null;
  shopingCartItems:ShopingCartItemOptions[];
  setShopingCartItems: (items:ShopingCartItemOptions[]) => void ;
}

interface ShopingCartContextProviderProps {
  children: ReactNode;
}

const shopingCartContextDefaultValue: ShopingCartContextValue = {
  shopingCartOpen: false,
  shopingCartItems:[],
  toggleMenu: () => {},
  setShopingCartItems: () => {},
}

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


