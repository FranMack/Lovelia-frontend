import {createContext, ReactNode, useState} from 'react';

interface CurrencyContextValue {
  currency: string;
  handleCurrency:(selectCurrency: string) => void;
}

interface CurrencyContextProviderProps {
  children: ReactNode;
}

const currencyContextDefaultValue: CurrencyContextValue = {
  currency: '',
  handleCurrency: () => {},
};

export const CurrencyContext = createContext<CurrencyContextValue>(
  currencyContextDefaultValue,
);

export const CurrencyContextProvider = ({
  children,
}: CurrencyContextProviderProps) => {
  const [currency, setCurrency] = useState<string>(localStorage.getItem("selected-current")||"");

  const handleCurrency=(selectCurrency: string)=>{
    localStorage.setItem("selected-current",selectCurrency)
    setCurrency(selectCurrency)
  }

  const value: CurrencyContextValue = {
    currency,
    handleCurrency
  };

  return (
    <CurrencyContext.Provider value={value}>
      {children}
    </CurrencyContext.Provider>
  );
};
