import { ButtonArrowRight } from "./ButtonArrowRight"

export interface TitleComponentOptions{
    title:string,
    description:string,
    buttonText:string,
    onClick?:()=>void
}

export function TitleComponent({title,description,buttonText,onClick}:TitleComponentOptions){

    return (

        <div className="title-component">
                <div>
                    <h4>{title}</h4>
                    <p>{description}</p>
                </div>
                <ButtonArrowRight text={buttonText} color="#6f3289" onClick={onClick}/>
            </div>
    )
}