import { useNavigate } from "react-router-dom";
import colgateWallpaper from "../../assets/images/imagen-colgante2.png";
import talismanFisico from "../../assets/images/talisman-fisico.png";
import { ButtonArrowRight } from "../../commons/ButtonArrowRight";
import { TitleComponent } from "../../commons/TitleComponent";
import { CarruselIntensiones } from "../CarruselIntensiones";
import { Wallpaper1Options, WallpaperTipo1 } from "../WallpaperTipo1";

const infoWallpaper1: Wallpaper1Options = {
  image: colgateWallpaper,
  height: "90vh",
};

const titleEligeTuIntencion = {
  title: "Elige tu intención",
  description: "Música, videos y meditaciones guiadas.",
  buttonText: "Intenciones lovelia",
};

export function AnalogTalismanSection5() {
  const navigatge = useNavigate();

  const linkToComprarTalisman = () => {
    navigatge("/comprar-talisman-analogico");
  };

  const linkToIntensiones = () => {
    navigatge("/intensiones");
  };
  return (
    <section className="analogTalisman-section5-container">
      <WallpaperTipo1 {...infoWallpaper1} />

      <div className="analogTalisman-section5-center-container">
        <div className="analogTalisman-section5-center-image-container">
          <img src={talismanFisico} alt="Tallisman-fisico" />
        </div>
        <div className="analogTalisman-section5-center-info-container">
          <h4>Variantes de colgado</h4>
          <h5>Cadena de oro/plata</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <h5>Tiento de cuero</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <ButtonArrowRight
            onClick={linkToComprarTalisman}
            text="Crea tu talismán ahora"
            color="#6f3289"
          />
        </div>
      </div>

      <TitleComponent {...titleEligeTuIntencion} onClick={linkToIntensiones} />

      <CarruselIntensiones />
    </section>
  );
}
