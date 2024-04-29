import talismanAnalogWallpaper from "../../assets/images/talisman-analogico-wallpaper.png"
import { ejemploTalismanesAnalogicos } from "../../assets/images/ejemplos-talismán-analogico/ejemplosTalismanes";
import { Button } from "../../commons/Button";
import { ArticulosDestacados } from "../ArticulosDestacados";
import { Carrusel3D } from "../Carrusel3D";
import { WallpaperTipo1 } from "../WallpaperTipo1";
import { Wallpaper1Options } from "../WallpaperTipo1";


const infoWallpaper1: Wallpaper1Options = {
  image: talismanAnalogWallpaper,
};



export function AnalogTalismanSection4() {
  return (
    <section className="analogTalisman-section4-container">
      <WallpaperTipo1 {...infoWallpaper1}/>
      <h3>Nuestras piedras</h3>
      <Carrusel3D/>
      <h3>Articulos destacados</h3>
     <ArticulosDestacados talismanes={ejemploTalismanesAnalogicos}/>
      <Button text="Comprar talismán analogico" />
    </section>
  );
}
