import { PlayIcon } from "../../assets/icons/icons"


const meditations=[
    {color:"#E7C8BB",title:"Amor incondicional"},
    {color:"#ECE976",title:"Aquí y Ahora"},
    {color:"#8AC9C0",title:"Potencial infinito"},
    {color:"#D58630",title:"Yo verdadero"},
    {color:"#662A80",title:"Gratitud"},
    {color:"#BCD0EE",title:"Coraje"},
    {color:"#9CC374",title:"Sabiduría de la incertidumbre"},
    {color:"#E73BD6",title:"Abundancia"},

]

interface MeditationOptions{
    color:string,
    title:string,
    image?:string
}

interface Meditations{
    meditations:MeditationOptions[]
}


export const GridMeditations = ({meditations}:Meditations) => {
  return (
    <div className='grid-meditations-container'>
        {meditations.map((item,i)=>{
            return(
                <div className='grid-meditations-item'>
                    
                <div className='grid-meditations-color-container'  style={{backgroundColor:item.color}}>
                {item.image && <img src={item.image} alt="elipses" />}
                <div className="icon-container"><PlayIcon/></div>
                
                </div>
                <p>{item.title}</p>
                </div>
            )
        })}
    </div>
  )
}
