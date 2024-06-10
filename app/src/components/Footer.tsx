import logo from "../assets/images/lovelia.png"
import { FacebookIcon,InstagramIcon,TwitterIcon } from "../assets/images/icons/icons";
import { useNavigate } from "react-router-dom";

export function Footer(){

    const date = new Date();
    const year = date.getFullYear();

    const mapaDelSitio=[{title:"Inicio",path:"/"},{title:"Talismán",path:"talisman-landing"},{title:"Intenciones",path:"intensiones"},{title:"Tienda",path:"tienda"},{title:"Talleres",path:"talleres"},{title:"Blog",path:"blog"}];
   
    const otros=[ {title:"Perfil de usuario",path:"profile"},{title:"Carrito de compras",path:"profile"} ,{title:"Historial de compras",path:"profile"}];
    const nosotros:string[]=["Acerca de nosotros","Terminos y condiciones","Políticas de devolución", "Preguntas frecuentes", "Contáctanos"];


const navigate=useNavigate();

    const linkToSection=(sectionPath:string)=>{
        navigate(sectionPath)
       
    }

    return(
        <footer className="footer">

            <div className="footer-top-container">
                <div className="footer-logo-container">
                    <img src={logo} alt="logo-lovelia" />
                </div>
                <div className="footer-categorys-container">
                    <h4>Mapa del sitio</h4>
                    <ul>
                        {mapaDelSitio.map((item,i)=>{
                            return(<li onClick={()=>linkToSection(item.path)} key={i}>{item.title} </li>)
                        })}
                    </ul>
                </div>
                <div className="footer-categorys-container">
                    <h4>Otros</h4>
                    <ul>
                    {otros.map((item,i)=>{
                            return(<li onClick={()=>linkToSection(item.path)} key={i}>{item.title}</li>)
                        })}
                    </ul>
                </div>
                <div className="footer-categorys-container">
                    <h4>Nosotros</h4>
                    <ul>
                    {nosotros.map((item,i)=>{
                            return(<li key={i}>{item}</li>)
                        })}
                    </ul>
                </div>
                <div className="footer-socialMedia-container">
                <h4>Visita nuestras redes</h4>
                <div className="footer-socialMedia-icons">
                <FacebookIcon/>
                <InstagramIcon/>
                <TwitterIcon/>

                </div>
                </div>

            </div>
            <div className="footer-bottom-container">
                <p>{`© ${year} lovelia. Todos los derechos reservados`}</p>
               
            </div>

        </footer>
    )
}