import { BackgroundVideo } from "../../ui/components"
import { Button } from "../../ui/components/Button"
import lovelia from "../../contact/assets/logoSimple.png"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

export const WelcomeDigital = () => {

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])

  const navigate=useNavigate();

  const linkToMyTalisman=()=>{
    navigate("/myTalisman")
  }
  return (
    <section className='wellcomeDigital-container'>
<BackgroundVideo/>


<div className="wellcomeDigital-center-container">
  <div className="wellcomeDigital-center-top-container">
    <img src={lovelia} alt="logo lovelia" />
    <h2>te da la bienvenida. </h2>

  </div>
  <h3>Tu suscripción ha sido activada con exito</h3>
  <h4>Recorda que el primer mes es gratis!!!</h4>
  <Button text="Ir a mi talismán" onClick={linkToMyTalisman}/>
</div>

    </section>
  )
}
