import { useNavigate } from "react-router-dom";
import { ejemploTalismanesAnalogicos } from "../../assets/images/ejemplos-talisman-analogico/ejemplosTalismanes";
import talismanAnalogWallpaper from "../../assets/images/talisman-analogico-wallpaper.png";
import { ArticulosDestacados } from "../ArticulosDestacados";
import { Carrusel3D } from "../Carrusel3D";
import { Wallpaper1Options, WallpaperTipo1 } from "../WallpaperTipo1";

const infoWallpaper1: Wallpaper1Options = {
  image: talismanAnalogWallpaper,
  height: "70vh",
};

export function AnalogTalismanSection4() {
  const navigatge = useNavigate();

  const linkToComprarTalisman = () => {
    navigatge("/comprar-talisman-analogico");
  };

  return (
    <section className="analogTalisman-section4-container">
      <WallpaperTipo1 {...infoWallpaper1} onClick={linkToComprarTalisman} />
      <h3>Nuestras piedras</h3>
      <Carrusel3D />
      <h3>Articulos destacados</h3>
      <ArticulosDestacados
        talismanes={ejemploTalismanesAnalogicos}
        button="Comprar talismán analógico"
        onClick={linkToComprarTalisman}
      />
    </section>
  );
}
