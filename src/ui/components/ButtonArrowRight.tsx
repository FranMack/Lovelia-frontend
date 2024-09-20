import { RightArrowIcon } from "../../assets/icons/icons";

interface ButtonArrowRightOptions {
  text: string;
  color: string;
  onClick?: () => void;
}
export function ButtonArrowRight({
  text,
  color,
  onClick,
}: ButtonArrowRightOptions) {
  return (
    <div className="arrowRight-button" onClick={onClick}>
      <RightArrowIcon color={color} />
      <p style={{ color: color }}>{text}</p>
    </div>
  );
}
