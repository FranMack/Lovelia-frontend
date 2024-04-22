interface CarruselCardOptions{
    image:string,
    title:string,
    text:string
}


export function MusicCarruselCard({image,title,text}:CarruselCardOptions){

    return (
        <div className="musicCarruselCard-container">
        <img src={image} alt={title}  />
        <h4>Sabiduría de la insertidumbre</h4>
        <p>La intuición es la guía<br/> del alma</p>
    </div>
    )
}
