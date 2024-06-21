import { ejemploTalismanAnalogicosOptions } from "../assets/images/ejemplos-talismán-analogico/ejemplosTalismanes"

export function CardArticulosDestacadosReverse({title,description,image}:ejemploTalismanAnalogicosOptions){

    return (
        <div className="articuloDestacado-card-reverse" >
        <img src={image} alt={title} />
        <div className="articuloDestacado-card-info-container">
        <h4>{title}</h4>
        <p>{description}</p>
      <button>Comprar</button>
        </div>
    </div>
    )
}