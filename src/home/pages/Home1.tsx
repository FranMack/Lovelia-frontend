import lovelia from "../assets/home_portada.webp";
import background from "../../../public/home_background.webp";

export const Home1 = () => {
  return (
    <section className="section1-home-container">
      <img src={background} alt="sky" />

      <div className="section1-home-logo-container revealLogo2">
        <img src={lovelia} alt="lovelia-logo" />
      </div>
      <div className="section1-home-slogan-container revealLogo2">
        <p>NUESTRO PROPÓSITO ES</p>
        <p>COLABORAR CON TU PROPÓSITO</p>
      </div>
    </section>
  );
};
