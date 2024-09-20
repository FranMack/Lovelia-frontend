import React from 'react'

interface CheckOutNavbarOptions{
    sections:string[],
    buttonFocusPosition:string,
    handleButtonFocus:(item:string)=>void

}

export const CheckOutNavbar = ({sections,buttonFocusPosition,handleButtonFocus}:CheckOutNavbarOptions) => {
  return (
    <div className="checkout-top-container">
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
