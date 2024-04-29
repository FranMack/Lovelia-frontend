import talisman from "../../assets/images/talisman-wallpaper.png";
import { Button } from "../../commons/Button";
import { ejemploTalismanes } from "../../assets/images/ejemplos-talismanes/ejemplosTalismanes";
import { ArticulosDestacados } from "../ArticulosDestacados";
import { PlacaTipo1 } from "../PlacaTipo1";


const infoPlacaTipo1 = {
  image: talisman,
  title: "Talismán digital",
  arrowRightButton: "Crear tu talismá",
  description: [
    " Tu talismán estará acompañado de un sonido especial, algo que podrás tocar siempre que \n lo necesites. Este sonido será tu compañero en momentos de meditación, para volver a tu centro, o para enfocartus intenciones",
  ],
  direction:"left"
};

export function HomeSection6() {
  return (
    <section className="section6-container">
      <div className="section6-wallpaper-container">
        <img src={talisman} alt="Imagen playa" />
        <div className="section6-wallpaper-info">
          <h5>Talismán digital</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Button text="Comprar" />
        </div>
      </div>

      <PlacaTipo1 {...infoPlacaTipo1} />

      <ArticulosDestacados talismanes={ejemploTalismanes} />
      <Button text="Comprar talismán digital" />
    </section>
  );
}
