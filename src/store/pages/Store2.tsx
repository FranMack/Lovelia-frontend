import { infoTalismanes } from "../assets/talismansInfo"
import { LazyImage } from "../../ui/components"

export const Store2 = () => {
  return (
   <section className='section2-store-container'>
    
    <div className='section2-grid-container'>
      {infoTalismanes.map((item,i)=>{
        return(
        <div key={i} className={`section2-grid-item item${i+1}`}>
            <LazyImage src={item.image} alt={item.title} />
            <h4>{item.title}</h4>
        </div>
        )
      })}
    </div>

   </section>
  )
}
