import logo from "../assets/lovelia-logo.png"
import "../styles/_mailTemplate1.scss";

export const MailTemplate1 = () => {
  return (
    <div className="mail-container">
    <div className="logo-container">
        <img src={logo} alt="logo" />
    </div>
    <div className="text-container">
        <p>Hola Amparo</p>
        <h2>Te damos la bienvenida a Lovelia</h2>
        <p>Por favor, confirma tu correo para ingresar a tu cuenta. Solo tenemos que verificar tu dirección de correo electrónico para finalizar la configuración de tu cuenta.</p>
    </div>
    <div className="button-container">
        <a href="${link}" target="_blank" className="button">CONFIRMAR CUENTA</a>
    </div>
    <footer className="mailer-footer">
        <table >
            <tr>
                <td style={{textAlign:"start"}}>
                    <img src={logo} alt="logo" style={{width: "auto", height: "50px", marginLeft: "20px"}} />
                    
                </td>
                <td style={{textAlign:"end"}}>
                <img src={logo} alt="logo" style={{width: "auto", height: "30px", margin: "0 10px"}} />
                    <img src={logo} alt="logo" style={{width: "auto", height: "30px", margin: "0 10px"}} />
                    <img src={logo} alt="logo" style={{width: "auto", height: "30px", margin: "0 20Px"}} />

                </td>
            </tr>
           
        </table>
        <div className='bottom-container'>
        <p>© 2024 lovelia. Todos los derechos reservados</p>
        </div>
    </footer>
</div>
  )
}
