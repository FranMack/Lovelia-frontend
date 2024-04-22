import { ButtonArrowRight } from "../../commons/ButtonArrowRight"
import { infoTalleres } from "../../assets/images/talleres/infoTallers"
import creaTuRealizad from "../../assets/images/imagen-crea-tu-realidad.png"

export function HomeSection8(){

    return (<section className="section7-container">

<div className="section8-title-container">
                <div className="section8-tittle-info-container">
                    <h4>Talleres</h4>
                    <p>Nuestro espacio de aprendisaje.</p>
                </div>
                <ButtonArrowRight text="Ver todos los talleres" color="#6f3289"/>
            </div>

            <div className="section8-talleres-container">
                {infoTalleres.map((taller,i)=>{
                    return(<div className="section8-talleres-card" key={i}><img src={taller.image} alt={taller.name} />
                    <div className="talleres-card-info-container">
                        <h4>{taller.name}</h4>
                        <p>{taller.date}</p>
                    </div>


                    
                    </div>)
                })}
            </div>

            <div className="section8-button-container">
        
        <div className="section8-button-info-container">
            <h4>¿Cómo co-crear tu realidad?</h4>
            <h6>Descubre historias,pensamientos,sentimientos y más</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis<br/> repellat numquam, ea omnis deserunt fuga velit repellendus<br/>  voluptates reprehenderit, officia earum nulla  minus ut ex<br/> debitis ipsum dicta beatae quasi.</p>

          <ButtonArrowRight text="Ver más sobre este taller" color="#6f3289"/>
        
        </div>
        <div className="section8-button-image-container">
            <img src={creaTuRealizad} alt="Tallisman-fisico" />
        </div>

      </div>

    </section>)
}