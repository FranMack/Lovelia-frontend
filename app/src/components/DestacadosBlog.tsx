import { destacadosBlog } from "../assets/images/articulos-blog-destacados/infoArticulos"

export function DestacadosBlog(){

    return(
        <div className="destacadosBlog-container">
        {destacadosBlog.map((articulo,i)=>{
           return(
               <div className="destacadosBlog-card" key={i}>

                   <img src={articulo.image} alt={articulo.tittle} />

                   <h6>{articulo.author}</h6>
                   <h4>{articulo.tittle}</h4>
                   <p>{articulo.date}</p>


               </div>
           )
        })}
       </div>
    )
}