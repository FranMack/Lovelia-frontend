import { useRef,useEffect } from "react";
import videoHome from "../assets/videos/videoHome.mp4"
export function Contacto(){

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
                <h3>Habla con nosotros</h3>
                <h6>Completa el formulario para enviar tu consulta.</h6>
                <input type="text" placeholder="Nombre" />
                <input type="text" placeholder="Asunto" />
                <input type="email" placeholder="Dirección de correo electrónico" />
                <textarea placeholder="Escribe tu mensaje acá"/>
                <div>
                <p>¿Has olvidado tu contraseña?</p>
                <p>Si aún no tienes una cuenta, <strong>Haz click aquí.</strong></p>
                </div>
                <button>ENVIAR</button>
            </form>
        </section>
    )
}