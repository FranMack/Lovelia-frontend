import { infoTalismanes } from "../assets/talismansInfoExample"
import { LazyImage } from "../../ui/components"
import { useNavigate } from "react-router"

export const Store2 = () => {
  const navigate=useNavigate();
  const linkTo=(path:string)=>{
    navigate(path)
  }
  return (
   <section className='section2-store-container'>
    
    <div className='section2-grid-container'>
      {infoTalismanes.map((item,i)=>{
        return(
        <div onClick={()=>linkTo(item.path)} key={i} className={`section2-grid-item item${i+1}`}>
            <LazyImage src={item.image} alt={item.title} />
            <h4>{item.title}</h4>
        </div>
        )
      })}
    </div>

   </section>
  )
}
