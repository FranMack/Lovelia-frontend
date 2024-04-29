import talisman from "../../assets/images/talisman-fisico.png"
import talisman2 from "../../assets/images/talisman-fisico2.png"
import { ejemploTalismanesAnalogicos } from "../../assets/images/ejemplos-talismán-analogico/ejemplosTalismanes";
import { Button } from "../../commons/Button";
import { PlacaTipo2 } from "../PlacaTipo2";


const infoPlacaTipo2 = {
  image: talisman,
  title: "Talismán Analógico",
  button: "Comprar Analógico",
  description: [
    " Las piedras que empleamos son auténticas y están meticulosamente talladas a mano, lo que significa que cada talismán será verdaderamente único, igual que tu.",
    "Podrás configurar tu propio talismán seleccionando cada elemento: modelo,material, piedra, intención."
  ],
};


export function HomeSection4() {



  return (
    <section className="home-section4-container">
     
      <PlacaTipo2 {...infoPlacaTipo2}/>

      <div className="section4-middle-container">
        <div className="section4-middle-image-container"><img src={talisman} alt="Talisman-vista1" /></div>
        <div className="section4-middle-image-container"><img src={talisman2} alt="Talisman-vista2" /></div>
      </div>
      <div className="section4-bottom-container">
    {ejemploTalismanesAnalogicos.map((talisman,i)=>{
      return(<div className="section4-bottom-image-container" key={i}><img src={talisman.image} alt={talisman.title} /></div>)
    })}
      </div>
      <div className="section4-buttom-container">
      <Button text="Comprar talismán analógico"/>
      </div>
    </section>
  );
}
