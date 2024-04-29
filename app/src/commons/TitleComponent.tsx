import { ButtonArrowRight } from "./ButtonArrowRight"

export interface TitleComponentOptions{
    title:string,
    description:string,
    buttonText:string
}

export function TitleComponent({title,description,buttonText}:TitleComponentOptions){

    return (

        <div className="title-component">
                <div>
                    <h4>{title}</h4>
                    <p>{description}</p>
                </div>
                <ButtonArrowRight text={buttonText} color="#6f3289"/>
            </div>
    )
}