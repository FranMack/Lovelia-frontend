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
    {id:1,image:imagen1,title:"Titulo 1",className:"intensiones-gallery-item-1", dataIndex:"1",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ad cumvero sunt a, temporibus perferendis aspernatur omnis tempora."},
    {id:2,image:imagen2,title:"Titulo 2",className:"intensiones-gallery-item-2", dataIndex:"2",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ad cumvero sunt a, temporibus perferendis aspernatur omnis tempora."},
    {id:3,image:imagen3,title:"Titulo 3",className:"intensiones-gallery-item-3", dataIndex:"3",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ad cumvero sunt a, temporibus perferendis aspernatur omnis tempora."},
    {id:4,image:imagen4,title:"Titulo 4",className:"intensiones-gallery-item-4", dataIndex:"4",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ad cumvero sunt a, temporibus perferendis aspernatur omnis tempora."},
    {id:5,image:imagen1,title:"Titulo 5",className:"intensiones-gallery-item-5", dataIndex:"5",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ad cumvero sunt a, temporibus perferendis aspernatur omnis tempora."},
    {id:6,image:imagen2,title:"Titulo 6",className:"intensiones-gallery-item-6", dataIndex:"6",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ad cumvero sunt a, temporibus perferendis aspernatur omnis tempora."},
    {id:7,image:imagen3,title:"Titulo 7",className:"intensiones-gallery-item-7", dataIndex:"7",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ad cumvero sunt a, temporibus perferendis aspernatur omnis tempora."},
    {id:8,image:imagen4,title:"Titulo 8",className:"intensiones-gallery-item-8", dataIndex:"8",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ad cumvero sunt a, temporibus perferendis aspernatur omnis tempora."},
]


