import taller1 from "./imagen-taller1.png"
import taller2 from "./imagen-taller2.png"
import taller3 from "./imagen-taller3.png"

interface InfoTallersObject{
    name:string,
    date:string,
    image:string
}


export const infoTalleres: InfoTallersObject[]=[
    {name:"Taller nombre largo A", date:"00/00/00",image:taller1},
    {name:"Taller nombre largo A", date:"00/00/00",image:taller2},
    {name:"Taller nombre largo A", date:"00/00/00",image:taller3}
]