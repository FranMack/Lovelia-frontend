import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ejemploTalismanes } from "../assets/images/ejemplos-talismanes/ejemplosTalismanes";
import { ejemploTalismanesAnalogicos } from "../assets/images/ejemplos-talismán-analogico/ejemplosTalismanes";
import wallpaperColgante from "../assets/images/imagen-colgante.png";
import wallpaperColgante2 from "../assets/images/imagen-colgante2.png";
import talismanFisico1 from "../assets/images/talisman-fisico.png";
import talismanFisico from "../assets/images/talisman-fisico2.png";
import wallpaperTalisman from "../assets/images/talisman-wallpaper.png";
import videoTalisman from "../assets/videos/talismanGif.mp4";
import videoFondo from "../assets/videos/videoFondo.mp4";
import { BackgroundVideo } from "../commons/BackgroundVideo";
import { Button } from "../commons/Button";
import { ArticulosDestacados } from "../components/ArticulosDestacados";
import { GiftComponent } from "../components/GiftComponent";
import { PlacaTipo1, PlacaTipo1Options } from "../components/PlacaTipo1";
import { PlacaTipo2, PlacaTipo2Options } from "../components/PlacaTipo2";
import {
  Wallpaper2Options,
  WallpaperTipo2,
} from "../components/WallpaperTipo2";

const wallpaperInfo1: Wallpaper2Options = {
  image: wallpaperTalisman,
  title: "Talismán Digital",
  description: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  ],
  button: "Comprar",
  height: "80vh",
};

const wallpaperInfo2: Wallpaper2Options = {
  image: wallpaperColgante,

  height: "80vh",
};
const wallpaperInfo3: Wallpaper2Options = {
  image: wallpaperColgante2,

  height: "100vh",
};

const infoPlaca: PlacaTipo1Options = {
  image: wallpaperTalisman,
  title: "Talismán Digital",
  description: [
    "Las piedras que empleamos son auténticas y están  meticulosamente talladas a mano, lo que significa que cada talismán será verdaderamente único, igual que tu.",
    "Podrás configurar tu propio talismán seleccionando cada elemento: modelo, material, piedra, intención",
  ],
  arrowRightButton: "Crea tu talismán ahora",
};

const infoPlaca2: PlacaTipo2Options = {
  image: talismanFisico,
  title: "Talismán Analógico",
  description: [
    "Tu talismán estará acompañado de un sonido especial, algo que podrás tocar siempre que lo necesites. Este sonido será tu compañero en momentos de meditación, para volver a tu centro, o para enfocar tus intenciones.",
  ],
  button: "Comprar talismán analógico",
};

export function Tienda() {
  window.scrollTo(0, 0);

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1;
    }
  }, [videoRef]);

  const navigatge = useNavigate();

  const linkToComprarTalismanAnalogico = () => {
    navigatge("/comprar-talisman-analogico");
  };

  const linkToComprarTalismanDigital = () => {
    navigatge("/comprar-talisman-digital");
  };
  return (
    <main className="tienda-container efectoReveal">
      <BackgroundVideo />
      <div className="tienda-portada-container">
        <div className="tienda-portada-center-container">
          <div className="tienda-portada-internal-container">
            <video
              className="video-talisman"
              autoPlay
              muted
              loop
              ref={videoRef}
            >
              <source src={videoTalisman} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="tienda-portada-internal-info-container right">
              <h4>Talismán digital</h4>
              <Button
                text="Comprar ahora"
                onClick={linkToComprarTalismanDigital}
              />
            </div>
          </div>
          <div className="tienda-portada-internal-container">
            <img src={talismanFisico1} alt="Talisman fisico" />
            <div className="tienda-portada-internal-info-container">
              <h4>Talismán analógico</h4>
              <Button
                text="Comprar ahora"
                onClick={linkToComprarTalismanAnalogico}
              />
            </div>
          </div>
        </div>
      </div>

      <WallpaperTipo2
        {...wallpaperInfo1}
        onClick={linkToComprarTalismanDigital}
      />
      <PlacaTipo1 {...infoPlaca} onClick={linkToComprarTalismanDigital} />
      <h3>Articulos destacados</h3>
      <ArticulosDestacados
        talismanes={ejemploTalismanes}
        button="Comprar talismán digital"
        onClick={linkToComprarTalismanDigital}
      />
      <WallpaperTipo2 {...wallpaperInfo2} />
      <PlacaTipo2 {...infoPlaca2} onClick={linkToComprarTalismanAnalogico} />

      <div className="tienda-talismanes-analogicos-container">
        <div className="tienda-talismanes-analogicos-image-container">
          <img src={talismanFisico1} alt="Talisman-vista1" />
        </div>
        <div className="tienda-talismanes-analogicos-image-container">
          <img src={talismanFisico} alt="Talisman-vista2" />
        </div>
      </div>

      <WallpaperTipo2 {...wallpaperInfo3} />
      <h3>Articulos destacados</h3>
      <ArticulosDestacados
        talismanes={ejemploTalismanesAnalogicos}
        button="Comprar talismán analógico"
        onClick={linkToComprarTalismanAnalogico}
      />
      <video className="video-informativo" controls>
        <source src={videoFondo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <GiftComponent />
    </main>
  );
}
