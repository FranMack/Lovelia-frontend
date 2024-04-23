interface SliderCardOptions{
    image:string;
    title:string;
    text:string;
}

export function SliderCard({image,title,text}:SliderCardOptions){

    return(
        <li className="card" >
                        <div className="image">
                        <img src={image} alt={title} draggable="false" />
                        </div>
                        <h4>{title}</h4>
                        <p>{text}</p>
                        

                    </li>
    );
}