import { useEffect } from "react";
import { Intentions1,Intentions2,Intentions3 } from "../page"

 const Intentions = () => {
  useEffect(()=>{ window.scrollTo(0, 0);},[])
  return (
    <main>
        <Intentions1/>
        <Intentions2/>
        <Intentions3/>

    </main>
  )
}

export default Intentions