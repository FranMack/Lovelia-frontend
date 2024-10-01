import { useEffect, useState } from "react";
import { infoIntenciones } from "../assets/infoIntentions";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ButtonArrowRight } from "../../ui/components/ButtonArrowRight";
import { PlayIcon } from "../../assets/icons/icons";

export function IntentionInfo() {
  window.scrollTo(0, 0);
  const navigate = useNavigate();
  const { id } = useParams();

  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    if (id) {
      setPage(parseInt(id));
    }
  }, [id]);

  const handlerPage = (direction: string) => {
    if (direction === "next") {
      if (page < infoIntenciones.length) {
        navigate(`/intenciones/${page + 1}`);
      }
    } else {
      if (page > 1) {
        navigate(`/intenciones/${page - 1}`);
      }
    }
  };

  return (
    <>
      <section className="intencionesDescription-container efectoReveal">
        <div className="intencionesDescription-info-container">
          <div className="intencionesDescription-top-buttons-container">
            <ButtonArrowRight
              text="Atras"
              color="#6f3289"
              onClick={() => handlerPage("previous")}
            />
            <ButtonArrowRight
              text="Siguiente"
              color="#6f3289"
              onClick={() => handlerPage("next")}
            />
          </div>
          <article>
            <h3>{page && infoIntenciones[page - 1].title}</h3>
            
            {page &&
              infoIntenciones[page - 1].description.map((parrafo, i) => {
                return <p key={i}>{parrafo}</p>;
              })}
          </article>
          <div className="intencionesDescription-buttons-container">
            <button>
              <div className="icon-container">
                <PlayIcon />
              </div>{" "}
              Iniciar meditación
            </button>
          </div>
        </div>
        <div className="intencionesDescription-image-container">
          {page && <img src={infoIntenciones[page - 1].image} alt="" />}
        </div>
      </section>
    </>
  );
}
