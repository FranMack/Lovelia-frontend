import { ButtonArrowRight } from "../commons/ButtonArrowRight"
import { Button } from "../commons/Button"

export interface PlacaTipo2Options{
    image:string,
    title:string,
    description:string[],
    arrowRightButton?:string,
    button?:string,
    secundaryTitle?:string,
    direction?:string
}


export function PlacaTipo2({image,title,description,button,arrowRightButton,secundaryTitle,direction="left"}:PlacaTipo2Options){

    return (  <div className="placaTipo2-container" style={{flexDirection:direction==="right" ?"row-reverse":"row"}}>
    <div className="placaTipo2-image-container">
        <img src={image} alt="Tallisman-fisico" />
    </div>
    <div className="placaTipo2-info-container">
        <h4>{title}</h4>
        <h6>{secundaryTitle}</h6>
        
        {description.map((item,i)=>{
         return (<p key={i}>{item}</p>)
        })
      }
        {button && <Button text={button}/>}
        {arrowRightButton && <ButtonArrowRight text={arrowRightButton} color="#6f3289" />}
    </div>

  </div>)

}