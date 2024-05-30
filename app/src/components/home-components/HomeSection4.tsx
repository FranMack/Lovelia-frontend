import talisman from "../../assets/images/talisman-fisico3.png"
import { PlacaTipo2 } from "../PlacaTipo2";
import { TalismanesGrilla } from "../TalismanesGrilla";
import { useNavigate } from "react-router-dom";
import { PlacaTipo2Options } from "../PlacaTipo2";


const infoPlacaTipo2:PlacaTipo2Options = {
  image: talisman,
  title: "Talismán Analógico",
  button: "Comprar Analógico",
  description: [
    " Las piedras que empleamos son auténticas y están meticulosamente talladas a mano, lo que significa que cada talismán será verdaderamente único, igual que tu.",
    "Podrás configurar tu propio talismán seleccionando cada elemento: modelo,material, piedra, intención."
  ],
};


export function HomeSection4() {

  const navigatge=useNavigate();

  const linkToComprarTalisman=()=>{
navigatge("comprar-talisman-analogico")
  }



  return (
    <section className="home-section4-container">
     
      <PlacaTipo2 {...infoPlacaTipo2} onClick={linkToComprarTalisman}/>

      <TalismanesGrilla/>
      
    </section>
  );
}
