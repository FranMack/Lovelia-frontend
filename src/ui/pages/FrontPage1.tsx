import { ButtonArrowRight } from "../../ui/components";
import { ObliqueArrow } from "../../assets/icons/icons";
import { LazyImage } from "../../ui/components";

export interface FrontPage1Options {
  image: string;
  text: string[];
  color: string;
  button: boolean;
  buttonText: string;
  arrow: boolean;
  handleLink?: () => void;
}

export const FrontPage1 = ({
  image,
  text,
  color,
  button,
  buttonText,
  arrow,
  handleLink,
}: FrontPage1Options) => {
  const buttonRightInfo = {
    text: buttonText,
    color: color,
    onClick: handleLink,
  };

  return (
    <section className="frontPage1-container">
      <LazyImage src={image} alt="wallpaper" />
      <div className="frontPage1-center-container">
        <div className="frontPage1-text-container" style={{ color: color }}>
          {text.map((item, i) => {
            if (i === 0) {
              return (
                <p key={i}>
                  {arrow && (
                    <div className="icon-container">
                      <ObliqueArrow color={color} />
                    </div>
                  )}
                  {item}
                </p>
              );
            } else {
              return <p key={i}>{item}</p>;
            }
          })}
        </div>

        {button && <ButtonArrowRight {...buttonRightInfo} />}
      </div>
    </section>
  );
};
