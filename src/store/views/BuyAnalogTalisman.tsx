import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RightNextIcon } from "../../assets/icons/icons";
import { ShopingCartContext } from "../../context";
import { TalismanModelContext } from "../../context/talismanModelContext";
import { TimerContext } from "../../context/timerContext";
import { useOpenModal } from "../../hooks/useOpenModal";
import { Button } from "../../ui/components/Button";
import { ejemploTalismanesAnalogicos } from "../assets/ejemplosTalismanes";
import { DropdownMenu, DropdownMenuOptions } from "../components/DropdownMenu";

const modelOptions: DropdownMenuOptions = {
  title: "Modelo",
  options: [
    { option: "Aura", price: 300 },
    { option: "Halo", price: 400 },
    { option: "Bindu", price: 500 },
  ],
};
const materialOptions: DropdownMenuOptions = {
  title: "Metal",
  options: [
    { option: "Aleación bañada en oro", price: 30 },
    { option: "Plata 925", price: 20 },
  ],
};

const piedraOptions: DropdownMenuOptions = {
  title: "Piedra",
  options: [
    { option: "Lapislázuli", price: 15 },
    { option: "Labradorita", price: 15 },
    { option: "Turquesa", price: 25 },
    { option: "Obsidiana dorada", price: 30 },
    { option: "Rodocrosita", price: 45 },
    { option: "Onix blanco", price: 20 },
  ],
};

const chainOptions: DropdownMenuOptions = {
  title: "Colgante",
  options: [
    { option: "Cadena de plata", price: 20 },
    { option: "Cadena de plata bañada en oro", price: 15 },
    { option: "Tiento café", price: 10 },
    { option: "Tiento negro", price: 5 },
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

 function BuyAnalogTalisman() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);



  const { toggleMenu, setShopingCartItems } = useContext(ShopingCartContext);

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
      setIndex(index - 1);
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
        id: Math.round(Math.random() * 10000000),
        product: "Talismán analógico",
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
      setShopingCartItems(shopingCartUpdate);

      toggleMenu();
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
      toast.warning("Debe completar todos los campos del talismán");
      return;
    }
  };

  const{activatedAlarm}=useContext(TimerContext)
  const {shopingCartOpen}=useContext(ShopingCartContext)


  return (
    <main className={activatedAlarm || shopingCartOpen ? "viewport-background":""}>
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

      <div
        className="custonTalisman-internal-container right"
        style={{
          backgroundColor: dropdownIntensiones.openModal ? "#EDC7B9" : "",
        }}
      >
        <div
          className="custonTalisman-internal-center-container"
          style={{ opacity: dropdownIntensiones.openModal ? "0.5" : "1" }}
        >
          <h2>Inicio /Tienda /Talismán analógico</h2>

          <h3>Talismán Analógico</h3>
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

          <div className="buttons-container">
            <Button
              onClick={addToShopingCart}
              text="Agregar al carrito de compras"
            />
          
          </div>
        </div>
      </div>
    </section>
    </main>
  );
}

export default BuyAnalogTalisman;