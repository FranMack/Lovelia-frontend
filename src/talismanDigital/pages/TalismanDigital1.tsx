import { FrontPage2 } from '../../ui/pages/FrontPage2'
import { FrontPage2Options } from '../../ui/pages/FrontPage2';
import background from "../assets/talisman_digital_portada.webp"

const frontPageInfo: FrontPage2Options = {
    image: background,
    title:"TALISMÁN DIGITAL",
    secundaryTitle:"¿QUÉ INCLUYE?",
    color:"#EDC7B9"
  
  };

export const TalismanDigital1 = () => {
  return (
    <FrontPage2 {...frontPageInfo}/>
  )
}
