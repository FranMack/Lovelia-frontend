import {ReactNode, createContext, useState} from 'react';

interface TalismanModelContextValue {
  optionModel: string;

  optionMetal: string;

  optionChain: string;

  optionRock: string;

  optionIntention: string;

  setOptionModel: (option: string) => void;

  setOptionMetal: (option: string) => void;

  setOptioChain: (option: string) => void;

  setOptionRock: (option: string) => void;

  setOptionIntention: (option: string) => void;
}

interface TalismanModelContextProviderProps {
  children: ReactNode;
}

const talismanModelContextDefaultValue: TalismanModelContextValue = {
  optionModel: '',

  optionMetal: '',

  optionChain: '',

  optionRock: '',

  optionIntention: '',

  setOptionModel: () => {},

  setOptionMetal: () => {},

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
  const [optionMetal, setOptionMetal] = useState<string>('');
  const [optionChain, setOptioChain] = useState<string>('');
  const [optionRock, setOptionRock] = useState<string>('');
  const [optionIntention, setOptionIntention] = useState<string>('');

  const value: TalismanModelContextValue = {
    optionModel,
    optionMetal,
    optionChain,
    optionRock,
    optionIntention,
    setOptionModel,
    setOptionMetal,
    setOptionIntention,
    setOptioChain,
    setOptionRock,
  };

  return (
    <TalismanModelContext.Provider value={value}>
      {children}
    </TalismanModelContext.Provider>
  );
};
