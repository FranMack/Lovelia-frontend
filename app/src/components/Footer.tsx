import logo from "../assets/images/lovelia.png"
import { FacebookIcon,InstagramIcon,TwitterIcon } from "../assets/images/icons/icons";

export function Footer(){

    const date = new Date();
    const year = date.getFullYear();

    const mapaDelSitio:string[]=["Inicio","Talismán","Intenciones","Tienda","Talleres","Blog"];
    const otros:string[]=["Perfil de usuario", "Carrito de compras","Historial de compras"];
    const nosotros:string[]=["Acerca de nosotros","Terminos y condiciones","Políticas de devolución", "Preguntas frecuentes", "Contáctanos"];


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
                            return(<li key={i}>{item}</li>)
                        })}
                    </ul>
                </div>
                <div className="footer-categorys-container">
                    <h4>Otros</h4>
                    <ul>
                    {otros.map((item,i)=>{
                            return(<li key={i}>{item}</li>)
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