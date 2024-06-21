import { HomeSection1 } from "../components/home-components/HomeSection1";
import { HomeSection2 } from "../components/home-components/HomeSection2";
import { HomeSection3 } from "../components/home-components/HomeSection3";
import { HomeSection4 } from "../components/home-components/HomeSection4";
import { HomeSection5 } from "../components/home-components/HomeSection5";
import { HomeSection6 } from "../components/home-components/HomeSection6";
import { HomeSection7 } from "../components/home-components/HomeSection7";
import { HomeSection8 } from "../components/home-components/HomeSection8";
import { HomeSection9 } from "../components/home-components/HomeSection9";
import { useContext } from "react";
import { ShopingCartContext } from "../context/modalShopingCart";
import { BackgroundVideo } from "../commons/BackgroundVideo";

export function Home() {
  const{menuOpen}=useContext(ShopingCartContext)
  window.scrollTo(0, 0);
  return (
    <main className={menuOpen ? "viewport-background":"" } >
      <BackgroundVideo/>
      
    <HomeSection1/>
    <HomeSection2/>
    <HomeSection3/>
    <HomeSection4/>
    <HomeSection5/>
    <HomeSection6/>
    <HomeSection7/>
    <HomeSection8/>
    <HomeSection9/>

  


    </main>
  );
}
