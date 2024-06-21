import { useContext } from "react";
import { IntensionesSection1 } from "../components/intensiones-components/IntensionesSection1"
import { IntensionesSection2 } from "../components/intensiones-components/IntensionesSection2"
import { IntencionesSection3 } from "../components/intensiones-components/IntensionesSection3"
import { ShopingCartContext } from "../context/modalShopingCart";
import { BackgroundVideo } from "../commons/BackgroundVideo";
export function Intensiones(){
  const{menuOpen}=useContext(ShopingCartContext)
  window.scrollTo(0, 0);
  return (
    <main className={menuOpen ? "viewport-background":"" } >
      <BackgroundVideo/>
        <IntensionesSection1/>
        <IntensionesSection2/>
        <IntencionesSection3/>
    
      </main>
    )
}

