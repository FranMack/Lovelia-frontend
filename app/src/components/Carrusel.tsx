import { CarruselCard } from "../commons/CarruselCard"
import { infoCarrusel } from "../assets/images/carrusel/infoCarrusel"
export function Carrusel(){

    return (
        <div className="carrusel-container">

            {infoCarrusel.map((card,i)=>{
                return(
                   <CarruselCard key={i} image={card.image} title={card.title} text={card.text}/>)

            })}
            

        </div>
    )
}