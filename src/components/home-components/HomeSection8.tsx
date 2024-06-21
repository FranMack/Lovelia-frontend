import { ButtonArrowRight } from "../../commons/ButtonArrowRight";
import { infoTalleres } from "../../assets/images/talleres/infoTallers";
import creaTuRealizad from "../../assets/images/imagen-crea-tu-realidad.png";
import { TitleComponent } from "../../commons/TitleComponent";
import { PlacaTipo2 } from "../PlacaTipo2";

const titleTalleres = {
  title: "Talleres",
  description: "Nuestro espacio de aprendisaje.",
  buttonText: "Ver todos los talleres",
};


const infoPlacaTipo2 = {
    image: creaTuRealizad,
    title: "¿Cómo co-crear tu realidad?",
    secundaryTitle:"Descubre historias,pensamientos,sentimientos y más",
    arrowRightButton: "Ver más sobre este taller",
    direction:"right",
    description: [" Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis repellat numquam, ea omnis deserunt fuga velit repellendus voluptates reprehenderit, officia earum nulla minus ut ex debitis ipsum dicta beatae quasi."],
  };
  

export function HomeSection8() {
  return (
    <section className="section7-container">
      <TitleComponent {...titleTalleres} />

      <div className="section8-talleres-container">
        {infoTalleres.map((taller, i) => {
          return (
            <div className="section8-talleres-card" key={i}>
              <img src={taller.image} alt={taller.name} />
              <div className="talleres-card-info-container">
                <h4>{taller.name}</h4>
                <p>{taller.date}</p>
              </div>
            </div>
          );
        })}
      </div>

      <PlacaTipo2 {...infoPlacaTipo2}/>
    </section>
  );
}
