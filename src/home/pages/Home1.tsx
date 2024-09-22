import lovelia from "../assets/home_portada.png";
import background from "../assets/home_background.png"


export const Home1 = () => {

  


  return (
    <section className="section1-home-container">
      <img src={background} alt="sky" />
      
      <div className="section1-home-logo-container revealLogo2">
        <img src={lovelia} alt="lovelia-logo" />
      </div>
      <div className="section1-home-slogan-container revealLogo2">
        <p>
            NUESTRO PROPÓSITO ES
        </p>
        <p>
            COLABORAR CON TU PROPÓSITO
        </p>
      </div>
 
    </section>
  );
};
