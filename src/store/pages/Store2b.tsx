
import { useNavigate } from 'react-router'
import { Slider } from '../../talismanAnalogic/components/Slider'

import { favoritesTD,favoritesTA } from '../assets/favoritesTalismans'
import { useScrollReveal } from '../../hooks/useScrollReveal';




export const Store2b = () => {

  const navigate=useNavigate();
  const linkTo=(path:string)=>{
    navigate(`${path}`)
  }

   const animationRefLeft = useScrollReveal<HTMLDivElement>('leftReveal');
    const animationRefRight = useScrollReveal<HTMLDivElement>('rightReveal');

  return (
    <section className='store2b-container'>


<div ref={animationRefLeft} className="store2b-slider-container">
      <h3>Los más elegidos:</h3>
    <Slider sliderInfo={favoritesTA}/>
    <h5 onClick={()=>{linkTo("/buy-analogic")}}>Ver más</h5>
    </div>
    <div ref={animationRefRight} className="store2b-slider-container">
      <h3>Talismanes de celebridades</h3>
    <Slider sliderInfo={favoritesTD}/>
    <h5 onClick={()=>{linkTo("/buy-digital")}}>Ver más</h5>
    </div>
    </section>
  )
}
