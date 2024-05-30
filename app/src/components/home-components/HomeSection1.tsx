import { LoveliaIcon } from "../../assets/images/icons/icons"
import { ButtonArrowDown } from "../../commons/ButtonArrowDown"
//import videoHome from "../../assets/videos/videoHome.mp4"
import { useRef,useEffect } from "react";

export function HomeSection1(){

  const videoRef = useRef<HTMLVideoElement>(null); 

  useEffect(() => {
    if (videoRef.current) {

      videoRef.current.playbackRate = 0.10; 
    }
  }, [videoRef]);

    return(
        <section className="home-front-page-container efectoReveal">
          {/*<video autoPlay muted loop ref={videoRef}>
        <source src={videoHome} type="video/mp4" />
        Your browser does not support the video tag.
    </video>*/}
        <div className="home-center-container">
         <LoveliaIcon/>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ad cum
            vero sunt a, temporibus perferendis aspernatur omnis tempora at
            deleniti rerum eius cupiditate laborum fugit exercitationem aliquam
            quam iste.
          </p>
    
        </div>
        <div className="auxiliar-container">
  <ButtonArrowDown title="Descubre más"/>
  </div>
      </section>
    )
}

