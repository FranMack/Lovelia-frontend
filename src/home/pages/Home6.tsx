import proposito from "../assets/home_proposito.webp";
import { Position, Template1 } from "../../ui/pages/Template1";
import { Template1Options } from "../../ui/pages/Template1";


const templateOptions:Template1Options={
  image:proposito,
  position:Position.Right,
   color:"#6f3289",
  backgroundColor:"#662A80"
}

export const Home6 = () => {
  return (
 
      <Template1 {...templateOptions}>
     
        <div className="section6-home-internal-container left">
          <div className="section6-home-internal-text-container">
            <p>
              Somos un espacio de vanguardia<br/>donde <strong>la tecnología y los saberes<br/>
              ancestrales están al servicio de tu<br/> propósito.</strong><br/> Te brindamos
              herramientas,<br/> experiencias y contenido para que<br/> puedas cocrear tu
              propia realidad,<br/> validando el poder de la intención, la<br/> energía y
              tu potencial.<br/> 
              <br/>
              <br/>
              <strong>Sé protagonista de tu vida.</strong>
            </p>

  

          </div>
        </div>
     
     
        </Template1>
  );
};
