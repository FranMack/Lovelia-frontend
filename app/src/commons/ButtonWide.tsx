interface ButtonWideOptions{
    buttonText:string,
    onClick?:()=>void
}

export function ButtonWide({buttonText,onClick}:ButtonWideOptions){

    return(
        <button onClick={onClick} className="button-wide">{buttonText}</button>
    )
}