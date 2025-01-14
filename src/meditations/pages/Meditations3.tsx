import {meditationsInfo} from '../assets/meditationsInfo';
import {GridMeditations} from '../components/GridMeditations';
export const Meditations3 = () => {
  return (
    <section className="section3-meditations-container">
      <h3>MEDITACIONES LOVELIA</h3>

      <GridMeditations meditations={meditationsInfo} />
    </section>
  );
};
