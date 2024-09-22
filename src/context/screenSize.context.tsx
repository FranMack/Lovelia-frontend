import { useState, createContext, ReactNode } from "react";

interface ScreenSizeContextValue {
  screenWidth: number;
  setScreenWidth: (width: number) => void | null;
}

interface ScreenSizeContextProviderProps {
  children: ReactNode;
}

const screenSizeContextDefaultValue: ScreenSizeContextValue = {
  screenWidth: window.innerWidth,
  setScreenWidth: () => {},
};

export const ScreenSizeContext = createContext<ScreenSizeContextValue>(
  screenSizeContextDefaultValue
);

export const ScreenSizeContextProvider = ({
  children,
}: ScreenSizeContextProviderProps) => {
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);

  const value: ScreenSizeContextValue = {
    screenWidth,
    setScreenWidth,
  };

  return (
    <ScreenSizeContext.Provider value={value}>
      {children}
    </ScreenSizeContext.Provider>
  );
};
