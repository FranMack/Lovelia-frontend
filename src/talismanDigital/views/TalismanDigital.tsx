import { useEffect } from 'react';
import { TalismanDigital1,TalismanDigital2,TalismanDigital3,TalismanDigital4,TalismanDigital5,TalismanDigital6,TalismanDigital7,TalismanDigital8} from '../pages'

 const TalismanDigital = () => {
  useEffect(()=>{ window.scrollTo(0, 0);},[])
  return (
    <main>
        <TalismanDigital1/>
        <TalismanDigital2/>
        <TalismanDigital3/>
        <TalismanDigital4/>
        <TalismanDigital5/>
        <TalismanDigital6/>
        <TalismanDigital7/>
        <TalismanDigital8/>


    </main>
  )
}


export default TalismanDigital;