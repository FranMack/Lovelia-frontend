
import itention1 from "../assets/imagen-intensiones1.png"
import itention2 from "../assets/imagen-intensiones2.png"
import itention3 from "../assets/imagen-intensiones3.png"
import itention4 from "../assets/imagen-intensiones4.png"
import itention5 from "../assets/imagen-intensiones5.png"
import itention6 from "../assets/imagen-intensiones6.png"
import itention7 from "../assets/imagen-intensiones7.png"
import itention8 from "../assets/imagen-intensiones8.png"



const intentions=[
    {id:1,title:"Sabiduría de la incertidumbre",text:"La intuición es la guía del Alma.",image:itention1},
    {id:2,title:"Amor incondicional",text:"Todos somos UNO.",image:itention2},
    {id:3,title:"Abundancia",text:"Somos el Universo.",image:itention3},
    {id:4,title:"Aquí y Ahora",text:"Lo único real es el presente.",image:itention4},
    {id:5,title:"Potencial infinito",text:"Somos seres energía con el poder de co-crear nuestra realidad.",image:itention5},
    {id:6,title:"Coraje",text:"Valentia en mi corazon.",image:itention6},
    {id:7,title:"Yo verdadero",text:"Ser quien uno es.",image:itention7},
    {id:8,title:"Gratitud",text:"Aceptar la realidad con amor.",image:itention8},

]
import { GridIntentions } from '../components/GridIntentions'
export const Intentions3 = () => {
  return (
   <section className='section3-intentions-container'>
    <h3>INTENSIONES LOVELIA</h3>
    <GridIntentions intentions={intentions}/>
   </section>
  )
}
