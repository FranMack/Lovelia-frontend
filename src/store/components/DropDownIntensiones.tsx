import { ArrowDown, ArrowUp } from "../../assets/icons/icons";
import { useOpenModal } from "../../hooks/useOpenModal";

interface DropDownIntensionesOtions {
  handleDropDown: () => void;
}

export function DropDownIntensiones({
  handleDropDown,
}: DropDownIntensionesOtions) {
  const intension1 = useOpenModal();
  const intension2 = useOpenModal();
  const intension3 = useOpenModal();
  const intension4 = useOpenModal();
  const intension5 = useOpenModal();
  const intension6 = useOpenModal();
  const intension7 = useOpenModal();
  const intension8 = useOpenModal();

  const intensiones = [
    {
      name: "Abundancia",
      title: "La intuición es la guía del alma",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      handleModal: intension1,
    },
    {
      name: "Amor incondicional",
      title: "La intuición es la guía del alma",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      handleModal: intension2,
    },
    {
      name: "Aquí y ahora",
      title: "La intuición es la guía del alma",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      handleModal: intension3,
    },
    {
      name: "Coraje",
      title: "La intuición es la guía del alma",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      handleModal: intension4,
    },
    {
      name: "Gratitud",
      title: "La intuición es la guía del alma",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      handleModal: intension5,
    },
    {
      name: "Potencial infinito",
      title: "La intuición es la guía del alma",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      handleModal: intension6,
    },
    {
      name: "Sabiduría de la incertidumbre",
      title: "La intuición es la guía del alma",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      handleModal: intension7,
    },
    {
      name: "Yo verdadero",
      title: "La intuición es la guía del alma",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      handleModal: intension8,
    },
  ];

  return (
    <div className="dropdownIntensiones-container">
      <div className="dropdownIntensiones-button-container ">
        <h5>Intenciones lovelia</h5>
        <div onClick={handleDropDown} className="icon-container">
        <ArrowDown color="#222222" />
        </div>
      </div>

      {intensiones.map((intension, i) => {
        return (
          <div key={i} className="dropdownIntensiones-card">
            <div
              className={`dropdownIntensiones-options-card item-${i + 1}`}
              onClick={intension.handleModal.handleOpenModal}
            >
              <h5>{intension.name}</h5>
              <div className="icon-container">
                {intension.handleModal.openModal ? (
                  <ArrowDown color="#222222" />
                ) : (
                  <ArrowUp color="#222222" />
                )}
              </div>
            </div>
            {intension.handleModal.openModal && (
              <div className="dropdownIntensiones-options-info">
                <h6>{intension.title}</h6>
                <p>{intension.description}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
