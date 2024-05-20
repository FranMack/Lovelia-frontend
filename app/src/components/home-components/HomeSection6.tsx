import talismanwallpaper from "../../assets/images/talisman-wallpaper.png";
import { Button } from "../../commons/Button";
import { ejemploTalismanes } from "../../assets/images/ejemplos-talismanes/ejemplosTalismanes";
import { ArticulosDestacados } from "../ArticulosDestacados";
import { PlacaTipo1 } from "../PlacaTipo1";
import { Wallpaper2Options, WallpaperTipo2 } from "../WallpaperTipo2";
import { useNavigate } from "react-router-dom";


const infoPlacaTipo1 = {
  image: talismanwallpaper,
  title: "Talismán digital",
  arrowRightButton: "Crear tu talismá",
  description: [
    " Tu talismán estará acompañado de un sonido especial, algo que podrás tocar siempre que \n lo necesites. Este sonido será tu compañero en momentos de meditación, para volver a tu centro, o para enfocartus intenciones",
  ],
  direction:"left",
  
};

const infoWallpaper:Wallpaper2Options={
  image:talismanwallpaper,
  button:"Comprar",
  title:"Talismán digital",
  description:["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]
}

export function HomeSection6() {
  const navigate= useNavigate();
  const linkToComprarTalisman=()=>{
    navigate("/comprar-talisman-digital")
  }
  return (
    <section className="section6-container">
     
      <WallpaperTipo2 {...infoWallpaper} onClick={linkToComprarTalisman}/>

      <PlacaTipo1 {...infoPlacaTipo1} onClick={linkToComprarTalisman} />

      <ArticulosDestacados talismanes={ejemploTalismanes} onClick={linkToComprarTalisman} button="Comprar talismán digital"/>
      
    </section>
  );
}
