import { MusicCarruselCard } from "../commons/MusicCarruselCard"
import { infoCarrusel } from "../assets/images/carrusel-intenciones/infoCarrusel"
export function MusicCarrusel(){

    return (
        <div className="musicCarrusel-container">

            {infoCarrusel.map((card,i)=>{
                return(
                   <MusicCarruselCard key={i} image={card.image} title={card.title} text={card.text}/>)

            })}
            

        </div>
    )
}