import { useState, createContext, ReactNode } from "react";



interface TalismanRockContextValue {
    optionRock: string;
    priceRock: number;
    setOptionRock:(option: string) => void;
    setPriceRock:(price: number) => void;
  }

  interface TalismanRockContextProviderProps {
    children: ReactNode;
  }


  const talismanRockContextDefaultValue: TalismanRockContextValue = {
    optionRock: "",
    priceRock: 0,
    setOptionRock: () => {},
    setPriceRock: () => {},
  
  };

  export const TalismanRockContext = createContext<TalismanRockContextValue>(talismanRockContextDefaultValue);


  const TalismanRockContextProvider = ({ children }: TalismanRockContextProviderProps) => {
    const [optionRock, setOptionRock] = useState<string>("");
    const [priceRock, setPriceRock] = useState<number>(0);
  
  
    const value: TalismanRockContextValue = {
        optionRock,
        priceRock,
        setOptionRock,
        setPriceRock,
    };
  
    return (
      <TalismanRockContext.Provider value={value}>{children}</TalismanRockContext.Provider>
    );
  };
  
  export default TalismanRockContextProvider;
  
