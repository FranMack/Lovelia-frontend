import { ButtonArrowRight } from "../commons/ButtonArrowRight"
import { Button } from "../commons/Button"

export interface Wallpaper2Options{
    image:string,
    title?:string,
    description?:string[],
    arrowRightButton?:string,
    button?:string,
    secundaryTitle?:string,
    terciaryTitle?:string,
    direction?:string,
    align?:string,
    height?:string
    backgroundStyle?:string
    symbol?:string
}




export function WallpaperTipo2({image,title,arrowRightButton,button,description,secundaryTitle,direction="left",height,backgroundStyle,terciaryTitle,align,symbol}:Wallpaper2Options){

    return( <div className="analogTalisman-section6-wallpaper-container" style={{height:height && `${height}`,justifyContent:direction==="right" ?"end":"start",alignItems:align &&`${align}`,background:backgroundStyle ?`${backgroundStyle}`:"none"}} >
    <img src={image} alt={"foto imagen"} />
    <div className="analogTalisman-section6-wallpaper-info">
        {title && <h4>{title}</h4>}
       {secundaryTitle && <h5>{secundaryTitle}</h5>}
       {terciaryTitle && <h6>{terciaryTitle}</h6>}
        {description && description.map((item,i)=>{
         return (<p key={i}>{symbol&&<span>{symbol}</span>}{item}</p>)
        })
      }

{arrowRightButton && <ButtonArrowRight text={arrowRightButton} color="#ffffff" />}
{button && <Button text={button}/>}
    </div>
</div>)
}



