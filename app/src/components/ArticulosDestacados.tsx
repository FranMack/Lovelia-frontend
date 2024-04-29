import { CardArticulosDestacados } from "../commons/CardArticulosDestacados"
import { CardArticulosDestacadosReverse } from "../commons/CardArticulosDestacadosReverse"

import { ejemploTalismanAnalogicosOptions } from "../assets/images/ejemplos-talismán-analogico/ejemplosTalismanes"

interface TalismanExamplesOptions{
    talismanes:ejemploTalismanAnalogicosOptions[]
}

export function ArticulosDestacados({talismanes}:TalismanExamplesOptions){

  return ( <div className="articulosDestacados-ejemplos-container">
        {talismanes.map((talisman,i)=>{
          if(i%2===0){
            return( <CardArticulosDestacados key={i} {...talisman}/>)
        }
        else{
            return(  <CardArticulosDestacadosReverse key={i} {...talisman}/>)
        }
        })}

      </div>)
}