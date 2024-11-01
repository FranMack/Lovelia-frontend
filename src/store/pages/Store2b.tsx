
import { useNavigate } from 'react-router'
import { Slider } from '../../talismanAnalogic/components/Slider'

import { favoritesTD,favoritesTA } from '../assets/favoritesTalismans'




export const Store2b = () => {

  const navigate=useNavigate();
  const linkTo=(path:string)=>{
    navigate(`${path}`)
  }


  return (
    <section className='store2b-container'>


<div className="store2b-slider-container">
      <h3>Los más elegidos:</h3>
    <Slider sliderInfo={favoritesTA}/>
    <h5 onClick={()=>{linkTo("/buy-analogic")}}>Ver más</h5>
    </div>
    <div className="store2b-slider-container">
      <h3>Talismanes de celebridades</h3>
    <Slider sliderInfo={favoritesTD}/>
    <h5 onClick={()=>{linkTo("/buy-digital")}}>Ver más</h5>
    </div>
    </section>
  )
}
