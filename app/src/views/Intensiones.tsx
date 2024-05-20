import { IntensionesSection1 } from "../components/intensiones-components/IntensionesSection1"
import { IntensionesSection2 } from "../components/intensiones-components/IntensionesSection2"
import { IntencionesSection3 } from "../components/intensiones-components/IntensionesSection3"
export function Intensiones(){
  window.scrollTo(0, 0);
    return(
      <main>
        <IntensionesSection1/>
        <IntensionesSection2/>
        <IntencionesSection3/>
    
      </main>
    )
}

