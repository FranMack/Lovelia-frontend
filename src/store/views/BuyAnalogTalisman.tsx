import { useContext, useEffect, useState } from "react";
import { ejemploTalismanesAnalogicos } from "../assets/ejemplosTalismanes";
import {  RightNextIcon } from "../../assets/icons/icons";
import { ButtonArrowUp } from "../../ui/components/ButtonArrowUp";
import { DropdownMenu, DropdownMenuOptions } from "../components/DropdownMenu";

import { useNavigate } from "react-router-dom";
import { Button } from "../../ui/components/Button";
import { DropDownIntensiones } from "../components/DropDownIntensiones";

import { TalismanModelContext } from "../../context/talismanModelContext";
import { useOpenModal } from "../../hooks/useOpenModal";
import { ShopingCartContext } from "../../context";

const modelOptions: DropdownMenuOptions = {
  title: "Modelo",
  options: [
    { option: "Aura", price: 300 },
    { option: "Halo", price: 400 },
    { option: "Bindu", price: 500 },
  ],
};
const materialOptions: DropdownMenuOptions = {
  title: "Material del dije",
  options: [
    { option: "Oro", price: 30 },
    { option: "Plata", price: 20 },
    { option: "Acero", price: 10 },
  ],
};

const piedraOptions: DropdownMenuOptions = {
  title: "Piedra",
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
  title: "Colgante",
  options: [
    { option: "Oro", price: 20 },
    { option: "Plata", price: 15 },
    { option: "Acero", price: 10 },
    { option: "Tiento", price: 5 },
  ],
};

const intencionOptions: DropdownMenuOptions = {
  title: "Intención",
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

export function BuyAnalogTalisman() {
  
  useEffect(()=>{window.scrollTo(0, 0);},[])
  const navigate = useNavigate();
  const linkToCheckOut = () => {
    navigate("/checkout/store");
  };
  const{toggleMenu: togleMenu}=useContext(ShopingCartContext)

  const [index, setIndex] = useState<number>(0);

  const nextIndex = () => {
    if (index < ejemploTalismanesAnalogicos.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };
  const previousIndex = () => {
    if (index > 0) {
      
      setIndex(index -1 );
    } else {
      setIndex(ejemploTalismanesAnalogicos.length - 1);
    }
  };

  const dropdownIntensiones = useOpenModal();

  const {
    priceModel,
    optionModel,
    priceMaterial,
    optionMaterial,
    priceRock,
    optionRock,
    priceChain,
    optionChain,
    optionIntention,
    setOptionModel,
    setPriceModel,
    setOptionMaterial,
    setPriceMaterial,
    setOptioChain,
    setPriceChain,
    setOptionRock,
    setPriceRock,
    setOptionIntention,
    setPriceIntention,
  } = useContext(TalismanModelContext);

 

  const addToShopingCart = () => {
    if (
      optionModel &&
      optionMaterial &&
      optionRock &&
      optionChain &&
      optionIntention
    ) {
      const shopingCartJSON = localStorage.getItem("shopingCart") || "[]";
      const shopingCart = JSON.parse(shopingCartJSON);
      const shopingCartNewItem = {
        product: "Talisman analógico",
        model: optionModel,
        material: optionMaterial,
        rock: optionRock,
        chain: optionChain,
        intention: optionIntention,
        image: ejemploTalismanesAnalogicos[0].image,
        price: priceModel + priceMaterial + priceRock + priceChain,
        quantity: 1,
      };
      const shopingCartUpdate = [shopingCartNewItem, ...shopingCart];
      localStorage.setItem("shopingCart", JSON.stringify(shopingCartUpdate));

      togleMenu()
      setOptionModel("");
      setPriceModel(0);
      setOptionMaterial("");
      setPriceMaterial(0);
      setOptioChain("");
      setPriceChain(0);
      setOptionRock("");
      setPriceRock(0);
      setOptionIntention("");
      setPriceIntention(0);

      return;
    } else {
      //agregar un pop up
      alert("Debe completar todos los campos del talismán");
      return;
    }
  };

  const productsPrice = () => {
    const shopingCartJSON = localStorage.getItem("shopingCart") || "[]";
    const shopingCartItems = JSON.parse(shopingCartJSON);
    return shopingCartItems.reduce(
      (
        acc: number,
        item: {
          [key: string]: number;
        }
      ) => acc + item.price,
      0
    );
  };

  return (
    <section className="custonTalisman-container efectoReveal">
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
          onClick={previousIndex}
          className="custonTalisman-internal-arrow-container left"
        >
          <RightNextIcon />
        </div>
        <div
          onClick={nextIndex}
          className="custonTalisman-internal-arrow-container"
        >
          <RightNextIcon />
        </div>

        

        
      </div>

      <div className="custonTalisman-internal-container right" style={{backgroundColor:(dropdownIntensiones.openModal) ?"#EDC7B9":""}}>
        <div className="custonTalisman-internal-center-container" style={{opacity:(dropdownIntensiones.openModal) ?"0.5":"1"}} >
          <h2>Inicio /Tienda /Talisman analógico</h2>
         
          <h3>Talisman Analógico</h3>
          <h5>
            ${(priceModel + priceMaterial + priceRock + priceChain).toFixed(2)}
          </h5>
    

          <div className="options-container">
         
          <DropdownMenu {...modelOptions} />
          <DropdownMenu {...materialOptions} />
          <DropdownMenu {...piedraOptions} />
          <DropdownMenu {...chainOptions} />
          <DropdownMenu {...intencionOptions} />
          </div>

       

          {!dropdownIntensiones.openModal && (
            <div className="custonTalisman-auxiliar-container">
              <ButtonArrowUp
                onClick={dropdownIntensiones.handleOpenModal}
                text="Descubre nuestras intenciones"
                color="#6f3289"
              />
            </div>
          )}

        
          <div className="buttons-container">
          <Button
                onClick={addToShopingCart}
                text="Agregar al carrito de compras"
              />
            <div className="auxiliar-buttons-container">
         
    <Button
              onClick={linkToCheckOut}
              text={`Ir a comprar`}
            />
           
            </div>
          </div>
        </div>
        {dropdownIntensiones.openModal && (
            <DropDownIntensiones
              handleDropDown={dropdownIntensiones.handleOpenModal}
            />
          )}
        
      </div>
    </section>
  );
}
