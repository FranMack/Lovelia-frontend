import adnEnergetico from "../../assets/images/AND energetico/imagen-adn-energetico.png";
import adnNaturaleza from "../../assets/images/AND energetico/imagen-adn-naturaleza.png";
import adnNumerico from "../../assets/images/AND energetico/imagen-adn-numerico.png";

export function DigitalTalismanSection3() {
  const adnEnergeticoInfo = {
    energyAstroDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    energyAstrosImage: adnEnergetico,
    energiaNumbersDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    energyNumbersImage: adnNumerico,
    energyNatureDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    energyNatureImage: adnNaturaleza,
  };

  return (
    <section className="analogTalisman-section2-container">
      <div className="digitalTalisman-section3-top-container">
        <div className="digitalTalisman-section3-top-left-container">
          <div className="left-info-container">
            <h5>La energía de los astros</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore aliqua.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna consectetur
              adipiscing elit, aliqua.
            </p>
          </div>
        </div>
        <div className="digitalTalisman-section3-top-right-container">
          <div className="right-info-container">
            <h4>Mi ADN energético</h4>
            <h5>Tu ADN energético está formado por:</h5>

            <h6>La energía de los astros</h6>
            <div className="item-container">
              <div className="item-container-left">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                </p>
              </div>
              <div className="item-container-right">
                <div className="item-image-container">
                  <img src={adnEnergeticoInfo.energyAstrosImage} alt="" />
                </div>
              </div>
            </div>

            <h6>La energía de los números</h6>
            <div className="item-container">
              <div className="item-container-left">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                </p>
              </div>
              <div className="item-container-right">
                <div className="item-image-container">
                  <img src={adnEnergeticoInfo.energyNumbersImage} alt="" />
                </div>
              </div>
            </div>

            <h6>La energía de la naturaleza</h6>
            <div className="item-container">
              <div className="item-container-left">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                </p>
              </div>
              <div className="item-container-right">
                <div className="item-image-container">
                  <img
                    src={adnEnergeticoInfo.energyNatureImage}
                    alt="imagen adn energetico"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
