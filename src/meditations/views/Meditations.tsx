
import { useEffect } from "react";
import { Meditations1,Meditations2,Meditations3 } from "../pages"

export const Meditations = () => {
  useEffect(()=>{ window.scrollTo(0, 0);},[])
  return (
   <main>
<Meditations1/>
<Meditations2/>
<Meditations3/>
   </main>
  )
}
