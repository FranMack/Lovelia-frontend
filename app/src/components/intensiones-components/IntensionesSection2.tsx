import { ButtonArrowRight } from "../../commons/ButtonArrowRight";
import { Carrusel } from "../Carrusel";

import wallpaper from "../../assets/images/intensiones-wallpaper2.png";
import wallpaper2 from "../../assets/images/talisman-wallpaper.png";
import talisman from "../../assets/images/ejemplos-talismanes/talisman-digital.png";

import { WallpaperTipo1 } from "../WallpaperTipo1";
import { Wallpaper1Options } from "../WallpaperTipo1";
import { PlacaTipo1 } from "../PlacaTipo1";
import { PlacaTipo1Options } from "../PlacaTipo1";

const infoWallpaper1:Wallpaper1Options = {
  image:wallpaper,
title: "¿Para qué meditamos?",
description: ["Este enfoque en un ritmo y un patrón específicos tiene la finalidad de ayudar a tu mente a liberar pensamientos intrusivos y entrar en un estado meditativo profundo."],
backgroundStyle:"linear-gradient(276deg, rgba(0, 0, 0, 0) 52.84%,rgba(0, 0, 0, 0.5) 95.89%),linear-gradient(276deg, rgba(0, 0, 0, 0) 20.19%, rgba(0, 0, 0, 0.5) 98.87%)",
direction:"left"
};

const infoWallpaper2:Wallpaper1Options = {
  image:wallpaper2,
  height:"100vh"
};



const infoPlacaTipo1:PlacaTipo1Options = {
  image: talisman,
  title: "Intenciona con tu Talismán Digital",
  arrowRightButton: "Crear tu talismá",
  description: [
    " Tu talismán estará acompañado de un sonido especial, algo que podrás tocar siempre que lo necesites. Este sonido será tu compañero en momentos de meditación, para volver a tu centro, o para enfocar tus intenciones",
  ],
  direction:"left"
};



export function IntensionesSection2() {
  return (
    <>
      <section className="intensiones-section2">
        <WallpaperTipo1 {...infoWallpaper1}/>
        <h3>Intenciones lovelia</h3>
        <Carrusel />
        <PlacaTipo1 {...infoPlacaTipo1}/>
             <WallpaperTipo1 {...infoWallpaper2}/>
      </section>
    </>
  );
}
