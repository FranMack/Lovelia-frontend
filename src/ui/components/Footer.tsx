import logoN from "../assets/logo-n.png";
import logoV from "../assets/logo-v.png";
import { MailIcon,WhatsUpIcon,InstagramIcon,FacebookIcon,LinkedinIcon } from '../../assets/icons';



export const Footer = () => {
  const linkToInta=()=>{
    window.open('https://www.instagram.com/nutriendolavida/', '_blank');
  }
  const linkToFacebook=()=>{
    window.open('https://www.instagram.com/nutriendolavida/', '_blank');
  }

  const linkToWhasap=()=>{
    window.open('https://wa.me/5491124649493/', '_blank');
  }

  const linkToMail=()=>{
    window.open('mailto:abrilsack@gmail.com', '_blank');
  }
 
  return (
    <footer>
       <div className='footer-top-container'>
        <div className='footer-top-left-container'>
        <div className='fotter-images-container'>
          <div className='logo-container'><img src={logoN} alt="letter N" /><img src={logoV} alt="letter V" /></div>
       <h6>Nutriendo la vida</h6>
        </div>
        <div className='fotter-info-container'>
          <h6>CONTACTO</h6>
          <div className='info-container-item' onClick={linkToMail}><MailIcon/><p>abrilsack@gmail.com</p></div>
          <div className='info-container-item' onClick={linkToWhasap}><WhatsUpIcon/><p>11 598202980</p></div>
        </div>
        </div>
        <div className='fotter-socialMedia-container'>
        <div className='socialMedia-container-item' onClick={linkToInta}><InstagramIcon/></div>
        <div className='socialMedia-container-item' onClick={linkToFacebook}><FacebookIcon/></div>
        <div className='socialMedia-container-item' onClick={linkToFacebook}><LinkedinIcon/></div>
        </div>
       </div>
       <div className='footer-bottom-container'>
        <p>© Abril Sack, todos los derechos reservados</p>
       </div>
    </footer>
  )
}
