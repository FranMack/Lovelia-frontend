import { ButtonArrowRight } from "../commons/ButtonArrowRight"

export interface Wallpaper1Options{
    image:string,
    title?:string,
    description?:string[],
    arrowRightButton?:string,
    secundaryTitle?:string,
    terciaryTitle?:string,
    direction?:string,
    align?:string,
    height?:string
    backgroundStyle?:string
    onClick?:()=>void
}




export function WallpaperTipo1({image,title,arrowRightButton,description,secundaryTitle,direction="right",height,backgroundStyle,terciaryTitle,align,onClick}:Wallpaper1Options){

    return( <div className="wallpeperTipo1-container" style={{height:height && `${height}`,justifyContent:direction==="right" ?"end":"start",alignItems:align &&`${align}`,background:backgroundStyle ?`${backgroundStyle}`:"none"}} >
    <img src={image} alt={"foto imagen"} />
    <div className="wallpeperTipo1-info">
        {title && <h4>{title}</h4>}
       {secundaryTitle && <h5>{secundaryTitle}</h5>}
       {terciaryTitle && <h6>{terciaryTitle}</h6>}
        {description && description.map((item,i)=>{
         return (<p key={i}>{item}</p>)
        })
      }

{arrowRightButton && <ButtonArrowRight onClick={onClick} text={arrowRightButton} color="#ffffff" />}
    </div>
</div>)
}