import { useEffect } from "react";
import { ThreeJsFrame } from "../components/ThreeJsFrame";
 function MyTalisman() {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <section className="myTalisman-container">
      
      <ThreeJsFrame/>
    </section>
  );
}

export default MyTalisman;
