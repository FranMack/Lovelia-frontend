import { useState, createContext, ReactNode } from "react";



interface TalismanChainContextValue {
    optionChain: string;
    priceChain: number;
    setOptioChain:(option: string) => void;
    setPriceChain:(price: number) => void;
  }

  interface TalismanChainContextProviderProps {
    children: ReactNode;
  }


  const talismanChainContextDefaultValue: TalismanChainContextValue = {
    optionChain: "",
    priceChain: 0,
    setOptioChain: () => {},
    setPriceChain: () => {},
  
  };

  export const TalismanChainContext = createContext<TalismanChainContextValue>(talismanChainContextDefaultValue);


  const TalismanChainContextProvider = ({ children }: TalismanChainContextProviderProps) => {
    const [optionChain, setOptioChain] = useState<string>("");
    const [priceChain, setPriceChain] = useState<number>(0);
  
  
    const value: TalismanChainContextValue = {
        optionChain,
        priceChain,
        setOptioChain,
        setPriceChain,
    };
  
    return (
      <TalismanChainContext.Provider value={value}>{children}</TalismanChainContext.Provider>
    );
  };
  
  export default TalismanChainContextProvider;
  
