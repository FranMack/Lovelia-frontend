import { LeftArrowIcon } from "../assets/images/icons/icons";

interface ButtonArrowRightOptions {
  text: string;
  color: string;
  onClick?: () => void;
}
export function ButtonArrowLeft({
  text,
  color,
  onClick,
}: ButtonArrowRightOptions) {
  return (
    <div className="arrowRight-button" onClick={onClick}>
      <LeftArrowIcon color={color} />
      <p style={{ color: color }}>{text}</p>
    </div>
  );
}
