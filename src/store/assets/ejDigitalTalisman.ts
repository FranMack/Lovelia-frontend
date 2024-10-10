import talisman1 from "./TD-EJEMPLO-1.webp";
import talisman2 from "./TD-EJEMPLO-2.webp";
import talisman3 from "./TD-EJEMPLO-3.webp";
import talisman4 from "./TD-EJEMPLO-4.webp";

interface ejTalismanOptions{
    title:string,
    description:string,
    image:string
}


export const ejDigitalTalisman:ejTalismanOptions[]=[
    {title:"EJEMPLO A",description:"Descripción modelo",image:talisman1},
    {title:"EJEMPLO B",description:"Descripción modelo",image:talisman2},
    {title:"EJEMPLO C",description:"Descripción modelo",image:talisman3},
    {title:"EJEMPLO D",description:"Descripción modelo",image:talisman4}
]