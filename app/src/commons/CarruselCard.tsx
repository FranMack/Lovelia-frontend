interface CarruselCardOptions{
    image:string,
    title:string,
    text:string
}


export function CarruselCard({image,title,text}:CarruselCardOptions){

    return (
        <div className="carruselCard-container">
        <img src={image} alt={title}  />
    </div>
    )
}
