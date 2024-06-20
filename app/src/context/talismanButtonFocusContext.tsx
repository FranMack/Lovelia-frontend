import { useState, createContext, ReactNode } from "react";


interface TalismanButtonFocusContextValue {
    buttonFocusPosition: string;
    handleButtonFocus: (position:string) => void | null;
  }

  interface TalismanButtonFocusContextProviderProps {
    children: ReactNode;
  }


  const talismanButtonFocusDefaultValue: TalismanButtonFocusContextValue = {
    buttonFocusPosition: "false",
    handleButtonFocus: (position:string) => null,
  };
  

  export const TalismanButtonFocusContext = createContext(talismanButtonFocusDefaultValue);


  const TalismanButtonFocusContextProvider = ({ children }: TalismanButtonFocusContextProviderProps) => {
    const [focusPosition, setButttonFocusPosition] = useState("");
  
    const handleFocusPosition = (position:string) => {
        setButttonFocusPosition(position);
    };
  
    const value: TalismanButtonFocusContextValue = {
        buttonFocusPosition: focusPosition,
        handleButtonFocus: handleFocusPosition,
    };
  
    return (
      <TalismanButtonFocusContext.Provider value={value}>{children}</TalismanButtonFocusContext.Provider>
    );
  };
  
  export default TalismanButtonFocusContextProvider;
  
  