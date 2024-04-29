import talismanDigital from "../../assets/images/talisman-digital.png";
import { ButtonArrowRight } from "../../commons/ButtonArrowRight";
import { GiftComponent } from "../GiftComponent";
export function AnalogTalismanSection7() {
  return (
    <section className="analogTalisman-section7-container">
      <div className="analogTalisman-section7-top-conteiner">
        <h3>Talismanes lovelia</h3>
        <div className="analogTalisman-section7-image-top-conteiner">
          <img src={talismanDigital} alt="Talisman digital" />
        </div>
        <h4>Talismán digital</h4>
      </div>
      <ButtonArrowRight
        text="Descubre más sobre el talismán digital"
        color="#6f3289"
      />

      <GiftComponent/>
    </section>
  );
}
