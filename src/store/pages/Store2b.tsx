
import { Slider } from '../../talismanAnalogic/components/Slider'

import { favoritesTD,favoritesTA } from '../assets/favoritesTalismans'




export const Store2b = () => {
  return (
    <section className='store2b-container'>


<div className="store2b-slider-container">
      <h3>Los más elegidos:</h3>
    <Slider sliderInfo={favoritesTA}/>
    </div>
    <div className="store2b-slider-container">
      <h3>Talismanes de celebridades</h3>
    <Slider sliderInfo={favoritesTD}/>
    </div>
    </section>
  )
}
