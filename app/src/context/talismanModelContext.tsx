import { useState, createContext, ReactNode } from "react";



interface TalismanModelContextValue {
    optionModel: string;
    priceModel: number;
    optionMaterial: string;
    priceMaterial: number;
    optionChain: string;
    priceChain: number;
    optionRock: string;
    priceRock: number;
    optionIntention: string;
    priceIntention: number;
    setOptionModel:(option: string) => void;
    setPriceModel:(price: number) => void;
    setOptionMaterial: (option: string) => void;
    setPriceMaterial: (price: number) => void;
    setOptioChain:(option: string) => void;
    setPriceChain:(price: number) => void;
    setOptionRock:(option: string) => void;
    setPriceRock:(price: number) => void;
    setOptionIntention:(option: string) => void;
    setPriceIntention:(price: number) => void;
  }

  interface TalismanModelContextProviderProps {
    children: ReactNode;
  }


  const talismanModelContextDefaultValue: TalismanModelContextValue = {
    optionModel: "",
    priceModel: 0,
    optionMaterial: "",
    priceMaterial: 0,
    optionChain: "",
    priceChain: 0,
    optionRock: "",
    priceRock: 0,
    optionIntention: "",
    priceIntention: 0,
    setOptionModel: () => {},
    setPriceModel: () => {},
    setOptionMaterial: () => {},
    setPriceMaterial: () => {},
    setOptioChain: () => {},
    setPriceChain: () => {},
    setOptionRock: () => {},
    setPriceRock: () => {},
    setOptionIntention: () => {},
    setPriceIntention: () => {},
  
  };

  export const TalismanModelContext = createContext<TalismanModelContextValue>(talismanModelContextDefaultValue);


  const TalismanModelContextProvider = ({ children }: TalismanModelContextProviderProps) => {
    const [optionModel, setOptionModel] = useState<string>("");
    const [priceModel, setPriceModel] = useState<number>(0);
    const [optionMaterial, setOptionMaterial] = useState<string>("");
    const [priceMaterial, setPriceMaterial] = useState<number>(0);
    const [optionChain, setOptioChain] = useState<string>("");
    const [priceChain, setPriceChain] = useState<number>(0);
    const [optionRock, setOptionRock] = useState<string>("");
    const [priceRock, setPriceRock] = useState<number>(0);
    const [optionIntention, setOptionIntention] = useState<string>("");
    const [priceIntention, setPriceIntention] = useState<number>(0);
  
  
    const value: TalismanModelContextValue = {
        optionModel,
        priceModel,
        optionMaterial,
        priceMaterial,
        optionChain,
        priceChain,
        optionRock,
        priceRock,
        optionIntention,
        priceIntention,
        setOptionModel,
        setPriceModel,
        setOptionMaterial,
        setPriceMaterial,
        setOptioChain,
        setPriceChain,
        setOptionRock,
        setPriceRock,
        setOptionIntention,
        setPriceIntention,
    };
  
    return (
      <TalismanModelContext.Provider value={value}>{children}</TalismanModelContext.Provider>
    );
  };
  
  export default TalismanModelContextProvider;
  
