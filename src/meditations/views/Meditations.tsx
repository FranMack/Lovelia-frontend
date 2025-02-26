
import { useContext, useEffect } from "react";
import { Meditations1,Meditations2,Meditations3 } from "../pages"
import { TimerContext } from "../../context/timerContext";
import { ShopingCartContext } from "../../context";

 const Meditations = () => {
  useEffect(()=>{ window.scrollTo(0, 0);},[])
  const{activatedAlarm}=useContext(TimerContext)
  const {shopingCartOpen}=useContext(ShopingCartContext)
  return (
    <main className={activatedAlarm || shopingCartOpen ? "viewport-background":""}>
<Meditations1/>
<Meditations3/>
<Meditations2/>
   </main>
  )
}

export default Meditations
