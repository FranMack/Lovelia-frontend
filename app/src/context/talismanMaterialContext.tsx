import { useState, createContext, ReactNode } from "react";

interface TalismanMaterialContextValue {
  optionMaterial: string;
  priceMaterial: number;
  setOptionMaterial: (option: string) => void;
  setPriceMaterial: (price: number) => void;
}

interface TalismanModelContextProviderProps {
  children: ReactNode;
}

const talismanMaterialContextDefaultValue: TalismanMaterialContextValue = {
  optionMaterial: "",
  priceMaterial: 0,
  setOptionMaterial: () => {},
  setPriceMaterial: () => {},
};

export const TalismanMaterialContext =
  createContext<TalismanMaterialContextValue>(
    talismanMaterialContextDefaultValue
  );

const TalismanMaterialContextProvider = ({
  children,
}: TalismanModelContextProviderProps) => {
  const [optionMaterial, setOptionMaterial] = useState<string>("");
  const [priceMaterial, setPriceMaterial] = useState<number>(0);

  const value: TalismanMaterialContextValue = {
    optionMaterial,
    priceMaterial,
    setOptionMaterial,
    setPriceMaterial,
  };

  return (
    <TalismanMaterialContext.Provider value={value}>
      {children}
    </TalismanMaterialContext.Provider>
  );
};

export default TalismanMaterialContextProvider;
