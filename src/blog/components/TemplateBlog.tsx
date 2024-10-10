import { ButtonArrowRight2 } from "../../ui/components/ButtonArrowRight2";
import { LazyImage } from "../../ui/components";

export interface TemplateBlogOptions {
  image: string;
  title: string;
  secundaryTitle?: string;
  description: string[];
  arrowRightButton?: string;
  direction: "left" | "right";
  onClick?: () => void;
}

export function TemplateBlog({
  image,
  title,
  secundaryTitle,
  description,
  arrowRightButton,
  onClick,
}: TemplateBlogOptions) {
  return (
    <div className="templateBlog-container">
      <div className="templateBlog-image-container">
        <LazyImage src={image} alt="Tallisman-fisico" />
      </div>
      <div className="templateBlog-info-container">
        <h4>{title}</h4>
        <h6>{secundaryTitle}</h6>
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
