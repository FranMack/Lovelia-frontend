import { useState, createContext, ReactNode } from "react";

interface ActivationStepsContextValue {
  step: string;
  setStep: (step: string) => void;
}

interface ActivationStepsContextProviderProps {
  children: ReactNode;
}

const activationStepsContextDefaultValue: ActivationStepsContextValue = {
  step: "Paso 1",
  setStep: () => {},
};

export const ActivationStepsContex = createContext<ActivationStepsContextValue>(
  activationStepsContextDefaultValue
);

export const ActivationStepsContextProvider = ({
  children,
}: ActivationStepsContextProviderProps) => {
  const [step, setStep] = useState<string>("Paso 1");

  const value: ActivationStepsContextValue = {
    step,
    setStep,
  };

  return (
    <ActivationStepsContex.Provider value={value}>
      {children}
    </ActivationStepsContex.Provider>
  );
};
