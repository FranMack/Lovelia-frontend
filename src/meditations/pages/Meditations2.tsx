import background from "../assets/meditaciones_portada2.webp";
import { ButtonArrowRight } from "../../ui/components";
import { useNavigate } from "react-router";
import { LazyImage } from "../../ui/components";

export const Meditations2 = () => {

  const navigate=useNavigate();
  const linkToBlogNote=()=>{
    navigate("/blog/nota/2")
  }
  return (
    <section className="section2-meditations-container">
      <LazyImage src={background} alt="activa tu talismán" />

      <div className="section2-meditations-text-container">
        <h3>¿ PARA QUÉ MEDITAMOS ?</h3>
        <p>
        Cuando desarrollamos el hábito de estar presentes conectamos con nuestro ser interior, fomentando el bienestar físico, mental y emocional, para alcanzar un estado de conciencia expandida, experimentando una forma de percepción más amplia y profunda que la habitual, lo que nos facilita conectar con uno mismo, con los demás y con el entorno.
        </p>
        <ButtonArrowRight text="VER MÁS" color="#662A80" onClick={linkToBlogNote}/>
      </div>
    </section>
  );
};
