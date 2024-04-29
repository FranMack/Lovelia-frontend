import { Button } from "../../commons/Button"
import talismanFisico from "../../assets/images/talisman-fisico.png"
import videoHome from "../../assets/videos/videoHome.mp4"
import { ButtonArrowDown } from "../../commons/ButtonArrowDown"
export function AnalogTalismanSection1(){

    return(<>
    <section className="analogTalisman-section1-container">
    <video autoPlay muted loop>
        <source src={videoHome} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
     <div className="analogTalisman-section1-center-container">
     
        <div className="analogTalisman-section1-center-info-container">
            <h4>Talismán Analógico</h4>
            <p>Los talismanes analógicos lovelia son una manifestación física de nuestras intenciones, un reflejo de nuestro poder interior y de la maravillosa capacidad que todos poseemos para co-crear nuestra propia realidad.</p>
            <p>En un mundo en el que cada uno de nosotros tiene el poder de moldear su propio rumbo y tiene el poder de escribir su propia historia, Lovelia te invita con cariño a diseñar tu propio talismán.</p>
            
            <Button text="Comprar talismán analógico"/>
        </div>
        <div className="analogTalisman-section1-center-image-container">
            <img src={talismanFisico} alt="Tallisman-fisico" />
        </div>

      </div>
      <div className="auxiliar-container">
        <ButtonArrowDown title="Descubre más"/>
        </div>
      </section>
    </>)
}