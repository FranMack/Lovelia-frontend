import { useNavigate } from "react-router-dom"
import colgante from "../assets/imagen-colgante.png"
import colgante2 from "../assets/imagen-colgante2.png"

export const Home5 = () => {
  const navigate=useNavigate();
  const linkToStore=()=>{navigate("/tienda")}
  return (
    <section className="section5-home-container">
        
            <div className='section5-home-internal-container'>
                <img src={colgante} alt="colgante" />
            </div>
            <div className='section5-home-internal-container'>
                <img src={colgante2} alt="colgante2" />
            </div>

            <button onClick={linkToStore} className='section5-home-button'>QUIERO MI TALISMÁN</button>
   


    </section>
  )
}
