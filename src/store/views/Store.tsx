import { useEffect } from "react";
import { Store1,Store2,Store3 } from "../pages"

export const Store = () => {
  useEffect(()=>{ window.scrollTo(0, 0);},[])
  return (
    <main>
    <Store1/>
    <Store2/>
    <Store3/>
    </main>
  )
}
