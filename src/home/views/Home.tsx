import { useContext, useEffect } from "react";
import { Home1,Home2,Home3,Home4,Home5,Home6,Home7 } from "../pages"
import { TimerContext } from "../../context/timerContext";
import { ShopingCartContext } from "../../context";

 const Home = () => {
  useEffect(()=>{ window.scrollTo(0, 0);},[])
  const{activatedAlarm}=useContext(TimerContext)
  const {shopingCartOpen}=useContext(ShopingCartContext)
  return (
    <main className={activatedAlarm || shopingCartOpen ? "viewport-background":""}>
    <Home1/>
    <Home2/>
    <Home4/>
    <Home5/>
    <Home6/>
    <Home3/>
    <Home7/>
    </main>
  )
}

export default Home;