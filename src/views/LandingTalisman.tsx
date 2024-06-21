import { PortadaTalisman } from "../components/PortadaTalisman";
import { PortadaTalismanOptions } from "../components/PortadaTalisman";
import talisman from "../assets/images/talisman-digital.png";
import { TalismanesComponent } from "../components/TalismanesComponent";
import { WallpaperTipo2 } from "../components/WallpaperTipo2";
import { Wallpaper2Options } from "../components/WallpaperTipo2";
import wallpaperTalisman from "../assets/images/talisman-wallpaper.png";
import wallpaperColgante from "../assets/images/imagen-colgante.png";
import taslismanFisico from "../assets/images/talisman-fisico.png";
import { PlacaTipo1 } from "../components/PlacaTipo1";
import { PlacaTipo1Options } from "../components/PlacaTipo1";
import { GiftComponent } from "../components/GiftComponent";
import { useNavigate } from "react-router-dom";
import { BackgroundVideo } from "../commons/BackgroundVideo";
import { useContext } from "react";
import { ShopingCartContext } from "../context/modalShopingCart";


const infoPortada: PortadaTalismanOptions = {
  image: talisman,
  title: "¿Qué es un talismán?",
  description: [
    "Un Talismán es rememorar, tener presente, un indicio de nuestras intenciones e infinitas posibilidades, es un lugar seguro donde volver y enfocarte para lograr tu propósito.",
    "Somos seres energía y somos parte de un campo energético unificado. Cuando a través de nuestros  pensamientos, acciones y creencias nos alineamos con esa energía universal, podemos co-crear nuestra realidad mediante una Intención.",
  ],
};

const infoWallpaper1: Wallpaper2Options = {
  image: wallpaperTalisman,
  title: "Talismán Digital",
  description: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  ],
  button: "Comprar",
  height:"70vh"
};

const infoWallpaper2: Wallpaper2Options = {
  image: wallpaperColgante,
  height:"70vh"
  
};

const infoPlaca1: PlacaTipo1Options = {
  image: wallpaperTalisman,
  title: "Intenciona con tu Talismán Digital",
  description: [
    "Las piedras que empleamos son auténticas y están  meticulosamente talladas a mano, lo que significa que cada talismán será verdaderamente único, igual que tu.",
    "Podrás configurar tu propio talismán seleccionando cada elemento: modelo, material, piedra, intención",
  ],
  arrowRightButton: "Crea tu talismán ahora",

};

const infoPlaca2: PlacaTipo1Options = {
  image: taslismanFisico,
  title: "Intenciona con tu Talismán Analógico",
  description: [
    "Las piedras que empleamos son auténticas y están  meticulosamente talladas a mano, lo que significa que cada talismán será verdaderamente único, igual que tu.",
    "Podrás configurar tu propio talismán seleccionando cada elemento: modelo, material, piedra, intención",
  ],
  arrowRightButton: "Crea tu talismán ahora",
};

export function LandingTalisman() {
  window.scrollTo(0, 0);

  const navigatge=useNavigate();

  const linkToComprarTalismanDigital=()=>{
navigatge("/comprar-talisman-digital")
  }
  const linkToComprarTalismanAnalogico=()=>{
    navigatge("/comprar-talisman-analogico")
      }


      const{menuOpen}=useContext(ShopingCartContext)
      
      return (
        <main className={menuOpen ? "viewport-background":"" } >
            <BackgroundVideo/>
      <BackgroundVideo/>
       
      <PortadaTalisman {...infoPortada} />
      <TalismanesComponent />
      <WallpaperTipo2 {...infoWallpaper1} onClick={linkToComprarTalismanDigital} />
      <PlacaTipo1 {...infoPlaca1} onClick={linkToComprarTalismanDigital}  />
      <WallpaperTipo2 {...infoWallpaper2}  />
      <PlacaTipo1 {...infoPlaca2} onClick={linkToComprarTalismanAnalogico}/>
      <GiftComponent />
    </main>
  );
}
