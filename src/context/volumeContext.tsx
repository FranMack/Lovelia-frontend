import{ useState, createContext, ReactNode, ChangeEvent } from "react";

interface VolumeContextValue {
  volume: number;
  setVolume: (volume: number) => void;
  handleVolumeChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

interface VolumeContextProviderProps {
    children: ReactNode;
  }

  const volumeContextDefaultValue: VolumeContextValue = {
    volume: 1,
    setVolume: () => {},
    handleVolumeChange:()=>{}
  
  };

  export const VolumeContext = createContext<VolumeContextValue>(
    volumeContextDefaultValue
  );



  const VolumeContextProvider = ({ children }: VolumeContextProviderProps) => {
    const [volume, setVolume] = useState<number>(1);
   
    const handleVolumeChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newVolume = parseFloat(event.target.value);
        setVolume(newVolume);
      };
  
    const value: VolumeContextValue = {
        volume,
        setVolume,
        handleVolumeChange
        
    };
  
    return <VolumeContext.Provider value={value}>{children}</VolumeContext.Provider>;
  };
  
  export default VolumeContextProvider;
  