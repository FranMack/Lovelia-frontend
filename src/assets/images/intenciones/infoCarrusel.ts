import imagen1 from "./imagen-intensiones1.png"
import imagen2 from "./imagen-intensiones2.png"
import imagen3 from "./imagen-intensiones3.png"
import imagen4 from "./imagen-intensiones4.png"


interface CarrouselIntensionesOptions{
    id:number,
    image:string,
    title:string,
    text:string,
    className?:string,
    dataIndex?:string
}


export const infoCarrusel:CarrouselIntensionesOptions[]=[
    {id:1,image:imagen1,title:"Coraje",className:"intensiones-gallery-item-1", dataIndex:"1",text:"“No puedes nadar por nuevos horizontes, hasta que tengas el coraje de perder de vista la orilla”. — William Faulkner"},
    {id:2,image:imagen2,title:"Yo verdadero",className:"intensiones-gallery-item-2", dataIndex:"2",text:"“El privilegio de una vida es ser quien uno es¨. — Joseph Campbell”"},
    {id:3,image:imagen3,title:"Abundancia",className:"intensiones-gallery-item-3", dataIndex:"3",text:"Todo lo que somos es el resultado de lo que hemos pensado”. —Buda"},
    {id:4,image:imagen4,title:"Amor Incondicional",className:"intensiones-gallery-item-4", dataIndex:"4",text:"El amor es un estado de Ser, tu amor no está afuera, está en lo profundo de tí, nunca puedes perderlo, no puede dejarte, no depende de otro cuerpo, de otra forma externa. — Eckhart Tolle"},
    {id:5,image:imagen1,title:"Aquí y Ahora",className:"intensiones-gallery-item-5", dataIndex:"5",text:"“En el momento que atendemos algo, ese algo es real”. — William James"},
    {id:6,image:imagen2,title:"Gratitud",className:"intensiones-gallery-item-6", dataIndex:"6",text:"“No tengo que perseguir momentos extraordinarios para encontrar la felicidad. Está justo frente a mí si presto atención y practico la gratitud”. — Brené Brown"},
    {id:7,image:imagen3,title:"Potencial Infinito",className:"intensiones-gallery-item-7", dataIndex:"7",text:"“La energía no se crea ni se destruye, solo se transforma”.  —Antonine Lavoisier"},
    {id:8,image:imagen4,title:"Sabiduría de la incertidumbre",className:"intensiones-gallery-item-8", dataIndex:"8",text:"“La intuición es la capacidad humana de llegar a la respuesta correcta con datos insuficientes”. — Issac Asimov"},
]


