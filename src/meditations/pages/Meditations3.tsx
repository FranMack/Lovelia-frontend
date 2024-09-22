import { GridMeditations } from "../components/GridMeditations";
import elipses from "../assets/elipses.png";

const meditations = [
  { color: "#E7C8BB", title: "Amor incondicional", image: "" },
  { color: "#ECE976", title: "Aquí y Ahora", image: "" },
  { color: "#8AC9C0", title: "Potencial infinito", image: "" },
  { color: "#D58630", title: "Yo verdadero", image: "" },
  { color: "#662A80", title: "Gratitud", image: "" },
  { color: "#BCD0EE", title: "Coraje", image: "" },
  { color: "#9CC374", title: "Sabiduría de la incertidumbre", image: "" },
  { color: "#E73BD6", title: "Abundancia", image: "" },
  { color: "#E7C8BB", title: "Meditación X", image: elipses },
  { color: "#ECE976", title: "Meditación X", image: elipses },
  { color: "#8AC9C0", title: "Meditación X", image: elipses },
  { color: "#D58630", title: "Meditación X", image: elipses },
  { color: "#662A80", title: "Meditación X", image: elipses },
  { color: "#BCD0EE", title: "Meditación X", image: elipses },
  { color: "#9CC374", title: "Meditación X", image: elipses },
  { color: "#E73BD6", title: "Meditación X", image: elipses },
];
export const Meditations3 = () => {
  return (
    <section className="section3-meditations-container">
      <h3>MEDITACIONES LOVELIA</h3>

      <GridMeditations meditations={meditations} />
    </section>
  );
};
