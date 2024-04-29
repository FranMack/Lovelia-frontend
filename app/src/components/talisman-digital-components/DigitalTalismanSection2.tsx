import talismanDigital2 from "../../assets/images/talisman-digital2.png";
import musica from "../../assets/images/imagen-musica.png"
import wallpaper from "../../assets/images/intensiones-wallpaper2.png"
import wallpaperTalisman from "../../assets/images/talisman-wallpaper.png"
import { ArticulosDestacados } from "../ArticulosDestacados";
import { ejemploTalismanes } from "../../assets/images/ejemplos-talismanes/ejemplosTalismanes";
import { TitleComponent } from "../../commons/TitleComponent";
import { TitleComponentOptions } from "../../commons/TitleComponent";

import { PlacaTipo2 } from "../PlacaTipo2";
import { PlacaTipo2Options } from "../PlacaTipo2";
import { WallpaperTipo1 } from "../WallpaperTipo1";
import { Wallpaper1Options } from "../WallpaperTipo1";
import { Slider } from "../Slider";


const infoPlacaTipo2:PlacaTipo2Options = {
  image: talismanDigital2,
  title: "Mi meditación visual",
  description: [
    "Tu Talismán Digital se trata de una animación 3D única para cada usuario, cuidadosamente diseñada para reflejar el ADN energético de cada individuo en el momento de su nacimiento.",
    
  ],
  direction:"left"
};

const infoPlacaTipo2b:PlacaTipo2Options = {
  image: musica,
  title: "Mi sonido",
  description: [
    "Tu talismán estará acompañado de un sonido especial, algo que podrás tocar siempre que lo necesites. Este sonido será tu compañero en momentos de meditación, para volver a tu centro, o para enfocar tus intenciones.",
    
  ],
  arrowRightButton:"Haz click en la imagen para previsualizar.",
  direction:"left"
};


const titleMeditaciones:TitleComponentOptions = {
  title: "Meditaciones lovelia",
  description: "Nuestras recomendaciones, contenido para tu día a día.",
  buttonText: "Explora todos los sonidos",
};


const infoWallpaper:Wallpaper1Options={
  image:wallpaper,
  title:"¿Para qué meditamos?",
  description:[
    "Este enfoque en un ritmo y un patrón específicos tiene la finalidad de ayudar a tu mente a liberar pensamientos intrusivos y entrar en un estado meditativo profundo.",
    "Puedes acceder a esta meditación en todos tus dispositivos digitales, lo que te permite disfrutar de sus beneficios en cualquier momento y lugar.",
    "Esperamos que esta experiencia te brinde calma y serenidad, y que encuentres en ella un recurso valioso para tu bienestar."
  ],
  direction:"left"
}

const infoWallpaper2:Wallpaper1Options={
  image:wallpaperTalisman,
  
}


export function DigitalTalismanSection2() {
  return (
    <>
      <section className="analogTalisman-section2-container">
        <h3>¿Qué hay dentro del talismán digital?</h3>

        <PlacaTipo2 {...infoPlacaTipo2}/>
        <WallpaperTipo1 {...infoWallpaper}/>
        <PlacaTipo2 {...infoPlacaTipo2b}/>
        <WallpaperTipo1 {...infoWallpaper2}/>

        <h3>Artículos destacados</h3>
        <ArticulosDestacados talismanes={ejemploTalismanes} />
        <TitleComponent {...titleMeditaciones}/>
        <Slider/>


      </section>
    </>
  );
}
