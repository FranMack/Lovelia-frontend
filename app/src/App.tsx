import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Home } from './views/Home'
import { Intensiones } from './views/Intenciones'
import { Routes,Route } from 'react-router-dom'



function App() {


  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/intensiones" element={<Intensiones/>}/>
      </Routes>
      
      <Footer/>
 
    </>
  )
}

export default App
