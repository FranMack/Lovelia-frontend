import carrousel1 from "../assets/carrousel1.png";
import carrousel2 from "../assets/carrousel2.png";
import purpleBackground from "../assets/purpleBackground.png"
import { ArrowLeft } from "../../assets/icons";
import { RefObject, useState } from "react";
import { useNavigate } from "react-router-dom";

interface CarruselData {
  title: string;
  secundaryTitle: string;
  text: string;
  image: string;
}

interface Home2Options {
  reference: RefObject<HTMLDivElement> | undefined;
}

const carrusel: CarruselData[] = [
  {
    title: "No se trata de comer menos, se trata de",
    secundaryTitle: "comer mejor.",
    text: "Aprende a comer sin restricciones y sin miedo a perder el control con la comida.",
    image: carrousel1,
  },
  {
    title: "Imagina donde estarás en un año si",
    secundaryTitle: "comienzas hoy.",
    text: "¡Enamorate del proceso y los resultados llegarán!",
    image: carrousel2,
  },
  
];

 

export const Home5 = ({reference}:Home2Options) => {
  const navigate=useNavigate()

  const linkToTest=()=>{
    navigate("/test")
  }

  const [index,setIndex]=useState<number>(0)

  const nextIndex=()=>{
    if(index===0){
      return setIndex(index+1)
    }
    else{
      return setIndex(index-1)
    }
  }

  return (
    <section className="home-section5-container">
   
          <div ref={reference} className={index%2 !==0 ? "carrpusel-container":"carrpusel-container carrpusel-container-reverse "}>
            <div className="home-section5-internal-container left">
                <div className="text-container">
                <h5>{carrusel[index].title}</h5>
                <h6>{carrusel[index].secundaryTitle}</h6>
                <p>{carrusel[index].text}</p>
                </div>
            </div>
            <div  className="home-section5-internal-container right ">
            <img src={carrusel[index].image} alt="april image" />
            </div>
            <div className="arrow-container left" onClick={nextIndex}>
              <ArrowLeft/>
            </div>
            <div className="arrow-container right" onClick={nextIndex}>
              <ArrowLeft/>
            </div>
          </div>

          <div className="home-section5-bottom-container">
            <img src={purpleBackground} alt="purple background" />
            <h5>
            ¿No sabes cual plan es el másn indicado para vos?
            </h5>
            <h6>
            ¡Con estas simples preguntas puedo ayudarte!. Lleva menos de 1 minuto
            </h6>

            <button onClick={linkToTest}>Hacer el test</button>
          </div>
      
    </section>
  );
};
