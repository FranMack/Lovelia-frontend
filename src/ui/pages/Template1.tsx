import { ReactNode } from "react";

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
        <div className="template1-internal-container">
          <img src={image} alt="intention-image" />
        </div>

        {children}
      </div>
    </section>
  );
};
