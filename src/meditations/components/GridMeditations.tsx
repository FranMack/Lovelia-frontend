import { PlayIcon } from "../../assets/icons/icons";
import { LazyImage } from "../../ui/components";

interface MeditationOptions {
  color: string;
  title: string;
  image?: string;
}

interface Meditations {
  meditations: MeditationOptions[];
}

export const GridMeditations = ({ meditations }: Meditations) => {
  return (
    <div className="grid-meditations-container">
      {meditations.map((item, i) => {
        return (
          <div key={i} className="grid-meditations-item">
            <div
              className="grid-meditations-color-container"
              style={{ backgroundColor: item.color }}
            >
              {item.image && <LazyImage src={item.image} alt="elipses" />}
              <div className="icon-container">
                <PlayIcon />
              </div>
            </div>
            <p>{item.title}</p>
          </div>
        );
      })}
    </div>
  );
};
