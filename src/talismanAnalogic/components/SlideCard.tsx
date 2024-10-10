import { LazyImage } from "../../ui/components";

export interface SliderCardOptions {
  image: string;
  title: string;
 
}

export function SliderCard({ image, title}: SliderCardOptions) {
  return (
    <li className="card">
      <div className="image">
        <LazyImage src={image} alt={title} draggable={false} />
      </div>
      <h4>{title}</h4>
     
    </li>
  );
}
