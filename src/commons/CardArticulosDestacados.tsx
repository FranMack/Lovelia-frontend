import { ejemploTalismanAnalogicosOptions } from "../assets/images/ejemplos-talisman-analogico/ejemplosTalismanes";

export function CardArticulosDestacados({
  title,
  description,
  image,
}: ejemploTalismanAnalogicosOptions) {
  return (
    <div className="articuloDestacado-card">
      <img src={image} alt={title} />
      <div className="articuloDestacado-card-info-container">
        <h4>{title}</h4>
        <p>{description}</p>
        <button>Comprar</button>
      </div>
    </div>
  );
}
