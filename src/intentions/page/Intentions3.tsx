import { infoIntenciones } from "../assets/infoIntentions";
import { GridIntentions } from "../components/GridIntentions";

export const Intentions3 = () => {
  return (
    <section className="section3-intentions-container">
      <h3>INTENCIONES LOVELIA</h3>
      <GridIntentions intentions={infoIntenciones} />
    </section>
  );
};
