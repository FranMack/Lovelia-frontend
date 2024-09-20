import { useState, useRef, createContext, ReactNode } from "react";

interface MobileMenuContextValue {
  menuOpen: boolean;
  toggleMenu: () => void | null;
  menuRef: React.RefObject<HTMLDivElement> | null;
}

interface MobileMenuContextProviderProps {
  children: ReactNode;
}

const mobileMenuContextDefaultValue: MobileMenuContextValue = {
  menuOpen: false,
  toggleMenu: () => null,
  menuRef: null,
};

export const MobileMenuContext = createContext<MobileMenuContextValue>(mobileMenuContextDefaultValue);

export const MobileMenuContextProvider = ({ children }: MobileMenuContextProviderProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);  // Creamos la referencia con useRef



  const toggleMenu = () => {
    // Agregar o quitar la clase mobileMenuOpen
    const mobileMenu = menuRef.current;
   
    if (!menuOpen) {
      setMenuOpen(true);
      mobileMenu!.classList.add("mobileMenuOpen");
    } else {
      mobileMenu!.classList.remove("mobileMenuOpen");
      setMenuOpen(false);
    }
  };




  const value: MobileMenuContextValue = {
    menuOpen: menuOpen,
    toggleMenu: toggleMenu,
    menuRef: menuRef,  // Agregamos la referencia al valor del contexto
  };

  return (
    <MobileMenuContext.Provider value={value}>
      {children}
    </MobileMenuContext.Provider>
  );
};
