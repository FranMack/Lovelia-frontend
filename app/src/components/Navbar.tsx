import logo from "../assets/images/lovelia.png"
import { LoginIcon,ShopingIcon } from "../assets/images/icons/icons"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
export function Navbar(){
    
    const navigate=useNavigate()
    const linkToHome=()=>{
        navigate("/")
    }
    const navbarButtons=[{title:"Talismán",path:"talisman-landing"},{title:"Intenciones",path:"intensiones"},{title:"Tienda",path:"tienda"},{title:"Blog",path:"blog"},{title:"Talleres",path:"talleres"},{title:"Contacto",path:"contacto"}]

    const [scrollPosition,setScrollPosition]=useState(0)

const handleScroll=()=>{
    setScrollPosition(window.scrollY)
}

    window.addEventListener("scroll",handleScroll)

    return (
        <nav className={`navbar-container ${scrollPosition>10 && "navbar-move"}` }>
            <div onClick={linkToHome} className="navbar-logo-container">
                <img src={logo} alt="Logo-Lovelia" />
            </div>
            <ul className="navbar-menu">

                {navbarButtons.map((button,i)=>{
                    return (<li key={i}>
                       <Link to={button.path}>{button.title}</Link> 
                        </li>)
                })}
                <li className="navbar-menu-icon">
                <Link to="login"><LoginIcon/></Link>
                </li>
                <li className="navbar-menu-icon">
                <ShopingIcon/>
                </li>

            </ul>

        </nav>
    )
}

