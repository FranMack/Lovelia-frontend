import talismanDigital from "../assets/images/talisman-digital.png"
import talismanFisico  from "../assets/images/talisman-fisico.png"
import { ButtonArrowRight } from "../commons/ButtonArrowRight"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

export function TalismanesComponent(){

    const navigate=useNavigate();

    const linkToTienda=()=>{
        navigate("/tienda")
    }


return(<section className="talismanesComponent-container">
    <h2>Talismanes lovelia</h2>
    <div className="talismanesComponent-center-container">
       <div className="talismanesComponent-interal-conteiner">
           <div className="talismanesComponent-image-conteiner">
               <img src={talismanDigital} alt="Talisman digital" />
           </div>
           <Link to="/talisman-digital"><h4>Talismán digital</h4></Link>

       </div>
       <div className="talismanesComponent-interal-conteiner">
           
       <div className="talismanesComponent-image-conteiner">
       <img src={talismanFisico} alt="Talisman digital" />
           </div>
           <Link to="/talisman-analogico"> <h4>Talismán analógico</h4></Link>
       </div>
    </div>
    <h5>Descubre más sobre talismanes haciendo click en cada uno</h5>
    
    <ButtonArrowRight text="Adquiere ahora el tuyo" color="#6f3289" onClick={linkToTienda}/>
    </section>)

}