import { ButtonArrowRight } from "../commons/ButtonArrowRight"

export interface PlacaTipo1Options{
    image:string,
    title:string,
    arrowRightButton?:string,
    description:string[],
    secundaryTitle?:string,
    direction?:string,
    onClick?:()=>void
}


export function PlacaTipo1({image,title,description,arrowRightButton,secundaryTitle,direction="left",onClick}:PlacaTipo1Options){

    return ( <div className="placaTipo1-container" style={{flexDirection:direction==="right" ?"row-reverse":"row"}}>
    <div className="placaTipo1-image-container">
      <img src={image} alt="Tallisman-fisico" />
    </div>
    <div className="placaTipo1-info-container">
      <h4>{title}</h4>
      <h6>{secundaryTitle}</h6>
      {description.map((item,i)=>{
         return (<p key={i}>{item}</p>)
        })
      }
    

      {arrowRightButton && <ButtonArrowRight text={arrowRightButton} color="#6f3289" onClick={onClick} />}
    </div>
  </div>)

}