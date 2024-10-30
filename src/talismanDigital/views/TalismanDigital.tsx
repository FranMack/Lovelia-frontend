import { useContext, useEffect } from 'react';
import { TalismanDigital1,TalismanDigital2,TalismanDigital3,TalismanDigital4,TalismanDigital5,TalismanDigital6,TalismanDigital7,TalismanDigital8} from '../pages'
import { TimerContext } from '../../context/timerContext';
import { ShopingCartContext } from '../../context';

 const TalismanDigital = () => {
  useEffect(()=>{ window.scrollTo(0, 0);},[])
  const{activatedAlarm}=useContext(TimerContext)
  const {shopingCartOpen}=useContext(ShopingCartContext)
  return (
    <main className={activatedAlarm || shopingCartOpen ? "viewport-background":""}>
        <TalismanDigital1/>
        <TalismanDigital2/>
        <TalismanDigital3/>
        <TalismanDigital4/>
        <TalismanDigital5/>
        <TalismanDigital6/>
        <TalismanDigital7/>
        <TalismanDigital8/>


    </main>
  )
}


export default TalismanDigital;