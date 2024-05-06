import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Home } from './views/Home'
import { Intensiones } from './views/Intensiones'
import { AnalogTalisman } from './views/AnalogTalisman'
import { DigitalTalisman } from './views/DigitalTalisman'
import { LandingTalisman } from './views/LandingTalisman'
import { Routes,Route } from 'react-router-dom'
import { Tienda } from './views/Tienda'
import { Login } from './views/Login'
import { Register } from './views/Register'
import { Contacto } from './views/Contacto'
import { CustomTalisman } from './views/CustomTalisman'
import { BuyDigitalTalisman } from './views/BuyDigitalTalisman'
import { Blog } from './views/Blog'



function App() {


  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/intensiones" element={<Intensiones/>}/>
        <Route path="/talisman-analogico" element={<AnalogTalisman/>}/>
        <Route path="/talisman-digital" element={<DigitalTalisman/>}/>
        <Route path="/talisman-landing" element={<LandingTalisman/>}/>
        <Route path="/tienda" element={<Tienda/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/contacto" element={<Contacto/>}/>
        <Route path="/personalizar-talisman" element={<CustomTalisman/>}/>
        <Route path="/comprar-talisman-digital" element={<BuyDigitalTalisman/>}/>
        <Route path="/blog" element={<Blog/>}/>


      </Routes>
      
      <Footer/>
                          
    </>
  )
}

export default App
