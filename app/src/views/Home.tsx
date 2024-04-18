import { HomeSection1 } from "../components/home-components/HomeSection1";
import { HomeSection2 } from "../components/home-components/HomeSection2";
import { HomeSection3 } from "../components/home-components/HomeSection3";
import { HomeSection4 } from "../components/home-components/HomeSection4";
import { HomeSection5 } from "../components/home-components/HomeSection5";
import { Carrusel } from "../components/Carrusel";
export function Home() {
  return (
    <main>
    <HomeSection1/>
    <HomeSection2/>
    <HomeSection3/>
    <HomeSection4/>
    <HomeSection5/>
    <Carrusel/>
    </main>
  );
}
