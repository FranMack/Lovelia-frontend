import { articulos } from "../../assets/images/articulos-destacados/infoArticulos"
import { ButtonArrowRight } from "../../commons/ButtonArrowRight"
export function HomeSection9(){

    return(
    
    <section className="section7-container">

<div className="section9-title-container">
                <div className="section9-tittle-info-container">
                    <h4>Artículos destacados</h4>
                    <p>Lectura para amplizar tu horizonte</p>
                </div>
                <ButtonArrowRight text="Ver todos los articulos" color="#6f3289"/>
            </div>

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