import { useContext, useEffect } from "react";
import { Intentions1,Intentions2,Intentions3 } from "../page"
import { TimerContext } from "../../context/timerContext";
import { ShopingCartContext } from "../../context";

 const Intentions = () => {
  useEffect(()=>{ window.scrollTo(0, 0);},[])

  const{activatedAlarm}=useContext(TimerContext)
  const {shopingCartOpen}=useContext(ShopingCartContext)
  return (
    <main className={activatedAlarm || shopingCartOpen ? "viewport-background":""}>
        <Intentions1/>
        <Intentions2/>
        <Intentions3/>

    </main>
  )
}

export default Intentions