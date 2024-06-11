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
import { Register} from './views/Register'
import { Contacto } from './views/Contacto'
import { CustomTalisman } from './views/CustomTalisman'
import { BuyDigitalTalisman } from './views/BuyDigitalTalisman'
import { Blog } from './views/Blog'
import { IntensionDescription } from './views/IntensionDescription'
import { Profile } from './views/Profile'
import { SiteTerms } from './views/SiteTerms'
import { ShopingCart } from './components/ShopingCart'
import { useContext, useEffect } from 'react'
import { ShopingCartContext } from './context/modalShopingCart'
import { CheckOutAnalogic } from './views/CheckOutAnalogic'
import { CheckOutDigital } from './views/CheckOutDigital'
import { MyTalisman } from './views/MyTalisman'
import { UserContext } from './context/userContext'
import axios from 'axios'
import { ToastContainer } from "react-toastify";
import { Navigate } from 'react-router-dom'



function App() {

  const{menuOpen}=useContext(ShopingCartContext)
  const{setEmail,setId,setName,setLastname,setSuscription}=useContext(UserContext)

  useEffect(()=>{
    axios.get("http://localhost:3000/api/v1/user/me",{ withCredentials: true })
    .then(({data})=>{
      setEmail(data.email)
      setId(data.id)
      setName(data.name)
      setLastname(data.lastname)
      setSuscription(data.payment)
    })
    .catch((error)=>{console.log(error)})
  },[])



  return (
    <>
    <ToastContainer/>
    <Navbar/>
    {menuOpen && <ShopingCart/>}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/intensiones/:id" element={<IntensionDescription/>}/>
        <Route path="/intensiones" element={<Intensiones/>}/>
        <Route path="/talisman-analogico" element={<AnalogTalisman/>}/>
        <Route path="/talisman-digital" element={<DigitalTalisman/>}/>
    
        <Route path="/talisman-landing" element={<LandingTalisman/>}/>
        <Route path="/tienda" element={<Tienda/>}/>
        <Route path="/talleres" element={<Blog/>}/>
        <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
        <Route path="/contacto" element={<Contacto/>}/>
        <Route path="/comprar-talisman-analogico" element={<CustomTalisman/>}/>
        <Route path="/comprar-talisman-digital" element={<BuyDigitalTalisman/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/checkout/store" element={<CheckOutAnalogic/>}/>
        <Route path="/checkout/digital" element={<CheckOutDigital/>}/>
        <Route path="/terms" element={<SiteTerms/>}/>
        <Route path="/myTalisman" element={<MyTalisman/>}/>
        <Route path="/*" element={<Navigate to="/"/>}/>




      </Routes>
      <Footer/>
      
                          
    </>
  )
}

export default App
