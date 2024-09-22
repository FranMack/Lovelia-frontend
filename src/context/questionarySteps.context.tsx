import { ReactNode, createContext, useState } from "react";

interface StepContextValue {
  step: number;
  nextStep: () => void;
  previousStep: () => void;
  resetStep: () => void;
}

interface UserContextProviderProps {
  children: ReactNode;
}

const stepContextDefaultValue: StepContextValue = {
  step: 0,
  nextStep: () => {},
  previousStep: () => {},
  resetStep: () => {},
};

export const StepContext = createContext<StepContextValue>(
  stepContextDefaultValue
);

export const StepContextProvider = ({ children }: UserContextProviderProps) => {
  const [step, setStep] = useState<number>(0);

  const nextStep = () => {
    if (step < 11) {
      setStep(step + 1);
    }
  };
  const previousStep = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const resetStep = () => {
    setStep(0);
  };

  const value: StepContextValue = {
    step,
    nextStep,
    previousStep,
    resetStep,
  };

  return <StepContext.Provider value={value}>{children}</StepContext.Provider>;
};
