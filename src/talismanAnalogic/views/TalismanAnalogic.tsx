import{ useContext, useEffect } from 'react'
import { TalismanAnalogic1,TalismanAnalogic2,TalismanAnalogic3,TalismanAnalogic4 } from '../pages'
import { TimerContext } from '../../context/timerContext';
import { ShopingCartContext } from '../../context';

 const TalismanAnalogic = () => {
  useEffect(()=>{ window.scrollTo(0, 0);},[])
  const{activatedAlarm}=useContext(TimerContext)
  const {shopingCartOpen}=useContext(ShopingCartContext)
  return (
    <main className={activatedAlarm || shopingCartOpen ? "viewport-background":""}>
<TalismanAnalogic1/>
<TalismanAnalogic2/>
<TalismanAnalogic3/>
<TalismanAnalogic4/>
    </main>
  )
}

export default TalismanAnalogic;
