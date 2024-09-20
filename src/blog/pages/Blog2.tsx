import { TemplateBlog } from "../components/TemplateBlog"
import { TemplateBlogOptions } from "../components/TemplateBlog"
import imageBlog from "../assets/imagen-blog.png"
import imageBlog2 from "../assets/imagen-blog2.png"

const infoTemplate: TemplateBlogOptions = {
    image: imageBlog,
    title: "Dale color a el ahora",
    secundaryTitle: "Descubre historias, pensamientos, sentimientos y más.",
    description: [
      "Las piedras que empleamos son auténticas y están  meticulosamente talladas a mano, lo que significa que cada talismán será verdaderamente único, igual que tu.",
      "Podrás configurar tu propio talismán seleccionando cada elemento: modelo, material, piedra, intención",
    ],
    arrowRightButton: "LEER MÁS",
    direction: "right",
  };


  const infoTemplate2: TemplateBlogOptions = {
    image: imageBlog2,
    title: "¿Cómo co-crear tu realidad?",
    secundaryTitle: "Descubre historias, pensamientos, sentimientos y más.",
    description: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    ],
    arrowRightButton: "LEER MÁS",
    direction: "left",
  };
  



export const Blog2 = () => {
  return (
<section className='section2-blog-container'>
    <h2>"I am still learning to be a jewelry designer, but I AM a story teller"</h2>
    <TemplateBlog {...infoTemplate}/>
    <TemplateBlog {...infoTemplate2}/>

</section>  )
}
