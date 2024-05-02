import { useRef, useEffect } from "react";
import videoHome from "../assets/videos/videoHome.mp4";
export function Register() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.4;
    }
  }, [videoRef]);

  return (
    <section className="login-container">
      <video autoPlay muted loop ref={videoRef}>
        <source src={videoHome} type="video/mp4" />
        Ingresa tus datos para registrarte en lovelia..
      </video>
      <form className="login-form" action="">
        <h3>Crea tu cuenta</h3>
        <h6>Si ya estás registrado en lovelia, inicia sesión aquí:</h6>
        <input type="text" placeholder="Nombre" />
        <input type="text" placeholder="Apellido" />
        <input type="email" placeholder="Dirección de correo electrónico" />
        <input type="password" placeholder="Contraseña" />
        <input type="password" placeholder="Confirmar contraseña" />
        <div>
          <div className="login-recibir-info-container">
          <input type="checkbox" />
          <p>
            También me gustaría recibir información promocional sobre los
            productos lovelia.
          </p>
          </div>
        
          <p>
          ¿Ya tienes una cuenta?, <strong>Haz click aquí.</strong>
          </p>
        </div>
        <button>ACCEDER</button>
      </form>
    </section>
  );
}
