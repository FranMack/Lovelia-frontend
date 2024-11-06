import { GridMeditations } from "../components/GridMeditations";
import elipses from "../assets/elipses.webp";

const meditations = [
  { color: "#E7C8BB", title: "Amor incondicional", image: "",meditationURL:"https://lovelia.org/public/activation/activationExample.mp4" },
  { color: "#ECE976", title: "Aquí y Ahora", image: "",meditationURL:"https://lovelia.org/public/activation/activationExample.mp4" },
  { color: "#8AC9C0", title: "Potencial infinito", image: "",meditationURL:"https://lovelia.org/public/activation/activationExample.mp4" },
  { color: "#D58630", title: "Yo verdadero", image: "",meditationURL:"https://lovelia.org/public/activation/activationExample.mp4" },
  { color: "#662A80", title: "Gratitud", image: "",meditationURL:"https://lovelia.org/public/activation/activationExample.mp4" },
  { color: "#BCD0EE", title: "Coraje", image: "",meditationURL:"https://lovelia.org/public/activation/activationExample.mp4" },
  { color: "#9CC374", title: "Sabiduría de la incertidumbre", image: "",meditationURL:"https://lovelia.org/public/activation/activationExample.mp4" },
  { color: "#E73BD6", title: "Abundancia", image: "",meditationURL:"https://lovelia.org/public/activation/activationExample.mp4" },
  { color: "#E7C8BB", title: "Meditación X", image: elipses,meditationURL:"https://lovelia.org/public/activation/activationExample.mp4" },
  { color: "#ECE976", title: "Meditación X", image: elipses,meditationURL:"https://lovelia.org/public/activation/activationExample.mp4" },
  { color: "#8AC9C0", title: "Meditación X", image: elipses,meditationURL:"https://lovelia.org/public/activation/activationExample.mp4" },
  { color: "#D58630", title: "Meditación X", image: elipses,meditationURL:"https://lovelia.org/public/activation/activationExample.mp4" },
  { color: "#662A80", title: "Meditación X", image: elipses,meditationURL:"https://lovelia.org/public/activation/activationExample.mp4" },
  { color: "#BCD0EE", title: "Meditación X", image: elipses,meditationURL:"https://lovelia.org/public/activation/activationExample.mp4" },
  { color: "#9CC374", title: "Meditación X", image: elipses,meditationURL:"https://lovelia.org/public/activation/activationExample.mp4" },
  { color: "#E73BD6", title: "Meditación X", image: elipses,meditationURL:"https://lovelia.org/public/activation/activationExample.mp4" },
];
export const Meditations3 = () => {
  return (
    <section className="section3-meditations-container">
      <h3>MEDITACIONES LOVELIA</h3>

      <GridMeditations meditations={meditations} />
    </section>
  );
};
