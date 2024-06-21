import { DestacadosBlog } from "../DestacadosBlog"
import { TitleComponent } from "../../commons/TitleComponent"



export function HomeSection9(){

    const titleArticulosDestacados={
        title:"Artículos destacados",
        description:"Lectura para amplizar tu horizonte.",
        buttonText:"Ver todos los articulos"
    }

   
    return(
    
    <section className="section7-container">

        <TitleComponent {...titleArticulosDestacados}/>

           <DestacadosBlog/>
        

    </section>)
}