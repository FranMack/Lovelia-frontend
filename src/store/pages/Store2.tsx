import { infoTalismanes } from "../assets/talismansInfo"

export const Store2 = () => {
  return (
   <section className='section2-store-container'>
    
    <div className='section2-grid-container'>
      {infoTalismanes.map((item,i)=>{
        return(
        <div key={i} className={`section2-grid-item item${i+1}`}>
            <img src={item.image} alt={item.title} />
            <h4>{item.title}</h4>
        </div>
        )
      })}
    </div>

   </section>
  )
}
