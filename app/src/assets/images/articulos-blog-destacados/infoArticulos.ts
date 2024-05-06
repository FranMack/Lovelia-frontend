import articulo1 from "./articulo1.png"
import articulo2 from "./articulo2.png"
import articulo3 from "./articulo3.png"
import articulo4 from "./articulo4.png"

interface DestacadosBlogOptions{
    tittle:string,
    author:string,
    date:string,
    image:string
}


export const destacadosBlog:DestacadosBlogOptions[]=[
    {tittle:"Titulo del articulo",author:"Nombre del autor",date:"Abril 04, 2024",image:articulo1},
    {tittle:"Titulo del articulo",author:"Nombre del autor",date:"Abril 04, 2024",image:articulo2},
    {tittle:"Titulo del articulo",author:"Nombre del autor",date:"Abril 04, 2024",image:articulo3},
    {tittle:"Titulo del articulo",author:"Nombre del autor",date:"Abril 04, 2024",image:articulo4}
]