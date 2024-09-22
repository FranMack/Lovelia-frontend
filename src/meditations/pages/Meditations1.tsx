import { FrontPage2 } from '../../ui/pages/FrontPage2'
import { FrontPage2Options } from '../../ui/pages/FrontPage2';
import background from "../assets/meditaciones_portada1.png"

const frontPageInfo: FrontPage2Options = {
    image: background,
    title:"MEDITACIONES LOVELIA",
    secundaryTitle:"",
    color:"#FFEFEE"
  
  };

export const Meditations1 = () => {
  return (
    <FrontPage2 {...frontPageInfo}/>
  )
}
