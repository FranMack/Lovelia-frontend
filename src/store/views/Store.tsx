import { useContext, useEffect } from "react";
import { Store1,Store2,Store3,Store2b } from "../pages"
import { TimerContext } from "../../context/timerContext";
import { ShopingCartContext } from "../../context";

 const Store = () => {
  useEffect(()=>{ window.scrollTo(0, 0);},[])
  const{activatedAlarm}=useContext(TimerContext)
  const {shopingCartOpen}=useContext(ShopingCartContext)
  return (
    <main className={activatedAlarm || shopingCartOpen ? "viewport-background":""}>
    <Store1/>
    <Store2/>
    <Store2b/>
    <Store3/>
    </main>
  )
}
export default Store
