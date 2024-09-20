import{ useEffect } from 'react'
import { TalismanAnalogic1,TalismanAnalogic2,TalismanAnalogic3,TalismanAnalogic4 } from '../pages'

export const TalismanAnalogic = () => {
  useEffect(()=>{ window.scrollTo(0, 0);},[])
  return (
    <main>
<TalismanAnalogic1/>
<TalismanAnalogic2/>
<TalismanAnalogic3/>
<TalismanAnalogic4/>
    </main>
  )
}
