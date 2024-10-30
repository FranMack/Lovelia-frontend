import { useContext, useEffect } from 'react'
import { TalismanInfo1,TalismanInfo2,TalismanInfo3,TalismanInfo4 } from '../pages'
import { TimerContext } from '../../context/timerContext';
import { ShopingCartContext } from '../../context';

 const TalismanInfo = () => {
  useEffect(()=>{ window.scrollTo(0, 0);},[])
  const{activatedAlarm}=useContext(TimerContext)
  const {shopingCartOpen}=useContext(ShopingCartContext)
  return (
    <main className={activatedAlarm || shopingCartOpen ? "viewport-background":""}>
  
    <TalismanInfo1/>
    <TalismanInfo2/>
    <TalismanInfo3/>
    <TalismanInfo4/>
   </main>
  )
}

export default TalismanInfo
