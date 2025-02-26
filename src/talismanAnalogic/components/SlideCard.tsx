import { useNavigate } from "react-router";
import { LazyImage } from "../../ui/components";

export interface SliderCardOptions {
  image: string;
  title: string;
  path?:string
 
}

export function SliderCard({ image, title,path}: SliderCardOptions) {
  const navigate=useNavigate();
  const linkTo=(path:string)=>{
    navigate(path)
  }

  return (
    <li onClick={path ? ()=>{linkTo(path)} :()=>{}} className="card">
      <div className="image">
        <LazyImage src={image} alt={title} draggable={false} />
      </div>
      <h4>{title}</h4>
     
    </li>
  );
}
