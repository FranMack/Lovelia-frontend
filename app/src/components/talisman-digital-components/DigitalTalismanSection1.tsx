import { Button } from "../../commons/Button"
import talismanDigital from "../../assets/images/talisman-digital.png"
import videoHome from "../../assets/videos/videoHome.mp4"
import { ButtonArrowDown } from "../../commons/ButtonArrowDown"
export function DigitalTalismanSection1(){

    return(<>
    <section className="analogTalisman-section1-container">
    <video autoPlay muted loop>
        <source src={videoHome} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
     <div className="analogTalisman-section1-center-container">
     
        <div className="analogTalisman-section1-center-info-container">
            <h4>Talismán Digital</h4>
            <p>El talisman digital es una representación animada de tu ADN energético.</p>
            <p>EPara diseñarla, combinamos tecnología y saberes antiguos generando un espacio de meditación visual, auditiva y kinestésica, que te posibilita volver a tu centro siempre que lo desees o lo necesites. </p>
            <p>Es un espacio que facilita conectar con tu energía y con tu potencial infinito.</p>
            
            <Button text="Comprar talismán digital"/>
        </div>
        <div className="analogTalisman-section1-center-image-container">
            <img src={talismanDigital} alt="Tallisman-fisico" />
        </div>

      </div>
      <div className="auxiliar-container">
        <ButtonArrowDown title="Descubre más"/>
        </div>
      </section>
    </>)
}