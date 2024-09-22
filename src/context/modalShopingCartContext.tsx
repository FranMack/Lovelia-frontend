import{ useState, createContext, ReactNode } from "react";

interface ShopingCartContextValue {
  shopingCartOpen: boolean;
  toggleMenu: () => void | null;
}

interface ShopingCartContextProviderProps {
  children: ReactNode;
}

const shopingCartContextDefaultValue: ShopingCartContextValue = {
  shopingCartOpen: false,
  toggleMenu: () => null,
};

export const ShopingCartContext = createContext(shopingCartContextDefaultValue);



export const ShopingCartContextProvider = ({ children }: ShopingCartContextProviderProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const togleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const value: ShopingCartContextValue = {
    shopingCartOpen: menuOpen,
    toggleMenu: togleMenu,
  };

  return (
    <ShopingCartContext.Provider value={value}>{children}</ShopingCartContext.Provider>
  );
};


