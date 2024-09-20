import { ReactNode, createContext, useState } from "react";


interface TalismanAudioContextValue {
    trackIndex: number | null;
    playing:boolean,
    audioType:string,
    trackDuration:number,
    seconds:number,
    volumeBarVisibility:boolean,
    volume:number
    setTrackIndex: (index: number) => void,
    handlePlaying:(playing:boolean)=>void,
    setAudioType: (index: string) => void,
    setTrackDuration: (time: number) => void,
    setSeconds: (time: number) => void,
    handleVolumeBarVisibility:()=>void
    setVolume:(volume:number)=>void

  }

  interface TalismanAudioContextProviderProps {
    children: ReactNode;
  }
  

  const talismanAudioContextDefaultValue: TalismanAudioContextValue = {

    trackIndex:0,
    playing:false,
    audioType:"",
    trackDuration:0,
    seconds:0,
    volumeBarVisibility:false,
    volume:1,
    setTrackIndex:()=>{},
    handlePlaying:()=>{},
    setAudioType:()=>{},
    setTrackDuration:()=>{},
    setSeconds:()=>{},
    handleVolumeBarVisibility:()=>{},
    setVolume:()=>{}


  };

  export const TalismanAudioContext = createContext<TalismanAudioContextValue>(
    talismanAudioContextDefaultValue
  );


  export const TalismanAudioContextProvider = ({ children }: TalismanAudioContextProviderProps) => {
   const [trackIndex,setTrackIndex]=useState<number>(0)
   const [playing,setPlaying]=useState<boolean>(false)
   const [audioType,setAudioType]=useState<string>("")
   const [trackDuration,setTrackDuration]=useState<number>(0)
   const [seconds,setSeconds]=useState<number>(0)
   const [volumeBarVisibility,setvolumeBarVisibility]=useState<boolean>(false)
   const [volume,setVolume]=useState<number>(1)

  const handleVolumeBarVisibility=()=>{
    setvolumeBarVisibility(!volumeBarVisibility)
  }
  const handlePlaying=(playing:boolean)=>{
    setPlaying(playing)
  }
  

    const value: TalismanAudioContextValue = {
        trackIndex,
        playing,
        audioType,
        trackDuration,
        seconds,
        volumeBarVisibility,
        volume,
        setTrackIndex,
        handlePlaying,
        setAudioType,
        setTrackDuration,
        setSeconds,
        handleVolumeBarVisibility,
        setVolume
    };
  
    return <TalismanAudioContext.Provider value={value}>{children}</TalismanAudioContext.Provider>;
  };
  
  