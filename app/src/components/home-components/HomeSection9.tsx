import { articulos } from "../../assets/images/articulos-destacados/infoArticulos"
import { ButtonArrowRight } from "../../commons/ButtonArrowRight"
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

            <div className="section9-articulos-container">
             {articulos.map((articulo,i)=>{
                return(
                    <div className="section9-articulo-card" key={i}>

                        <img src={articulo.image} alt={articulo.tittle} />

                        <h6>{articulo.author}</h6>
                        <h4>{articulo.tittle}</h4>
                        <p>{articulo.date}</p>


                    </div>
                )
             })}
            </div>

    </section>)
}