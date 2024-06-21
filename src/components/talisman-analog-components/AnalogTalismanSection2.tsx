import { useNavigate } from "react-router-dom";
import colganteWallpaper from "../../assets/images/imagen-colgante.png";
import { talismanes } from "../../assets/images/talismanes-fisicos/infoTalismanesFisicos";
import { Button } from "../../commons/Button";
import { WallpaperTipo1 } from "../WallpaperTipo1";
import { Wallpaper1Options } from "../WallpaperTipo1";


const infoWallpaper1: Wallpaper1Options = {
  image: colganteWallpaper,
  height:"70vh"
};

export function AnalogTalismanSection2() {

  const navigatge=useNavigate();

  const linkToComprarTalisman=()=>{
navigatge("/comprar-talisman-analogico")
  }


  return (
    <section className="analogTalisman-section2-container">
    
      <WallpaperTipo1 {...infoWallpaper1}/>
      <h3>Modelos disponibles</h3>

      <div className="analogTalisman-section2-center-container">
        {talismanes.map((talisman, i) => {
          return (
            <div className="analogTalisman-section2-center-container-card" key={i}>
              <div className="analogTalisman-card-image-container">
                <img src={talisman.image} alt={talisman.name} />
              </div>
              <h4>{talisman.name}</h4>
            </div>
          );
        })}
      </div>
      <Button text="Comprar talismán analógico" onClick={linkToComprarTalisman} />

   
    </section>
  );
}
