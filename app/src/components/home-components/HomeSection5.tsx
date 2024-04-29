import intensiones from "../../assets/images/intenciones-wallpaper.png";
import { ButtonArrowRight } from "../../commons/ButtonArrowRight";
import { Carrusel } from "../Carrusel";
import { Slider } from "../Slider";
import { TitleComponent } from "../../commons/TitleComponent";
import { WallpaperTipo1 } from "../WallpaperTipo1";
import { Wallpaper1Options } from "../WallpaperTipo1";

const titleIntensiones = {
  title: "Intenciones lovelia",
  description: "Música, videos y meditaciones guiadas.",
  buttonText: "Explorar todo",
};
const titleMeditaciones = {
  title: "Meditaciones lovelia",
  description: "Nuestras recomendaciones, contenido para tu día a día.",
  secundaryTitl:"Descubre historias,pensamientos,sentimientos, y más",
  buttonText: "Explora todos los sonidos",
};

const infoWallpaper:Wallpaper1Options = {
    image:intensiones,
  title: "El poder de la intención",
  description: ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque culpa sunt aspernatur dignissimos accusantium repellendus cumque exercitationem. Laborum ullam nisi inventore, obcaecati magni perspiciatis voluptatem voluptas cum quam itaque temporibus."],
  terciaryTitle: "Descubre historias,pensamientos,sentimientos, y más",
  arrowRightButton:"Ver más",
  backgroundStyle:"linear-gradient(119deg, rgba(0, 0, 0, 0.00) 41.93%, rgba(0, 0, 0, 0.50) 95.82%), linear-gradient(122deg, rgba(0, 0, 0, 0.00) -1.05%, rgba(0, 0, 0, 0.50) 95.35%)"
};

export function HomeSection5() {
  return (
    <section className="section5-container">
    
      <WallpaperTipo1 {...infoWallpaper}/>

      <TitleComponent {...titleIntensiones} />

      <Carrusel />
      <TitleComponent {...titleMeditaciones} />

      <Slider />
    </section>
  );
}
