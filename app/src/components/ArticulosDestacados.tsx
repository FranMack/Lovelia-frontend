import { CardArticulosDestacados } from "../commons/CardArticulosDestacados"
import { CardArticulosDestacadosReverse } from "../commons/CardArticulosDestacadosReverse"
import { Button } from "../commons/Button"

import { ejemploTalismanAnalogicosOptions } from "../assets/images/ejemplos-talismán-analogico/ejemplosTalismanes"

interface TalismanExamplesOptions{
    talismanes:ejemploTalismanAnalogicosOptions[],
    button?:string
}

export function ArticulosDestacados({talismanes,button}:TalismanExamplesOptions){

  return ( 
    <div className="articulosDestacados-container">
  <div className="articulosDestacados-ejemplos-container">
        {talismanes.map((talisman,i)=>{
          if(i%2===0){
            return( <CardArticulosDestacados key={i} {...talisman}/>)
        }
        else{
            return(  <CardArticulosDestacadosReverse key={i} {...talisman}/>)
        }
        })}

      </div>
     {button && <Button text={button}/>}
      </div>
      
      )
}