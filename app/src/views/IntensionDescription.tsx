import { useEffect, useState } from "react"
import { infoIntensiones } from "../assets/images/intenciones/infoIntensiones"
import { Button } from "../commons/Button"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { ButtonArrowRight } from "../commons/ButtonArrowRight"
import { ButtonArrowLeft } from "../commons/ButtonArrowLeft"

export function IntensionDescription(){
    window.scrollTo(0, 0);
    const navigate=useNavigate();
    const {id}=useParams()

    const [page,setPage]=useState<number>(1)

    

    useEffect(()=>{
        console.log(id,typeof(id))
        if (id) {
            setPage(parseInt(id));
        }
    },[id])
   

    const handlerPage=(direction:string)=>{

        if(direction==="next"){
            if(page<infoIntensiones.length){
                setPage(page+1)
                navigate(`/intensiones/${page+1}`)
                       }

        }
        else{
            if(page>1){
                setPage(page-1)
                navigate(`/intensiones/${page-1}`)
                       }
        }
     
       
       
    }

    

    return(
        <>
        <section className="intensionesDescription-container">
       
            
            <div className="intensionesDescription-info-container">
            <div className="intensionesDescription-top-buttons-container">
                <ButtonArrowLeft text="Atras" color="#6f3289" onClick={()=>handlerPage("previous")}/>
                <ButtonArrowRight text="Siguiente" color="#6f3289" onClick={()=>handlerPage("next")}/>
                               </div>
            <article >
           
                <h3>
        {page && infoIntensiones[page-1].title}
                </h3>
                <h6> {page && infoIntensiones[page-1].secundaryTitle}</h6>
                {
                  page &&  infoIntensiones[page-1].description.map((parrafo,i)=>{

                        return(
                            <p key={i}>{parrafo}</p>
                        )
                    })
                }

               

                
                
            </article>
            <div className="intensionesDescription-buttons-container">
                <Button text="Música de la intención"/>
                <Button text="Iniciar meditación"/>
                </div>
            </div>
            <div className="intensionesDescription-image-container">
                {page && <img src={infoIntensiones[page-1].image} alt="" />}
            </div>
        </section>
        </>
    )
}