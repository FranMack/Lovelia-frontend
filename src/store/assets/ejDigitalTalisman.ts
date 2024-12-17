import talisman1 from "./ejemplo1_talisman_digital.webp";
import talisman2 from "./ejemplo2_talisman_digital.webp";
import talisman3 from "./ejemplo3_talisman_digital.webp";
import talisman4 from "./ejemplo4_talisman_digital.webp";

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