import talisman from "../../assets/images/talisman-fisico.png"
import talisman2 from "../../assets/images/talisman-fisico2.png"
import { ejemploTalismanesAnalogicos } from "../../assets/images/ejemplos-talismán-analogico/ejemplosTalismanes";
import { Button } from "../../commons/Button";
import { ButtonArrowRight } from "../../commons/ButtonArrowRight";
import talismanFisico from "../../assets/images/talisman-fisico.png";
import { PlacaTipo1 } from "../PlacaTipo1";
import { PlacaTipo1Options } from "../PlacaTipo1";


const infoPlacaTipo1:PlacaTipo1Options = {
  image: talisman,
  title: "Personaliza tu talismán",
  arrowRightButton: "Crea tu talismán ahora",
  description: [
    "Las piedras que empleamos son auténticas y están meticulosamente talladas a mano, lo que significa que cada talismán será verdaderamente único, igual que tu.",
    "Podrás configurar tu propio talismán seleccionando cada elemento: modelo, material, piedra, intención"
  ],
  direction:"left"
};

export function AnalogTalismanSection3() {



  return (
    <section className="analogTalisman-section3-container">

      <PlacaTipo1 {...infoPlacaTipo1}/>

      <div className="analogTalisman-section3-top-container">
        <div className="analogTalisman-section3-top-image-container"><img src={talisman} alt="Talisman-vista1" /></div>
        <div className="analogTalisman-section3-top-image-container"><img src={talisman2} alt="Talisman-vista2" /></div>
      </div>
      <div className="analogTalisman-section3-bottom-container">
    {ejemploTalismanesAnalogicos.map((talisman,i)=>{
      return(<div className="section4-bottom-image-container" key={i}><img src={talisman.image} alt={talisman.title} /></div>)
    })}
      </div>
  
      <Button text="Comprar talismán analógico"/>
   
    </section>
  );
}
