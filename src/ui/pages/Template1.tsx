import { ReactNode } from "react";
import { LazyImage } from "../components";
import { useScrollReveal } from "../../hooks/useScrollReveal";

export enum Position {
  Left = "left",
  Right = "right",
}

export interface Template1Options {
  image: string;
  position: Position;
  children?: ReactNode;
  backgroundColor: string;
  color: string;
}

export const Template1 = ({
  children,
  image,
  position,
  color,
  backgroundColor,
}: Template1Options) => {

  const animationRefLeft = useScrollReveal<HTMLDivElement>("leftReveal");
  const animationRefRight = useScrollReveal<HTMLDivElement>("rightReveal");
  return (
    <section
    
      className="template1-container"
      style={{ backgroundColor: backgroundColor, color: color }}
    >
      <div
        className={
          position === "left"
            ? "template1-center-container"
            : "template1-center-container-reverse"
        }
      >
        <div ref={position === "left" ? animationRefLeft:animationRefRight} className="template1-internal-container">
          <LazyImage src={image} alt="intention-image" />
        </div>

        {children}
      </div>
    </section>
  );
};
