import { useState, createContext, ReactNode } from "react";



interface TalismanModelContextValue {
    optionModel: string;
    priceModel: number;
    setOptionModel:(option: string) => void;
    setPriceModel:(price: number) => void;
  }

  interface TalismanModelContextProviderProps {
    children: ReactNode;
  }


  const talismanModelContextDefaultValue: TalismanModelContextValue = {
    optionModel: "",
    priceModel: 0,
    setOptionModel: () => {},
    setPriceModel: () => {},
  
  };

  export const TalismanModelContext = createContext<TalismanModelContextValue>(talismanModelContextDefaultValue);


  const TalismanModelContextProvider = ({ children }: TalismanModelContextProviderProps) => {
    const [optionModel, setOptionModel] = useState<string>("");
    const [priceModel, setPriceModel] = useState<number>(0);
  
  
    const value: TalismanModelContextValue = {
        optionModel,
        priceModel,
        setOptionModel,
        setPriceModel,
    };
  
    return (
      <TalismanModelContext.Provider value={value}>{children}</TalismanModelContext.Provider>
    );
  };
  
  export default TalismanModelContextProvider;
  
