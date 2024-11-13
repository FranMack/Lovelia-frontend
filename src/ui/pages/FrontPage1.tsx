import { ButtonArrowRight, LazyImage } from "../../ui/components";

export interface FrontPage1Options {
  image: string;
  text: string;
  color: string;
  button: boolean;
  buttonText: string;
  handleLink?: () => void;
}

export const FrontPage1 = ({
  image,
  text,
  color,
  button,
  buttonText,

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
        <p>{text}</p>
        </div>

        {button && <ButtonArrowRight {...buttonRightInfo} />}
      </div>
    </section>
  );
};
