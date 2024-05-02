import wallpaper from "../../assets/images/wallpaper-activar-talisman.png";
import historia from "../../assets/images/imagen-historia.png";
import { ButtonArrowRight } from "../../commons/ButtonArrowRight";
import { PlacaTipo1 } from "../PlacaTipo1";
import { PlacaTipo1Options } from "../PlacaTipo1";
import { WallpaperTipo2 } from "../WallpaperTipo2";
import { Wallpaper2Options } from "../WallpaperTipo2";

const infoPlacaTipo1: PlacaTipo1Options = {
  image: historia,
  title: " La historia detrás de nuestra magia",
  arrowRightButton: "Leer mas",
  description: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  ],
  direction: "right",
};

const infoWallpaper2: Wallpaper2Options = {
  image: wallpaper,
  backgroundStyle:"linear-gradient(270deg, rgba(0, 0, 0, 0.00) 37.29%, rgba(0, 0, 0, 0.74) 100%)",
  secundaryTitle: "Activa tu Talismán",
  description: [
    "Regístrate en lovelia, haciendo click aquí.",
    "Regístrate en lovelia, haciendo click aquí.",
    "Con la compra recibirás un código.",
    "Ingresa en tu perfil de talisman, ingresa el código y listo!",
  ],
  symbol:"✔"
};

export function AnalogTalismanSection6() {
  return (
    <section className="analogTalisman-section6-container">
     
      <WallpaperTipo2 {...infoWallpaper2}/>

      <PlacaTipo1 {...infoPlacaTipo1} />
    </section>
  );
}
