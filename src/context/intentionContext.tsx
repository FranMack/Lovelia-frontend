import{ useState, createContext, ReactNode, ChangeEvent } from "react";

interface IntentionContextValue {
  intention: string;
  setIntention:(intention:string)=>void
  handleIntention: (event: ChangeEvent<HTMLInputElement>) => void;
}

interface IntentionContextProviderProps {
    children: ReactNode;
  }


  const intentionContextDefaultValue: IntentionContextValue = {
    intention: "",
    setIntention:()=>{},
    handleIntention:()=>{},
  
  };

  export const IntentionContext = createContext<IntentionContextValue>(
    intentionContextDefaultValue
  );

  export const IntentionContextProvider = ({ children }: IntentionContextProviderProps) => {
    const [intention, setIntention] = useState<string>("");
   
    const handleIntention = (event: ChangeEvent<HTMLInputElement>) => {
        setIntention(event.target.value);
      };
  
    const value: IntentionContextValue = {
        intention,
        setIntention,
        handleIntention,
   
        
    };
  
    return <IntentionContext.Provider value={value}>{children}</IntentionContext.Provider>;
  };
  

