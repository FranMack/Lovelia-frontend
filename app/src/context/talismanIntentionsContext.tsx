import { useState, createContext, ReactNode } from "react";



interface TalismanIntentionsContextValue {
    optionIntention: string;
    priceIntention: number;
    setOptionIntention:(option: string) => void;
    setPriceIntention:(price: number) => void;
  }

  interface TalismanIntentionsContextProviderProps {
    children: ReactNode;
  }


  const talismanIntentionsContextDefaultValue: TalismanIntentionsContextValue = {
    optionIntention: "",
    priceIntention: 0,
    setOptionIntention: () => {},
    setPriceIntention: () => {},
  
  };

  export const TalismanIntentionsContext = createContext<TalismanIntentionsContextValue>(talismanIntentionsContextDefaultValue);


  const TalismanIntentionsContextProvider = ({ children }: TalismanIntentionsContextProviderProps) => {
    const [optionIntention, setOptionIntention] = useState<string>("");
    const [priceIntention, setPriceIntention] = useState<number>(0);
  
  
    const value: TalismanIntentionsContextValue = {
      optionIntention,
      priceIntention,
      setOptionIntention,
      setPriceIntention,
    };
  
    return (
      <TalismanIntentionsContext.Provider value={value}>{children}</TalismanIntentionsContext.Provider>
    );
  };
  
  export default TalismanIntentionsContextProvider;
  
