import wallpaper from "../../assets/images/Reencontrate-wallpaper.png"
import caracol from "../../assets/images/imagen-caracol.png"
import { ButtonArrowRight } from "../../commons/ButtonArrowRight"
import videoTalisman from "../../assets/videos/videoFondo.mp4"


export function HomeSection7(){
return(
    <section className="section7-container">
        <div className="section7-wallpaper-container">
                <img src={wallpaper} alt="Imagen playa" />
                <div className="section7-wallpaper-info">
                    <h5>Reencuentrate</h5>
                    <p>Descubre historias, pensamiento,<br/>sentimientos y más.</p>
                </div>
            </div>

            <div className="section7-top-container">
        <div className="section7-top-image-container">
            <img src={caracol} alt="Tallisman-fisico" />
        </div>
        <div className="section7-top-info-container">
            <h4>¿Cómo co-crear tu realidad?</h4>
            <h6>Descubre historias,pensamientos,sentimientos y más</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis<br/> repellat numquam, ea omnis deserunt fuga velit repellendus<br/>  voluptates reprehenderit, officia earum nulla  minus ut ex<br/> debitis ipsum dicta beatae quasi.</p>

          <ButtonArrowRight text="Leer más" color="#6f3289"/>
        
        </div>

      </div>

      <div className="section7-video-container">

      <video controls>
        <source src={videoTalisman} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h6>
        ¿Qué es un talismán?
      </h6>
      <p>Un talismán es rememorar, tener presente, un indicio de nuestras intenciones e infinitas posibilidades, es un lugar seguro donde volver y envocarte para lograr tu proposito</p>
      </div>
    </section>
)
}