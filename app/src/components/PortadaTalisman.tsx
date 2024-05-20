
import { Button } from "../commons/Button"
import { ButtonArrowDown } from "../commons/ButtonArrowDown"
import videoHome from "../assets/videos/videoHome.mp4"
import { useRef,useEffect } from "react"

export interface PortadaTalismanOptions{
    title:string,
    description:string[],
    image:string
    button?:string,
    onClick?:()=>void
}



export function PortadaTalisman({title,description,button,image,onClick}:PortadaTalismanOptions){

    const videoRef = useRef<HTMLVideoElement>(null); 

    useEffect(() => {
      if (videoRef.current) {
  
        videoRef.current.playbackRate = 0.4; 
      }
    }, [videoRef]);

    return(<>
    <section className="portadaTalisman-container">
    <video autoPlay muted loop ref={videoRef}>
        <source src={videoHome} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    
     <div className="portadaTalisman-center-container">
     
        <div className="portadaTalisman-center-info-container">
            <h4>{title}</h4>
            {description.map((item,i)=>{
                return(<p key={i}>{item}</p>)
            })}
            
            {button && <Button text={button} onClick={onClick}/>}
        </div>
        <div className="portadaTalisman-center-image-container">
            <img src={image} alt="Tallisman-fisico" />
        </div>

      </div>
      <div className="auxiliar-container">
        <ButtonArrowDown title="Descubre más"/>
        </div>
      </section>
    </>)
}