import timerImage from "../../assets/images/image-timer.png";
import { Button } from "../../commons/Button";
import { WallpaperTipo2 } from "../WallpaperTipo2";
import { Wallpaper2Options } from "../WallpaperTipo2";
import wallpaper from "../../assets/images/wallpaper-activar-talisman.png";
import wallpaperTalisman from "../../assets/images/talisman-wallpaper.png";
import { TitleComponent } from "../../commons/TitleComponent";
import { TitleComponentOptions } from "../../commons/TitleComponent";
import { infoSonidos } from "../../assets/images/imagnes-sonidos/infoSonidos";
import { PlayIcon } from "../../assets/images/icons/icons";
import { GiftComponent } from "../GiftComponent";
import { useNavigate } from "react-router-dom";

const infoWallpaper2: Wallpaper2Options = {
  image: wallpaper,
  backgroundStyle:
    "linear-gradient(270deg, rgba(0, 0, 0, 0.00) 37.29%, rgba(0, 0, 0, 0.74) 100%)",
  secundaryTitle: "¿Cómo activar el Talisman?",
  description: [
    "Regístrate en lovelia, haciendo click aquí.",
    "Adquiere tu Talisman según tus objetivos.",
    "Ingresa en tu perfil de talisman, activalo y listo!",
  ],
  symbol: "✔",
  height:"70vh"
};

const infoWallpaper2b: Wallpaper2Options = {
  image: wallpaperTalisman,
  height:"70vh"
};

const bibliotecaSonidos: TitleComponentOptions = {
  title: "Biblioteca de sonidos",
  description: "Nuestras recomendaciones, contenido para tu día a día.",
  buttonText: "Explora todos los sonidos",
};

export function DigitalTalismanSection4() {

  const navigatge=useNavigate();

  const linkToComprarTalisman=()=>{
navigatge("/comprar-talisman-digital")
  }
  return (
    <section className="digitalTalisman-section4-container">
      <div className="digitalTalisman-top-container">
        <div className="digitalTalisman-top-internal-container left">
          <div>
            <h4>Timer</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </p>
          </div>
        </div>
        <div className="digitalTalisman-top-internal-container right">
          <img src={timerImage} alt="Timer" />
        </div>
      </div>
<div className="digitalTalisman-section4-auxiliar-container"><Button onClick={linkToComprarTalisman} text="Comprar talismán digital" /></div>
      
      <WallpaperTipo2 {...infoWallpaper2} />
      <WallpaperTipo2 {...infoWallpaper2b} />
      <TitleComponent {...bibliotecaSonidos} />
      <div className="sonidos-container">
        {infoSonidos.map((sonido, i) => {
          return (
            <div className="sonidos-card" key={i}>
              <div className="sonidos-cardimage-container">
                <div className="icon-container">
                  <PlayIcon />
                </div>
                <img src={sonido.image} alt={sonido.title} />
              </div>

              <h4>{sonido.title}</h4>
              <p>{sonido.description}</p>
            </div>
          );
        })}
      </div>
      <GiftComponent />
    </section>
  );
}
