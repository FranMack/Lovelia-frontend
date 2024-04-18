export interface OptionsButton{
    text:string
}

export function Button({text}:OptionsButton){

    return(
        <button className="purple-button">
            {text}
        </button>
    )
}