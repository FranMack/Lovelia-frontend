import talisman from "../../assets/images/talisman-wallpaper.png"
import { Button } from "../../commons/Button"
import { ButtonArrowRight } from "../../commons/ButtonArrowRight"
import { ejemploTalismanes } from "../../assets/images/ejemplos-talismanes/ejemplosTalismanes"

export function HomeSection6(){
    return (
        <section className="section6-container">

            <div className="section6-wallpaper-container">
                <img src={talisman} alt="Imagen playa" />
                <div className="section6-wallpaper-info">
                    <h5>Talismán digital</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <Button text="Comprar"/>
                </div>
            </div>

            <div className="section6-top-container">
        <div className="section6-top-image-container">
            <img src={talisman} alt="Tallisman-fisico" />
        </div>
        <div className="section6-top-info-container">
            <h4>Talismán Digital</h4>
            <p>Tu talismán estará acompañado de un sonido especial, algo que podrás tocar siempre que <br/>  lo necesites. Este sonido será tu compañero en momentos de meditación, para volver a tu centro, o para enfocar tus intenciones</p>

          <ButtonArrowRight text="Crear tu talismán" color="#6f3289"/>
        
        </div>

      </div>

      <div className="section6-ejemplos-container">
        {ejemploTalismanes.map((talisman,i)=>{
          if(i%2===0){
            return(  <div className="ejemplo-card" key={i}>
            <img src={talisman.image} alt={talisman.name} />
            <div className="ejemplo-card-info-container">
            <h4>{talisman.name}</h4>
            <p>{talisman.description}</p>
            <button>Comprar</button>
            </div>
        </div>)
        }
        else{
            return(  <div className="ejemplo-card-reverse" key={i}>
            <img src={talisman.image} alt={talisman.name} />
            <div className="ejemplo-card-info-container">
            <h4>{talisman.name}</h4>
            <p>{talisman.description}</p>
          <button>Comprar</button>
            </div>
        </div>)
        }
        })}

      </div>
      <Button text="Comprar talismán digital"/>


        </section>
    )
}