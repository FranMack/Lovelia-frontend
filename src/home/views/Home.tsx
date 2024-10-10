import { useEffect } from "react";
import { Home1,Home2,Home3,Home4,Home5,Home6,Home7 } from "../pages"

 const Home = () => {
  useEffect(()=>{ window.scrollTo(0, 0);},[])
  return (
    <main>
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