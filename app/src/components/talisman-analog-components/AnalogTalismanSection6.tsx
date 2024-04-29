import wallpaper from "../../assets/images/wallpaper-activar-talisman.png";
import historia from "../../assets/images/imagen-historia.png";
import { ButtonArrowRight } from "../../commons/ButtonArrowRight";
import { PlacaTipo1 } from "../PlacaTipo1";
import { PlacaTipo1Options } from "../PlacaTipo1";


const infoPlacaTipo1: PlacaTipo1Options = {
  image: historia,
  title: " La historia detrás de nuestra magia",
  arrowRightButton: "Leer mas",
  description: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  ],
  direction: "right",
  
};



export function AnalogTalismanSection6() {
  return (
    <section className="analogTalisman-section6-container">
      <div className="analogTalisman-section6-wallpaper-container">
        <img src={wallpaper} alt="Talisman" />
        <div className="analogTalisman-section6-wallpaper-info">
          <h5>Activa tu Talismán</h5>
          <p>
            <span>✔</span>Regístrate en lovelia, haciendo click aquí.
          </p>
          <p>
            <span>✔</span>Regístrate en lovelia, haciendo click aquí.
          </p>
          <p>
            <span>✔</span>Con la compra recibirás un código.
          </p>
          <p>
            <span>✔</span>Ingresa en tu perfil de talisman, ingresa el código y
            listo!
          </p>
        </div>
      </div>

      <PlacaTipo1 {...infoPlacaTipo1} />
    </section>
  );
}
