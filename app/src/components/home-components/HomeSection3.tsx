import talismanDigital from "../../assets/images/talisman-digital.png"
import talismanFisico  from "../../assets/images/talisman-fisico.png"
import wallpaper from "../../assets/images/imagen-colgante.png"
import { ButtonArrowRight } from "../../commons/ButtonArrowRight"
import { WallpaperTipo1 } from "../WallpaperTipo1";

const infoWallpaper={
    image:wallpaper,
    
}
export function HomeSection3(){

    return(
        <section className="home-section3-container">
             <h2>Talismanes lovelia</h2>
             <div className="home-section3-center-container">
                <div className="section3-interal-conteiner">
                    <div className="section3-image-conteiner">
                        <img src={talismanDigital} alt="Talisman digital" />
                    </div>
                    <h4>Talismán digital</h4>

                </div>
                <div className="section3-interal-conteiner">
                    
                <div className="section3-image-conteiner">
                <img src={talismanFisico} alt="Talisman digital" />
                    </div>
                    <h4>Talismán analógico</h4>
                </div>
             </div>
             <h5>Descubre más sobre talismanes haciendo click en cada uno</h5>
             
             <ButtonArrowRight text="Adquiere ahora el tuyo" color="#6f3289"/>
           
             <WallpaperTipo1 {...infoWallpaper}/>

        </section>
    )

}