import {ReactNode, createContext, useState} from 'react';

interface TalismanModelContextValue {
  optionModel: string;

  optionMaterial: string;

  optionChain: string;

  optionRock: string;

  optionIntention: string;

  setOptionModel: (option: string) => void;

  setOptionMaterial: (option: string) => void;

  setOptioChain: (option: string) => void;

  setOptionRock: (option: string) => void;

  setOptionIntention: (option: string) => void;
}

interface TalismanModelContextProviderProps {
  children: ReactNode;
}

const talismanModelContextDefaultValue: TalismanModelContextValue = {
  optionModel: '',

  optionMaterial: '',

  optionChain: '',

  optionRock: '',

  optionIntention: '',

  setOptionModel: () => {},

  setOptionMaterial: () => {},

  setOptioChain: () => {},

  setOptionRock: () => {},

  setOptionIntention: () => {},
};

export const TalismanModelContext = createContext<TalismanModelContextValue>(
  talismanModelContextDefaultValue,
);

export const TalismanModelContextProvider = ({
  children,
}: TalismanModelContextProviderProps) => {
  const [optionModel, setOptionModel] = useState<string>('');
  const [optionMaterial, setOptionMaterial] = useState<string>('');
  const [optionChain, setOptioChain] = useState<string>('');
  const [optionRock, setOptionRock] = useState<string>('');
  const [optionIntention, setOptionIntention] = useState<string>('');


  const value: TalismanModelContextValue = {
    optionModel,
    optionMaterial,
    optionChain,
    optionRock,
    optionIntention,
    setOptionModel,
    setOptionMaterial,
    setOptionIntention,
    setOptioChain,
    setOptionRock
  };

  return (
    <TalismanModelContext.Provider value={value}>
      {children}
    </TalismanModelContext.Provider>
  );
};
