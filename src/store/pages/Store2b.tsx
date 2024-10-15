
import { Slider } from '../../talismanAnalogic/components/Slider'
import { infoStones } from "../../talismanAnalogic/assets"


export const Store2b = () => {
  return (
    <section className='store2b-container'>


<div className="store2b-slider-container">
      <h3>Los más elegidos:</h3>
    <Slider sliderInfo={infoStones}/>
    </div>
    </section>
  )
}
