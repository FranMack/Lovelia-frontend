import { useNavigate } from "react-router";
import imageBlog from "../assets/imagen-blog.webp";
import imageBlog2 from "../assets/imagen-blog2.webp";
import { TemplateBlog, TemplateBlogOptions } from "../components/TemplateBlog";

const infoTemplate: TemplateBlogOptions = {
  image: imageBlog,
  title: "El Poder de la Intención",
  description: [
    "Existe el poder de transformar los pensamientos en realidades durante el proceso de búsqueda de la plenitud y la realización personal. Es el poder de la intención, la semilla de toda transformación y creación en nuestras vidas.",
   
  ],
  arrowRightButton: "LEER MÁS",
  direction: "right",

};

const infoTemplate2: TemplateBlogOptions = {
  image: imageBlog2,
  title: "¿Para qué meditamos?",
  description: [
    "Cuando desarrollamos el hábito de estar presentes conectamos con nuestro ser interior, fomentando el bienestar físico, mental y emocional, para alcanzar un estado de conciencia expandida, experimentando una forma de percepción más amplia y profunda que la habitual, lo que nos facilita conectar con uno mismo, con los demás y con el entorno. ",
  ],
  arrowRightButton: "LEER MÁS",
  direction: "left",
};

export const Blog2 = () => {
  const navigate=useNavigate()

  const linlToNote1=()=>{
    navigate("/blog/nota/1")
  }
  const linlToNote2=()=>{
    navigate("/blog/nota/2")
  }

  infoTemplate.onClick=linlToNote1;
  infoTemplate2.onClick=linlToNote2

  return (
    <section className="section2-blog-container">
      
      <TemplateBlog {...infoTemplate} />
      <TemplateBlog {...infoTemplate2} />
    </section>
  );
};
