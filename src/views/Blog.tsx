import { useContext, useEffect, useRef } from "react";
import { historias } from "../assets/images/historias/infoHistorias";
import imagenBlog from "../assets/images/imagen-blog.png";
import imagenCaracol from "../assets/images/imagen-caracol.png";
import imagenMusica from "../assets/images/imagen-musica.png";
import wallpaper from "../assets/images/intenciones-wallpaper.png";
import wallpaper2 from "../assets/images/intensiones-wallpaper2.png";
import { BackgroundVideo } from "../commons/BackgroundVideo";
import {
  TitleComponent,
  TitleComponentOptions,
} from "../commons/TitleComponent";
import { DestacadosBlog } from "../components/DestacadosBlog";
import { PlacaTipo1, PlacaTipo1Options } from "../components/PlacaTipo1";
import { PlacaTipo2, PlacaTipo2Options } from "../components/PlacaTipo2";
import {
  Wallpaper1Options,
  WallpaperTipo1,
} from "../components/WallpaperTipo1";
import { ShopingCartContext } from "../context/modalShopingCart";

const infoPlaca: PlacaTipo1Options = {
  image: imagenBlog,
  title: "Dale color a el ahora",
  description: [
    "Las piedras que empleamos son auténticas y están  meticulosamente talladas a mano, lo que significa que cada talismán será verdaderamente único, igual que tu.",
    "Podrás configurar tu propio talismán seleccionando cada elemento: modelo, material, piedra, intención",
  ],
  arrowRightButton: "Lectura del día",
  direction: "right",
};

const infoPlaca2: PlacaTipo2Options = {
  image: imagenMusica,
  title: "Mi sonido",
  description: [
    "Tu talismán estará acompañado de un sonido especial, algo que podrás tocar siempre que lo necesites. Este sonido será tu compañero en momentos de meditación, para volver a tu centro, o para enfocar tus intenciones.",
  ],
  arrowRightButton: "Haz click en la imagen para previsualizar.",
  direction: "left",
};

const infoPlaca3: PlacaTipo1Options = {
  image: imagenCaracol,
  title: "¿Cómo co-crear tu realidad?",
  secundaryTitle: "Descubre historias, pensamientos, sentimientos y más.",
  description: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
  ],
  arrowRightButton: "Leer mas",
  direction: "left",
};

const titleArticulosDestacados: TitleComponentOptions = {
  title: "Articulos destacados",
  description: "Lectura para ampliar tu horizonte.",
  buttonText: "Ver más",
};

const titleHistorias: TitleComponentOptions = {
  title: "Historias, lecciones y experiencias",
  description: "Lectura para ampliar tu horizonte.",
  buttonText: "Ver más",
};
const titleOtrasHistorias: TitleComponentOptions = {
  title: "Otras historias",
  description: "Lectura para ampliar tu horizonte.",
  buttonText: "Ver más",
};

const infoWallpaper: Wallpaper1Options = {
  image: wallpaper,
  title: "El poder de la intención",
  secundaryTitle: "Descubre historias, pensamientos, sentimientos y más.",
  description: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
  ],
  arrowRightButton: "Leer más",
  backgroundStyle:
    "linear-gradient(119deg, rgba(0, 0, 0, 0.00) 41.93%, rgba(0, 0, 0, 0.50) 95.82%), linear-gradient(122deg, rgba(0, 0, 0, 0.00) -1.05%, rgba(0, 0, 0, 0.50) 95.35%)",
};

const infoWallpaper2: Wallpaper1Options = {
  image: wallpaper2,
  title: "¿Para qué meditamos?",
  description: [
    "Este enfoque en un ritmo y un patrón específicos tiene la finalidad de ayudar a tu mente a liberar pensamientos intrusivos y entrar en un estado meditativo profundo.",
  ],
  backgroundStyle:
    "linear-gradient(276deg, rgba(0, 0, 0, 0.00) 52.84%, rgba(0, 0, 0, 0.50) 95.89%), linear-gradient(276deg, rgba(0, 0, 0, 0.00) 20.19%, rgba(0, 0, 0, 0.50) 98.87%)",
  direction: "left",
};

export function Blog() {
  window.scrollTo(0, 0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.4;
    }
  }, [videoRef]);

  const { menuOpen } = useContext(ShopingCartContext);

  return (
    <main className={menuOpen ? "viewport-background" : ""}>
      <BackgroundVideo />
      <div className="portada-blog">
        <div className="portada-blog-auxiliar-container">
          <PlacaTipo1 {...infoPlaca} />
        </div>
      </div>

      <TitleComponent {...titleArticulosDestacados} />
      <DestacadosBlog />
      <WallpaperTipo1 {...infoWallpaper} />
      <WallpaperTipo1 {...infoWallpaper2} />
      <TitleComponent {...titleHistorias} />

      <div className="blog-historias-container">
        {historias.map((articulo, i) => {
          return (
            <div className={`blog-historias-card card${i}`} key={i}>
              <img src={articulo.image} alt={articulo.tittle} />

              <h6>{articulo.author}</h6>
              <h4>{articulo.tittle}</h4>
              <p>{articulo.date}</p>
            </div>
          );
        })}
      </div>
      <PlacaTipo2 {...infoPlaca2} />
      <TitleComponent {...titleOtrasHistorias} />

      <div className="blog-historias-container">
        {historias.map((articulo, i) => {
          return (
            <div className={`blog-historias-card card${i}`} key={i}>
              <img src={articulo.image} alt={articulo.tittle} />

              <h6>{articulo.author}</h6>
              <h4>{articulo.tittle}</h4>
              <p>{articulo.date}</p>
            </div>
          );
        })}
      </div>
      <PlacaTipo1 {...infoPlaca3} />
    </main>
  );
}
