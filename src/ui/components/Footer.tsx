import logo from "../assets/lovelia-logo.png";
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
} from "../../assets/icons/icons";
import { useNavigate } from "react-router-dom";

export function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  const mapaDelSitio = [
    { title: "Inicio", path: "/" },
    { title: "Talismán", path: "talisman-landing" },
    { title: "Meditaciones", path: "meditations" },
    { title: "Intenciones", path: "intenciones" },
    { title: "Tienda", path: "tienda" },
    { title: "Blog", path: "blog" },
  ];

  const otros = [
    { title: "Perfil de usuario", path: "profile" },
    { title: "Carrito de compras", path: "profile" },
    { title: "Historial de compras", path: "profile" },
  ];
  const nosotros = [
    { title: "Acerca de nosotros", path: "/" },
    { title: "Terminos y condiciones", path: "terminos-y-condiciones" },
    { title: "Políticas de devolución", path: "" },
    { title: "Preguntas frecuentes", path: "" },
    { title: "Contáctanos", path: "contacto" },
  ];

  const navigate = useNavigate();

  const linkToSection = (sectionPath: string) => {
    navigate(sectionPath);
  };

  const redirecTo = (site: string) => {
    window.open(site, "_blank", "noopener,noreferrer");
  };

  return (
    <footer className="footer">
      <div className="footer-top-container">
        <div className="footer-logo-container">
          <img src={logo} alt="logo-lovelia" />
        </div>
        <div className="footer-categorys-container">
          <h4>Mapa del sitio</h4>
          <ul>
            {mapaDelSitio.map((item, i) => {
              return (
                <li onClick={() => linkToSection(item.path)} key={i}>
                  {item.title}{" "}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="footer-categorys-container">
          <h4>Otros</h4>
          <ul>
            {otros.map((item, i) => {
              return (
                <li onClick={() => linkToSection(item.path)} key={i}>
                  {item.title}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="footer-categorys-container">
          <h4>Nosotros</h4>
          <ul>
            {nosotros.map((item, i) => {
              return (
                <li onClick={() => linkToSection(item.path)} key={i}>
                  {item.title}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="footer-socialMedia-container">
          <h4>Visita nuestras redes</h4>
          <div className="footer-socialMedia-icons">
            <FacebookIcon />
            <InstagramIcon
              onClick={() => redirecTo("https://www.instagram.com/lovelia.me/")}
            />
            <TwitterIcon />
          </div>
        </div>
      </div>
      <div className="footer-bottom-container">
        <p>{`© ${year} lovelia. Todos los derechos reservados`}</p>
      </div>
    </footer>
  );
}
