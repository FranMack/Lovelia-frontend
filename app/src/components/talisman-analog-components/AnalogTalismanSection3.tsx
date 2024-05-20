import talisman from "../../assets/images/talisman-fisico.png"
import { Button } from "../../commons/Button";
import { TalismanesGrilla } from "../TalismanesGrilla";
import { PlacaTipo1 } from "../PlacaTipo1";
import { PlacaTipo1Options } from "../PlacaTipo1";
import { useNavigate } from "react-router-dom";


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
  const navigatge=useNavigate();

  const linkToComprarTalisman=()=>{
navigatge("/comprar-talisman-analogico")
  }



  return (
    <section className="analogTalisman-section3-container">

      <PlacaTipo1 {...infoPlacaTipo1} onClick={linkToComprarTalisman}/>

      <TalismanesGrilla/>
     
   
    </section>
  );
}
