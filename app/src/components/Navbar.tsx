import logo from "../assets/images/lovelia.png"
import { LoginIcon,ShopingIcon } from "../assets/images/icons/icons"
export function Navbar(){
    const navbarButtons=["Talismán","Intenciones","Tienda","Blog","Talleres","Contacto"]
    return (
        <nav className="navbar-container">
            <div className="navbar-logo-container">
                <img src={logo} alt="Logo-Lovelia" />
            </div>
            <ul className="navbar-menu">

                {navbarButtons.map((button,i)=>{
                    return (<li key={i}>{button}</li>)
                })}
                <li className="navbar-menu-icon">
                <LoginIcon/>
                </li>
                <li className="navbar-menu-icon">
                <ShopingIcon/>
                </li>

            </ul>

        </nav>
    )
}

