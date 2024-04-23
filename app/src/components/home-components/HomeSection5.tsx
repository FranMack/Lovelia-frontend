import intensiones from "../../assets/images/intenciones-wallpaper.png"
import { ButtonArrowRight } from "../../commons/ButtonArrowRight"
import { Carrusel } from "../Carrusel"
import { Slider } from "../Slider"
export function HomeSection5(){
    return (
        <section className="section5-container">

            <div className="section5-wallpaper-container">
                <img src={intensiones} alt="Imagen playa" />
                <div className="section5-wallpaper-info">
                    <h5>El poder de la intención</h5>
                    <h6>Descubre historias,pensamientos,sentimientos, y más</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque culpa sunt aspernatur dignissimos accusantium repellendus cumque exercitationem. Laborum ullam nisi inventore, obcaecati magni perspiciatis voluptatem voluptas cum quam itaque temporibus.</p>
            <ButtonArrowRight text="Ver más" color="#ffffff"/>
                </div>
            </div>

            <div className="section5-title-container">
                <div className="section5-tittle-info-container">
                    <h4>Intenciones lovelia</h4>
                    <p>Música, videos y meditaciones guiadas.</p>
                </div>
                <ButtonArrowRight text="Explorar todo" color="#6f3289"/>
            </div>

            <Carrusel/>

            <div className="section5-title-container">
                <div className="section5-tittle-info-container">
                    <h4>Meditaciones lovelia</h4>
                    <p>Nuestras recomendaciones, contenido para tu día a día.</p>
                </div>
                <ButtonArrowRight text="Explora todos los sonidos" color="#6f3289"/>
            </div>
            <Slider/>

        </section>
    )
}