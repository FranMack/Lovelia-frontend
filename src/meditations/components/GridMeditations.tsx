import { useRef, useState } from "react";
import { PlayIcon,StopIcon } from "../../assets/icons/icons";
import { LazyImage } from "../../ui/components";

interface MeditationOptions {
  color: string;
  title: string;
  meditationURL:string
  image?: string;
}

interface Meditations {
  meditations: MeditationOptions[];
}

export const GridMeditations = ({ meditations }: Meditations) => {

  const soundRefs = useRef<HTMLAudioElement[]>([]);


  const[ index,setIndex]=useState(0)
  const [isPlaying,setIsPlaying]=useState(false)

  const playMeditation=(index:number)=>{

    if(soundRefs.current.length>0){

      soundRefs.current.forEach((audio) => {
        
        audio.pause(),
        audio.currentTime = 0
          audio.addEventListener("ended", () => {
            audio.pause()
            audio.currentTime = 0
          });
      });


      soundRefs.current[index].play()
      setIsPlaying(true)
      setIndex(index)
      return
    }

  }

  const stopMeditation= ()=>{
    if(soundRefs.current.length>0){
      setIsPlaying(false)
      soundRefs.current.forEach((audio) => {
        audio.pause()
        audio.currentTime = 0
      });
    }
  }




  return (
    <div className="grid-meditations-container">
    
      {meditations.map((item, i) => {
        return (
          <div key={i} className="grid-meditations-item">
            <div
              className="grid-meditations-color-container"
              style={{ backgroundColor: item.color }}
            >
              {item.image && <LazyImage src={item.image} alt="elipses" />}
              <div className="icon-container" >
           {(isPlaying && index===i) ? <StopIcon onClick={stopMeditation}/>: <PlayIcon onClick={()=>playMeditation(i)} />}
              </div>
            </div>
                <audio preload="metadata"  src={item.meditationURL} ref={(audioElement) => (soundRefs.current[i] = audioElement!)} />
            <p>{item.title}</p>
          </div>
        );
      })}
    </div>
  );
};
