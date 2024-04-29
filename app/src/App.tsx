import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Home } from './views/Home'
import { Intensiones } from './views/Intensiones'
import { AnalogTalisman } from './views/AnalogTalisman'
import { DigitalTalisman } from './views/DigitalTalisman'
import { Routes,Route } from 'react-router-dom'



function App() {


  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/intensiones" element={<Intensiones/>}/>
        <Route path="/talisman-analogico" element={<AnalogTalisman/>}/>
        <Route path="/talisman-digital" element={<DigitalTalisman/>}/>
      </Routes>
      
      <Footer/>
 
    </>
  )
}

export default App
