import { RightArrowIcon } from "../../assets/icons/icons";

export interface OptionsArrowRight2 {
  text: string;
  color: string;
  className?:string;
  onClick?: () => void;
}

export const ButtonArrowRight2 = ({
  text,
  color,
  className,
  onClick,
}: OptionsArrowRight2) => {
  return (
    <button
      onClick={onClick}
      className={`arrowRight-button2 ${className ? className :""}`}
      style={{ color: color, borderColor: color }}
    >
      <div className="icon-wrapper">
        <RightArrowIcon color={color} />
      </div>
      {text}
    </button>
  );
};
