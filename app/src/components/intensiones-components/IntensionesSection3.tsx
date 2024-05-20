import { ButtonArrowRight } from "../../commons/ButtonArrowRight";
import { Slider } from "../Slider";
import talismanFisico from "../../assets/images/talisman-fisico.png";
import colganteWallpaper from "../../assets/images/imagen-colgante.png";
import colganteWallpaper2 from "../../assets/images/imagen-colgante2.png";
import { TitleComponent } from "../../commons/TitleComponent";
import { PlacaTipo1 } from "../PlacaTipo1";
import { PlacaTipo1Options } from "../PlacaTipo1";
import { WallpaperTipo1 } from "../WallpaperTipo1";
import { Wallpaper1Options } from "../WallpaperTipo1";
import { useNavigate } from "react-router-dom";

const titleMeditaciones = {
  title: "Meditaciones lovelia",
  description: "Nuestras recomendaciones, contenido para tu día a día.",
  buttonText: "Explora todos los sonidos",
};

const infoPlacaTipo1: PlacaTipo1Options = {
  image: talismanFisico,
  title: "Intenciona con tu Talismán Analógico",
  arrowRightButton: "Crea tu talismán ahora",
  description: [
    "  Las piedras que empleamos son auténticas y están meticulosamente talladas a mano, lo que significa que cada talismán será verdaderamente único, igual que tu.",
    "Podrás configurar tu propio talismán seleccionando cada elemento:modelo,material, piedra, intención.",
  ],
  direction: "left",
};

const infoWallpaper1: Wallpaper1Options = {
  image: colganteWallpaper,
  height:"70vh"
};

const infoWallpaper2: Wallpaper1Options = {
  image: colganteWallpaper2,
  height:"90vh"
};

export function IntencionesSection3() {

  const navigatge=useNavigate();

  const linkToComprarTalisman=()=>{
navigatge("/comprar-talisman-analogico")
  }
  return (
    <section className="intensiones-section3">
      <TitleComponent {...titleMeditaciones} />

      <Slider />

      <PlacaTipo1 {...infoPlacaTipo1} onClick={linkToComprarTalisman} />

      <WallpaperTipo1 {...infoWallpaper1} />

      <WallpaperTipo1 {...infoWallpaper2} />
    </section>
  );
}
