export interface OptionsButton{
    text:string,
    onClick?:()=>void,
    backgroundColor?:string
    color?:string
}

export const ButtonTransparent = ({text,onClick,backgroundColor,color}:OptionsButton) => {
  return (
    <button onClick={onClick} className="button-transparent" style={{ backgroundColor:backgroundColor ? `${backgroundColor}`:"transparent", color:color ? `${color}`:""}}>{text}</button>
  )
}
