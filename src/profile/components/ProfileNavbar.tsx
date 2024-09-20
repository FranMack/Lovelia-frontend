
interface handleButtonFocus{
    buttonFocusPosition:string,
    handleButtonFocus:(item:string)=>void
}


const sections = ["Datos de cuenta", "Historial de compras"];

export const ProfileNavbar = ({buttonFocusPosition,handleButtonFocus}:handleButtonFocus) => {
  return (
    <div className="profileNavbar-container">
    <ul>
      {sections.map((item, i) => {
        return (
          <li
            onClick={() => handleButtonFocus(item)}
            className={
              buttonFocusPosition === item ? "button-focus-style" : ""
            }
            key={i}
          >
            {item}
          </li>
        );
      })}
    </ul>
  </div>
  )
}
