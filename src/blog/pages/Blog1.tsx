import { FrontPage2 } from '../../ui/pages/FrontPage2'
import { FrontPage2Options } from '../../ui/pages/FrontPage2';
import background from "../assets/blog_portada.webp"

const frontPageInfo: FrontPage2Options = {
    image: background,
    title:"BLOG LOVELIA",
    secundaryTitle:"",
    color:"#FFEFEE"
  
  };

export const Blog1= () => {
  return (
    <FrontPage2 {...frontPageInfo}/>
  )
}
