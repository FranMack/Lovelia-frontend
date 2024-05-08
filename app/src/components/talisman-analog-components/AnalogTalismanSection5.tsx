import colgateWallpaper from "../../assets/images/imagen-colgante2.png";
import talismanFisico from "../../assets/images/talisman-fisico.png";
import { ButtonArrowRight } from "../../commons/ButtonArrowRight";
import { CarruselIntensiones } from "../CarruselIntensiones";
import { TitleComponent } from "../../commons/TitleComponent";


const titleEligeTuIntencion={
  title:"Elige tu intención",
  description:"Música, videos y meditaciones guiadas.",
  buttonText:"Intenciones lovelia"
}

export function AnalogTalismanSection5() {
  return (
    <section className="analogTalisman-section5-container">
      <div
        className="analogTalisman-section5-wallpaper-container"
        style={{ background: "none" }}
      >
        <img src={colgateWallpaper} alt="Talisman" />
      </div>

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

          <ButtonArrowRight text="Crea tu talismán ahora" color="#6f3289" />
        </div>
      </div>

      <TitleComponent {...titleEligeTuIntencion}/>

      <CarruselIntensiones />
    </section>
  );
}
