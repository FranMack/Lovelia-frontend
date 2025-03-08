import { ButtonArrowRight2 } from "../../ui/components/ButtonArrowRight2";
import { LazyImage } from "../../ui/components";
import { useScrollReveal } from "../../hooks/useScrollReveal";

export interface TemplateBlogOptions {
  image: string;
  title: string;
  description: string[];
  arrowRightButton?: string;
  direction: "left" | "right";
  onClick?: () => void;
}

export function TemplateBlog({
  image,
  title,
  description,
  arrowRightButton,
  onClick,
  direction
}: TemplateBlogOptions) {


   const animationRefLeft = useScrollReveal<HTMLDivElement>('leftReveal');
    const animationRefRight = useScrollReveal<HTMLDivElement>('rightReveal');
  return (
    <div ref={direction==="left"?animationRefLeft:animationRefRight } className="templateBlog-container">
      <div className="templateBlog-image-container">
        <LazyImage src={image} alt="Tallisman-fÍsico" />
      </div>
      <div className="templateBlog-info-container">
        <h4>{title}</h4>
        {description.map((item, i) => {
          return <p key={i}>{item}</p>;
        })}

        <div className="button-container">
          <ButtonArrowRight2
            text={arrowRightButton!}
            color="#EDC7B9"
            onClick={onClick}
          />
        </div>
      </div>
    </div>
  );
}
