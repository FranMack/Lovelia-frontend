import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { picturesCarousel } from "../assets/infoCarrousel";

export const Home5b = () => {
  const navigate = useNavigate();
  const linkToStore = () => {
    navigate("/tienda");
  };

  const carouselRef = useRef<HTMLDivElement>(null); // Referencia al carrusel
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false); // Estado para detectar visibilidad

  // Observador para verificar si el carrusel es visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting); // Detecta si el carrusel es visible
      },
      { threshold: 0.5 } // El 50% del carrusel debe estar visible para activarse
    );

    if (carouselRef.current) {
      observer.observe(carouselRef.current);
    }

    return () => {
      if (carouselRef.current) {
        observer.unobserve(carouselRef.current);
      }
    };
  }, []);

  // Efecto para manejar el carrusel
  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % picturesCarousel.length);
    }, 3500);

    return () => {
      clearInterval(interval);
    };
  }, [isVisible]);

  return (
    <section className="header2-container" ref={carouselRef}>
      <figure className="header2-center-container">
        {picturesCarousel.map((image, i) => (
          <img
            key={i}
            src={image}
            alt={`Proyecto ${i}`}
            className={index === i ? "active" : "exiting"}
          />
        ))}
      </figure>
      <button onClick={linkToStore} className="section5b-home-button">
        QUIERO MI TALISMÁN
      </button>
    </section>
  );
};
