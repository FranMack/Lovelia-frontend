import { CarruselIntensiones } from "../CarruselIntensiones";

import wallpaper from "../../assets/images/intensiones-wallpaper2.png";
import talisman from "../../assets/images/talisman-digital.png";
import wallpaper2 from "../../assets/images/talisman-wallpaper.png";

import { useNavigate } from "react-router-dom";
import { PlacaTipo1, PlacaTipo1Options } from "../PlacaTipo1";
import { Wallpaper1Options, WallpaperTipo1 } from "../WallpaperTipo1";

const infoWallpaper1: Wallpaper1Options = {
  image: wallpaper,
  title: "¿Para qué meditamos?",
  description: [
    "Este enfoque en un ritmo y un patrón específicos tiene la finalidad de ayudar a tu mente a liberar pensamientos intrusivos y entrar en un estado meditativo profundo.",
  ],
  backgroundStyle:
    "linear-gradient(276deg, rgba(0, 0, 0, 0) 52.84%,rgba(0, 0, 0, 0.5) 95.89%),linear-gradient(276deg, rgba(0, 0, 0, 0) 20.19%, rgba(0, 0, 0, 0.5) 98.87%)",
  direction: "left",
  height: "70vh",
};

const infoWallpaper2: Wallpaper1Options = {
  image: wallpaper2,
  height: "70vh",
};

const infoPlacaTipo1: PlacaTipo1Options = {
  image: talisman,
  title: "Intenciona con tu Talismán Digital",
  arrowRightButton: "Crear tu talismá",
  description: [
    " Tu talismán estará acompañado de un sonido especial, algo que podrás tocar siempre que lo necesites. Este sonido será tu compañero en momentos de meditación, para volver a tu centro, o para enfocar tus intenciones",
  ],
  direction: "left",
};

export function IntensionesSection2() {
  const navigatge = useNavigate();

  const linkToComprarTalisman = () => {
    navigatge("/comprar-talisman-digital");
  };
  return (
    <>
      <section className="intensiones-section2">
        <WallpaperTipo1 {...infoWallpaper1} />
        <h3>Intenciones lovelia</h3>
        <CarruselIntensiones />
        <PlacaTipo1 {...infoPlacaTipo1} onClick={linkToComprarTalisman} />
        <WallpaperTipo1 {...infoWallpaper2} />
      </section>
    </>
  );
}
