import { FrontPage2 } from '../../ui/pages/FrontPage2'
import { FrontPage2Options } from '../../ui/pages/FrontPage2';
import background from "../assets/intensiones_portada1.webp"

const frontPageInfo: FrontPage2Options = {
    image: background,
    title:"INTENCIONES LOVELIA",
    secundaryTitle:"",
    color:"#FFFF"
  
  };

export const Intentions1 = () => {
  return (
    <FrontPage2 {...frontPageInfo}/>
  )
}
