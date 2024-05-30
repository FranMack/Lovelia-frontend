import { useContext } from "react";
import { DigitalTalismanSection1 } from "../components/talisman-digital-components/DigitalTalismanSection1"
import { DigitalTalismanSection2 } from "../components/talisman-digital-components/DigitalTalismanSection2"
import { DigitalTalismanSection3 } from "../components/talisman-digital-components/DigitalTalismanSection3"
import { DigitalTalismanSection4 } from "../components/talisman-digital-components/DigitalTalismanSection4"
import { ShopingCartContext } from "../context/modalShopingCart";
import { BackgroundVideo } from "../commons/BackgroundVideo";
export function DigitalTalisman(){
    window.scrollTo(0, 0);

    const{menuOpen}=useContext(ShopingCartContext)
      
      return (
        <main className={menuOpen ? "viewport-background":"" } >
            <BackgroundVideo/>
<DigitalTalismanSection1/>
<DigitalTalismanSection2/>
<DigitalTalismanSection3/>
<DigitalTalismanSection4/>
        </main>
    )
}