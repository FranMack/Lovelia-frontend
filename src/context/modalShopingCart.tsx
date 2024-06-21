import{ useState, createContext, ReactNode } from "react";

interface ShopingCartContextValue {
  menuOpen: boolean;
  togleMenu: () => void | null;
}

interface ShopingCartContextProviderProps {
  children: ReactNode;
}

const shopingCartContextDefaultValue: ShopingCartContextValue = {
  menuOpen: false,
  togleMenu: () => null,
};

export const ShopingCartContext = createContext(shopingCartContextDefaultValue);



const ShopingCartContextProvider = ({ children }: ShopingCartContextProviderProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const togleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const value: ShopingCartContextValue = {
    menuOpen: menuOpen,
    togleMenu: togleMenu,
  };

  return (
    <ShopingCartContext.Provider value={value}>{children}</ShopingCartContext.Provider>
  );
};

export default ShopingCartContextProvider;
