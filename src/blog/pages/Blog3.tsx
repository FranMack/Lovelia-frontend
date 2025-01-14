import { articlesBlog } from "../assets/infoArticulos";
import { LazyImage } from "../../ui/components";
import { useScrollReveal } from "../../hooks/useScrollReveal";

export const Blog3 = () => {


     const animationRef = useScrollReveal<HTMLDivElement>('topReveal');
  return (
    <section  className="section3-blog-container">
      <div className="section3-blog-title-container">
        <h3>Todos los artículos</h3>
     
      </div>

      <div ref={animationRef} className="blog-historias-container">
        {articlesBlog.map((articulo, i) => {
          return (
            <div className={`blog-historias-card card${i}`} key={i}>
              <LazyImage src={articulo.image} alt={articulo.tittle} />

              <h6>{articulo.author}</h6>
              <h4>{articulo.tittle}</h4>
              <p>{articulo.date}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
