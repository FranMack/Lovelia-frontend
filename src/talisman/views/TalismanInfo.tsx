import { useEffect } from 'react'
import { TalismanInfo1,TalismanInfo2,TalismanInfo3,TalismanInfo4 } from '../pages'

export const TalismanInfo = () => {
  useEffect(()=>{ window.scrollTo(0, 0);},[])
  return (
   <main>
    <TalismanInfo1/>
    <TalismanInfo2/>
    <TalismanInfo3/>
    <TalismanInfo4/>
   </main>
  )
}
