import { useEffect } from "react";
import { Intentions1,Intentions2,Intentions3 } from "../page"

export const Intentions = () => {
  useEffect(()=>{ window.scrollTo(0, 0);},[])
  return (
    <main>
        <Intentions1/>
        <Intentions2/>
        <Intentions3/>

    </main>
  )
}
