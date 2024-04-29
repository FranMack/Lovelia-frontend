import wallpaper from "../../assets/images/Reencontrate-wallpaper.png"
import caracol from "../../assets/images/imagen-caracol.png"
import { ButtonArrowRight } from "../../commons/ButtonArrowRight"
import videoTalisman from "../../assets/videos/videoFondo.mp4"
import { PlacaTipo1 } from "../PlacaTipo1"
import { WallpaperTipo1 } from "../WallpaperTipo1"
import { Wallpaper1Options } from "../WallpaperTipo1"


const infoPlacaTipo1 = {
  image: caracol,
  title: "Talismán digital",
  secundaryTitle:"Descubre historias,pensamientos,sentimientos y más",
  arrowRightButton: "¿Cómo co-crear tu realidad?",
  description: [
    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis repellat numquam, ea  omnis deserunt fuga velit repellendus voluptates reprehenderit, officia earum nulla  minus ut ex debitis ipsum dicta beatae quasi.",
  ],
};

const infoWallpaper:Wallpaper1Options = {
  image:wallpaper,
title: "Reencuentrate",
secundaryTitle: "Descubre historias, pensamientos, sentimientos, y más",
direction:"left",
backgroundStyle:"linear-gradient(276deg, rgba(0, 0, 0, 0.00) 52.84%, rgba(0, 0, 0, 0.50) 95.89%), linear-gradient(276deg, rgba(0, 0, 0, 0.00) 20.19%, rgba(0, 0, 0, 0.50) 98.87%)"
};



export function HomeSection7(){
return(
    <section className="section7-container">
      
            <WallpaperTipo1 {...infoWallpaper}/>

        
      <PlacaTipo1 {...infoPlacaTipo1}/>

      <div className="section7-video-container">

      <video controls>
        <source src={videoTalisman} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h6>
        ¿Qué es un talismán?
      </h6>
      <p>Un talismán es rememorar, tener presente, un indicio de nuestras intenciones e infinitas posibilidades, es un lugar seguro donde volver y envocarte para lograr tu proposito</p>
      </div>
    </section>
)
}