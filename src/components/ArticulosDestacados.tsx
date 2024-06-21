import { CardArticulosDestacados } from "../commons/CardArticulosDestacados"
import { CardArticulosDestacadosReverse } from "../commons/CardArticulosDestacadosReverse"
import { Button } from "../commons/Button"

import { ejemploTalismanAnalogicosOptions } from "../assets/images/ejemplos-talismán-analogico/ejemplosTalismanes"

interface ArticulosDestacadosOptions{
    talismanes:ejemploTalismanAnalogicosOptions[],
    button?:string,
    onClick?:()=>void
}

export function ArticulosDestacados({talismanes,button,onClick}:ArticulosDestacadosOptions){

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
     {button && <Button text={button} onClick={onClick}/>}
      </div>
      
      )
}