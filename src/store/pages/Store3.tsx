import {
  Position,
  Template1,
  Template1Options,
} from "../../ui/pages/Template1";
import gift from "../assets/tienda_regalo.webp";

const templateOptions: Template1Options = {
  image: gift,
  position: Position.Left,
  color: "#6f3289",
  backgroundColor: "#EDC7B9",
};

export const Store3 = () => {
  return (
    <Template1 {...templateOptions}>
      <div className="section3-store-internal-container right">
        <div className="section3-store-internal-text-container">
          <div className="title-container">
            <h2>REGALA UN TALISMÁN</h2>
          </div>

          <p>
            Cuando regalas un talismán, brindas a alguien querido{" "}
            <strong>
              la oportunidad de
               conectar con su deseo o propósito.
            </strong>
          </p>
        </div>
      </div>
    </Template1>
  );
};
