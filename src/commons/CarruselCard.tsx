interface CarruselCardOptions{
    image:string,
    title:string,
    text:string
}


export function CarruselCard({image,title,text}:CarruselCardOptions){

    return (
        <div className="carruselCard-container">
        <img src={image} alt={title}  />
        <div className="carruselCard-info-container">
        <h4>{title}</h4>
        <p>{text}</p>
        <button>Ver mas</button>
        </div>
    </div>
    )
}
