import { useContext, useEffect } from "react";
import { Blog1,Blog2,Blog3 } from "../pages"
import { TimerContext } from "../../context/timerContext";
import { ShopingCartContext } from "../../context";

 const Blog = () => {
  useEffect(()=>{ window.scrollTo(0, 0);},[])
  const{activatedAlarm}=useContext(TimerContext)
  const {shopingCartOpen}=useContext(ShopingCartContext)
  return (
    <main className={activatedAlarm || shopingCartOpen ? "viewport-background":""}>

    <Blog1/>
    <Blog2/>
    <Blog3/>
</main>  )
}

export default Blog;