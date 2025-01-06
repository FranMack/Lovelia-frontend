import abundancia from "./intentions/abundancia.webp"
import coraje from "./intentions/coraje.webp"
import amorIncondicional from "./intentions/amor_incondicional.webp"
import petencialInfinito from "./intentions/potencial_infinito.webp"
import sabiduria from "./intentions/sabiduria.webp"
import aquiYahora from "./intentions/aqui_ahora.webp"
import yoVerdadero from "./intentions/yo_verdadero.webp"
import gratitud from "./intentions/gratitud.webp"


interface InfoIntenciones {
  id: number;
  image: string;
  title: string;
  text:string
 
}

export const infoIntenciones:InfoIntenciones[] = [

  {
    id: 1,
    image: amorIncondicional,
    title: "Amor Incondicional",
    text:"Todos somos UNO.",
   
  },
  {
    id: 2,
    image: aquiYahora,
    title: "Aquí y Ahora",
    text:"Lo único real es el Presente.",
   
  },
  {
    id: 3,
    image: abundancia,
    title: "Abundancia",
    text:"Somos el Universo.",
  },


  {
    id: 4,
    image: petencialInfinito,
    title: "Potencial Infinito",
    text:"Somos Seres Energía con el poder de cocrear nuestra realidad.",
  
  },
  {
    id: 5,
    image: coraje,
    title: "Coraje",
    text:"Valentía en mi corazón.",
   
  },
  {
    id: 6,
    image: yoVerdadero,
    title: "Yo verdadero",
    text:"Ser quién uno es.",
  
  },
  {
    id: 7,
    image: sabiduria,
    title: "Sabiduría de la incertidumbre",
    text:"La intuición es la guía del Alma.",
  },

  {
    id: 8,
    image: gratitud,
    title: "Gratitud",
    text:"Aceptar la realidad con amor.",
  
  },

];
