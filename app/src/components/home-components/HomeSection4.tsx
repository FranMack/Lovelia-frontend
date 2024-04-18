import talisman from "../../assets/images/talisman-fisico.png"
import talisman2 from "../../assets/images/talisman-fisico2.png"
import { Button } from "../../commons/Button";

export function HomeSection4() {

  const imagesTalisman:string[]=[talisman,talisman2,talisman,talisman2]


  return (
    <section className="home-section4-container">
      <div className="section4-top-container">
        <div className="section4-top-image-container">
            <img src={talisman} alt="Tallisman-fisico" />
        </div>
        <div className="section4-top-info-container">
            <h4>Talismán Analógico</h4>
            <p>Tu talismán estará acompañado de un sonido especial, algo que podrás tocar<br/>siempre que lo necesites. Este sonido será tu compañero en momentos de<br/> meditación, para volver a tu centro, o para enfocar tus intenciones</p>
            <Button text=" Comprar Analógico"/>
        </div>

      </div>

      <div className="section4-middle-container">
        <div className="section4-middle-image-container"><img src={talisman} alt="Talisman-vista1" /></div>
        <div className="section4-middle-image-container"><img src={talisman2} alt="Talisman-vista2" /></div>
      </div>
      <div className="section4-bottom-container">
    {imagesTalisman.map((image,i)=>{
      return(<div className="section4-bottom-image-container" key={i}><img src={image} alt={`Foto talisman ${i+1}`} /></div>)
    })}
      </div>
      <div className="section4-buttom-container">
      <Button text="Comprar talismán analógico"/>
      </div>
    </section>
  );
}
