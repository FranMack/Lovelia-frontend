import { useRef,useEffect } from "react";
import videoHome from "../assets/videos/videoHome.mp4"
export function Login(){

    const videoRef = useRef<HTMLVideoElement>(null); 

    useEffect(() => {
      if (videoRef.current) {
  
        videoRef.current.playbackRate = 0.4; 
      }
    }, [videoRef]);

    return(
        <section className="login-container">
                <video autoPlay muted loop ref={videoRef}>
        <source src={videoHome} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
            <form className="login-form" action="">
                <h3>Mi cuenta</h3>
                <h6>Si ya estás registrado en lovelia, inicia sesión aquí:</h6>
                <input type="email" placeholder="Dirección de correo electrónico" />
                <input type="password" placeholder="Contraseña" />
                <div>
                <p>¿Has olvidado tu contraseña?</p>
                <p>Si aún no tienes una cuenta, <strong>Haz click aquí.</strong></p>
                </div>
                <button>ACCEDER</button>
            </form>
        </section>
    )
}