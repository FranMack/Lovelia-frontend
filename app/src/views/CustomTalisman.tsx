import { useState } from "react";
import { ejemploTalismanesAnalogicos } from "../assets/images/ejemplos-talismán-analogico/ejemplosTalismanes";
import { RightNextIcon } from "../assets/images/icons/icons";
import { DropdownMenu } from "../commons/DropdownMenu";
import { DropdownMenuOptions } from "../commons/DropdownMenu";
import { ButtonArrowUp } from "../commons/ButtonArrowUp";
import { ArrowUp } from "../assets/images/icons/icons";

import { Button } from "../commons/Button";
import { DropDownInfo } from "../commons/DropdownInfo";
import { DropdownInfoOptions } from "../commons/DropdownInfo";
import { useOpenModal } from "../hooks/useOpenModal";
import { DropDownIntensiones } from "../commons/DropDownIntensiones";

const precio = "0.000";

export function CustomTalisman() {
  const [index, setIndex] = useState<number>(0);

  const handleIndex = () => {
    if (index < ejemploTalismanesAnalogicos.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  const dropdownDevoluciones = useOpenModal();
  const dropdownInfoTalisman = useOpenModal();
  const dropdownIntensiones=useOpenModal();

  const modelOptions: DropdownMenuOptions = {
    title: "Elige el modelo",
    options: ["Aura", "Halo", "Bindu"],
  };
  const materialOptions: DropdownMenuOptions = {
    title: "Elige el material del modelo",
    options: ["Oro", "Plata", "Acero"],
  };

  const piedraOptions: DropdownMenuOptions = {
    title: "Elige tu piedra",
    options: [
      "Amatista",
      "Cuarzo rosa",
      "Ojo de tigre",
      "Lapislázuli",
      "Turquesa",
      "Ágata",
      "Jaspe",
      "Ónix",
    ],
  };

  const intencionOptions: DropdownMenuOptions = {
    title: "Elige tu intención",
    options: [
      "Protección",
      "Amor y relaciones",
      "Buena suerte y éxito",
      "Equilibrio y armonía",
      "Salud y bienestar",
      "Claridad mental y concentración",
      "Fuerza y coraje",
      "Espiritualidad y crecimiento personal",
    ],
  };

  const talismanDropDownInfo: DropdownInfoOptions = {
    name: "Tu talisman",
    section: [
      {
        title: "Medidas",
        description: "Alto: 6cm / Ancho: 4cm / Circunferencia: 20cm",
      },
      {
        title: "Medidas Grabado",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      },
      {
        title: "Descripción material",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        title: "Descripción piedra",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        title: "colgado",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        title: "Descripción intención",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
    ],
    handleDropDown: dropdownInfoTalisman.handleOpenModal,
  };

  const devolucionesDropDownInfo: DropdownInfoOptions = {
    name: "Devoluciones y envíos",
    section: [
      {
        title: "Política de cambios/devoluciones",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      },
      {
        title: "Nuestros envoltorios",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      },
      {
        title: "Formas de envíos",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      },
    ],
    handleDropDown: dropdownDevoluciones.handleOpenModal,
  };

  return (
    <section className="custonTalisman-container">
      <div className="custonTalisman-internal-container left">
        <img
          src={ejemploTalismanesAnalogicos[index].image}
          alt={ejemploTalismanesAnalogicos[index].title}
        />

        <div className="custonTalisman-internal-bullet-container">
          {ejemploTalismanesAnalogicos.map((item, i) => {
            return (
              <div
                className={index === i ? "bullet-visible" : "bullet"}
                key={i}
              >
                <img src={item.image} alt={item.title} />
              </div>
            );
          })}
        </div>
        <div
          onClick={handleIndex}
          className="custonTalisman-internal-arrow-container"
        >
          <RightNextIcon />
        </div>

        {dropdownInfoTalisman.openModal ? (
          <DropDownInfo {...talismanDropDownInfo} />
        ) : (
          <div className="custonTalisman-talisman-info">
            <p>Tu talisman</p>
            <div
              onClick={dropdownInfoTalisman.handleOpenModal}
              className="icon-container"
            >
              <ArrowUp color="#222222" />
            </div>
          </div>
        )}
      </div>

      <div className="custonTalisman-internal-container right">
        <div className="custonTalisman-internal-center-container">
          <h6>Inicio /Tienda /Talisman analógico</h6>
          <h5>$0.000</h5>
          <h3>Talisman Analógico</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.{" "}
          </p>
          <p>
            <strong>Ver más</strong>
          </p>
          <DropdownMenu {...modelOptions} />
          <DropdownMenu {...materialOptions} />
          <DropdownMenu {...piedraOptions} />
          <DropdownMenu {...intencionOptions} />


          {dropdownIntensiones.openModal && (
            <DropDownIntensiones handleDropDown={dropdownIntensiones.handleOpenModal} />
          )}

{!dropdownIntensiones.openModal && (
            <div className="custonTalisman-auxiliar-container">
            <ButtonArrowUp 
            onClick={dropdownIntensiones.handleOpenModal}
              text="Descubre nuestras intenciones"
              color="#6f3289"
            />
          </div>
          )}
          

        
          {dropdownDevoluciones.openModal && (
            <DropDownInfo {...devolucionesDropDownInfo} />
          )}
          <div className="buttons-container">
            <Button text={`$${precio}  Ir a comprar`} />
            <div className="auxiliar-buttons-container">
              {!dropdownDevoluciones.openModal && (
                <ButtonArrowUp
                  onClick={dropdownDevoluciones.handleOpenModal}
                  text="Devoluciones y envío"
                  color="#6f3289"
                />
              )}

              <Button text="Agregar al carrito de compras" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
