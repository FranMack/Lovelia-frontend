import abundancia from "./intenciones/intencion_abundancia.png"
import gratitud from "./intenciones/intencion_gratitud.png"
import petencialInfinito from "./intenciones/intencion_potencial_infinito.png"
import coraje from "./intenciones/intencion_coraje.png"
import yoVerdadero from "./intenciones/intencion_yo_verdadero.png"
import aquiYahora from "./intenciones/intencion_aqui_y_ahora.png"
import sabiduria from "./intenciones/intencion_sabiduria.png"
import amorIncondicional from "./intenciones/intencion_amor_incondicional.png"

interface InfoIntenciones {
  id: number;
  image: string;
  title: string;
  text:string
 
}

export const infoIntenciones:InfoIntenciones[] = [
  {
    id: 1,
    image: sabiduria,
    title: "Sabiduría de la incertidumbre",
    text:"La intuición es la guía del Alma.",
  },
  {
    id: 2,
    image: amorIncondicional,
    title: "Amor Incondicional",
    text:"Todos somos UNO.",
   
  },
  {
    id: 3,
    image: abundancia,
    title: "Abundancia",
    text:"Somos el Universo.",
  },

  {
    id: 4,
    image: aquiYahora,
    title: "Aquí y Ahora",
    text:"Lo único real es el Presente.",
   
  },
  {
    id: 5,
    image: petencialInfinito,
    title: "Potencial Infinito",
    text:"Somos Seres Energía con el poder de cocrear nuestra realidad.",
  
  },
  {
    id: 6,
    image: coraje,
    title: "Coraje",
    text:"Valentía en mi corazón.",
   
  },
  {
    id: 7,
    image: yoVerdadero,
    title: "Yo verdadero",
    text:"Ser quién uno es.",
  
  },

  {
    id: 8,
    image: gratitud,
    title: "Gratitud",
    text:"Aceptar la realidad con amor.",
  
  },
];
