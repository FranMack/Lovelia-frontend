import { useContext } from "react"
import { AnalogTalismanSection1 } from "../components/talisman-analog-components/AnalogTalismanSection1"
import { AnalogTalismanSection2 } from "../components/talisman-analog-components/AnalogTalismanSection2"
import { AnalogTalismanSection3 } from "../components/talisman-analog-components/AnalogTalismanSection3"
import { AnalogTalismanSection4 } from "../components/talisman-analog-components/AnalogTalismanSection4"
import { AnalogTalismanSection5 } from "../components/talisman-analog-components/AnalogTalismanSection5"
import { AnalogTalismanSection6 } from "../components/talisman-analog-components/AnalogTalismanSection6"
import { AnalogTalismanSection7 } from "../components/talisman-analog-components/AnalogTalismanSection7"
import { ShopingCartContext } from "../context/modalShopingCart"
import { BackgroundVideo } from "../commons/BackgroundVideo"
export function AnalogTalisman(){
  
    window.scrollTo(0, 0);

    const{menuOpen}=useContext(ShopingCartContext)
      
      return (
        <main className={menuOpen ? "viewport-background":"" } >
            <BackgroundVideo/>
<AnalogTalismanSection1/>
<AnalogTalismanSection2/>
<AnalogTalismanSection3/>
<AnalogTalismanSection4/>
<AnalogTalismanSection5/>
<AnalogTalismanSection6/>
<AnalogTalismanSection7/>
        </main>
    )
}