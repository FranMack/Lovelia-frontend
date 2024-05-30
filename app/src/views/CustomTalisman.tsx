import { useState, useContext } from "react";
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
import { TalismanModelContext } from "../context/talismanModelContext";
import { TalismanMaterialContext } from "../context/talismanMaterialContext";
import { TalismanRockContext } from "../context/talismanModelRock";
import { TalismanChainContext } from "../context/talismaChainContext";
import { TalismanIntentionsContext } from "../context/talismanIntentionsContext";

export function CustomTalisman() {
  window.scrollTo(0, 0);
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
  const dropdownIntensiones = useOpenModal();

  const { priceModel,optionModel } = useContext(TalismanModelContext);
  const { priceMaterial,optionMaterial } = useContext(TalismanMaterialContext);
  const { priceRock,optionRock } = useContext(TalismanRockContext);
  const { priceChain,optionChain } = useContext(TalismanChainContext);
  const { optionIntention} = useContext(TalismanIntentionsContext);

  const modelOptions: DropdownMenuOptions = {
    title: "Elige el modelo",
    options: [
      { option: "Aura", price: 300 },
      { option: "Halo", price: 400 },
      { option: "Bindu", price: 500 },
    ],
  };
  const materialOptions: DropdownMenuOptions = {
    title: "Elige el material del modelo",
    options: [
      { option: "Oro", price: 30 },
      { option: "Plata", price: 20 },
      { option: "Acero", price: 10 },
    ],
  };

  const piedraOptions: DropdownMenuOptions = {
    title: "Elige tu piedra",
    options: [
      { option: "Amatista", price: 15 },
      { option: "Cuarzo rosa", price: 20 },
      { option: "Ojo de tigre", price: 25 },
      { option: "Lapislázuli", price: 30 },
      { option: "Ágata", price: 45 },
      { option: "Jaspe", price: 20 },
      { option: "Ónix", price: 15 },
    ],
  };

  const chainOptions: DropdownMenuOptions = {
    title: "Elige el tipo de cadena",
    options: [
      { option: "Oro", price: 20 },
      { option: "Plata", price: 15 },
      { option: "Acero", price: 10 },
      { option: "Tiento", price: 5 },
    ],
  };

  const intencionOptions: DropdownMenuOptions = {
    title: "Elige tu intención",
    options: [
      { option: "Abundancia", price: 0 },
      { option: "Amor incondicional", price: 0 },
      { option: "Aquí y ahora", price: 0 },
      { option: "Coraje", price: 0 },
      { option: "Gratitud", price: 0 },
      { option: "Potencial infinito", price: 0 },
      { option: "Sabiduría de la incertidumbre", price: 0 },
      { option: "Yo verdadero", price: 0 },
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


  const addToShopingCart = () => {
    if (optionModel && optionMaterial && optionRock && optionChain && optionIntention) {
      const shopingCartJSON = localStorage.getItem('shopingCart') || "[]";
      const shopingCart = JSON.parse(shopingCartJSON);
      const shopingCartNewItem = {id:Math.round(Math.random()*10000),product:"Talisman analógico",model:optionModel, material:optionMaterial, rock:optionRock, chain:optionChain, intention:optionIntention, image:ejemploTalismanesAnalogicos[0].image,price:priceModel + priceMaterial + priceRock + priceChain,quantity:1};
      const shopingCartUpdate = [shopingCartNewItem,...shopingCart];
      localStorage.setItem('shopingCart', JSON.stringify(shopingCartUpdate));
      //agregar un pop up
      alert("Agregado al carrito de compras");
      return
    } else {
      //agregar un pop up
      alert("Debe completar todos los campos del talismán");
      return
    }
  }
  



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
          <h5>${priceModel + priceMaterial + priceRock + priceChain}</h5>
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
          <DropdownMenu {...chainOptions} />
          <DropdownMenu {...intencionOptions} />

          {dropdownIntensiones.openModal && (
            <DropDownIntensiones
              handleDropDown={dropdownIntensiones.handleOpenModal}
            />
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
            <Button text={`$${priceModel + priceMaterial + priceRock + priceChain}  Ir a comprar`} />
            <div className="auxiliar-buttons-container">
              {!dropdownDevoluciones.openModal && (
                <ButtonArrowUp
                  onClick={dropdownDevoluciones.handleOpenModal}
                  text="Devoluciones y envío"
                  color="#6f3289"
                />
              )}

              <Button onClick={addToShopingCart} text="Agregar al carrito de compras" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
