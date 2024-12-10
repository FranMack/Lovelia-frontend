import axios from 'axios';
import {useContext, useEffect, useState} from 'react';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {RightNextIcon} from '../../assets/icons/icons';
import {envs} from '../../config';
import {ShopingCartContext} from '../../context';
import {TalismanModelContext} from '../../context/talismanModelContext';
import {TimerContext} from '../../context/timerContext';
import {useOpenModal} from '../../hooks/useOpenModal';
import {Button} from '../../ui/components/Button';
import {DropdownMenu, DropdownMenuOptions} from '../components/DropdownMenu';

const modelOptions: DropdownMenuOptions = {
  title: 'Modelo',
  options: [
    {option: 'Aura', price: 3},
    {option: 'Halo', price: 4},
    {option: 'Bindu', price: 5},
  ],
};
const materialOptions: DropdownMenuOptions = {
  title: 'Metal',
  options: [
    {option: 'Aleación bañada en oro', price: 1},
    {option: 'Plata 925', price: 2},
  ],
};

const piedraOptions: DropdownMenuOptions = {
  title: 'Piedra',
  options: [
    {option: 'Lapislázuli', price: 1},
    {option: 'Labradorita', price: 1},
    {option: 'Turquesa', price: 2},
    {option: 'Onix Negro', price: 3},
    {option: 'Rodocrosita', price: 4},
    {option: 'Onix Blanco', price: 2},
  ],
};

const chainOptions: DropdownMenuOptions = {
  title: 'Colgante',
  options: [
    {option: 'Cadena', price: 2},
    {option: 'Tiento', price: 1},
  ],
};

const intencionOptions: DropdownMenuOptions = {
  title: 'Intención',
  options: [
    {option: 'Abundancia', price: 0},
    {option: 'Amor incondicional', price: 0},
    {option: 'Aquí y ahora', price: 0},
    {option: 'Coraje', price: 0},
    {option: 'Gratitud', price: 0},
    {option: 'Potencial infinito', price: 0},
    {option: 'Sabiduría de la incertidumbre', price: 0},
    {option: 'Yo verdadero', price: 0},
  ],
};

interface Product {
  model: string;
  metal: string;
  rock: string;
  chain: string;
  price: number;
  stock: number;
  images: string[]; // Array de URLs como strings
  id: string; // Identificador único (asumimos que es un string)
}

const initialValue: Product = {
  model: '',
  metal: '',
  rock: '',
  chain: '',
  price: 0,
  stock: 0,
  images: [],
  id: '',
};

function BuyAnalogTalisman() {
  const {toggleMenu, setShopingCartItems} = useContext(ShopingCartContext);

  const [index, setIndex] = useState<number>(0);

  const nextIndex = () => {
    if (index < product.images.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };
  const previousIndex = () => {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(product.images.length - 1);
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
      const shopingCartJSON = localStorage.getItem('shopingCart') || '[]';
      const shopingCart = JSON.parse(shopingCartJSON);
      const shopingCartNewItem = {
        id: Math.round(Math.random() * 10000000),
        product: 'Talismán analógico',
        model: optionModel,
        material: optionMaterial,
        rock: optionRock,
        chain: optionChain,
        intention: optionIntention,
        image: product.images[0],
        price: priceModel + priceMaterial + priceRock + priceChain,
        quantity: 1,
      };
      const shopingCartUpdate = [shopingCartNewItem, ...shopingCart];
      localStorage.setItem('shopingCart', JSON.stringify(shopingCartUpdate));
      setShopingCartItems(shopingCartUpdate);

      toggleMenu();
      setOptionModel('');
      setPriceModel(0);
      setOptionMaterial('');
      setPriceMaterial(0);
      setOptioChain('');
      setPriceChain(0);
      setOptionRock('');
      setPriceRock(0);
      setOptionIntention('');
      setPriceIntention(0);
      setAddedToCart(false);
      setProduct(listOfProducts[0]);

      return;
    } else {
      setWarnings({
        model: !optionModel,
        rock: !optionRock,
        chain: !optionChain,
        metal: !optionMaterial,
        intention: !optionIntention,
      });
      setAddedToCart(true);
      //agregar un pop up
      toast.warning('Debe completar todos los campos del talismán');
      return;
    }
  };

  const {activatedAlarm} = useContext(TimerContext);
  const {shopingCartOpen} = useContext(ShopingCartContext);

  const [product, setProduct] = useState<Product>(initialValue);
  const [listOfProducts, setListOfProducts] = useState<Product[]>([]);

  //validaciones
  const [validationError, setAddedToCart] = useState(false);
  const [warnings, setWarnings] = useState({
    model: false,
    rock: false,
    chain: false,
    metal: false,
    intention: false,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    axios
      .get(`${envs.API_DOMAIN}/api/v1/product/get-list-of-products`)
      .then(response => {
        setListOfProducts(response.data);
        setProduct(response.data[0]);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (optionModel || optionRock || optionChain || optionMaterial) {
      const model = optionModel ? optionModel : 'Aura';
      const rock = optionRock ? optionRock : 'Labradorita';
      const chain = optionChain ? optionChain : 'Cadena';
      const metal = optionMaterial ? optionMaterial : 'Aleación bañada en oro';

      if (validationError) {
        setWarnings({
          model: !optionModel,
          rock: !optionRock,
          chain: !optionChain,
          metal: !optionMaterial,
          intention: !optionIntention,
        });
      }

      const filter = listOfProducts.find(item => {
        if (
          item.model === model &&
          item.rock === rock &&
          item.chain === chain &&
          item.metal === metal
        ) {
          return item;
        }
      });
      if (filter) {
        setProduct(filter!);
      }

      return;
    }
  }, [optionModel, optionRock, optionChain, optionMaterial, optionIntention]);

  return (
    <main
      className={
        activatedAlarm || shopingCartOpen ? 'viewport-background' : ''
      }>
      <section className="custonTalisman-container efectoReveal">
        <div className="custonTalisman-internal-container left">
          <img src={product.images[index]} alt={product.model} />

          <div className="custonTalisman-internal-bullet-container">
            {product.images.map((item, i) => {
              return (
                <div
                  className={index === i ? 'bullet-visible' : 'bullet'}
                  key={i}>
                  <img
                    src={item}
                    alt={`${product.model} ${product.metal} ${product.rock} ${product.chain}`}
                  />
                </div>
              );
            })}
          </div>
          <div
            onClick={previousIndex}
            className="custonTalisman-internal-arrow-container left">
            <RightNextIcon />
          </div>
          <div
            onClick={nextIndex}
            className="custonTalisman-internal-arrow-container">
            <RightNextIcon />
          </div>
        </div>

        <div
          className="custonTalisman-internal-container right"
          style={{
            backgroundColor: dropdownIntensiones.openModal ? '#EDC7B9' : '',
          }}>
          <div
            className="custonTalisman-internal-center-container"
            style={{opacity: dropdownIntensiones.openModal ? '0.5' : '1'}}>
            <h2>Inicio /Tienda /Talismán analógico</h2>

            <h3>Talismán Analógico</h3>
            <h5>
              {optionModel && optionRock && optionChain && optionMaterial
                ? `$${product.price.toFixed(2)}`
                : 'Para ver el precio, arma tu talismán '}
            </h5>

            <div className="options-container">
              <DropdownMenu
                {...{...modelOptions, validationError: warnings.model}}
              />

              <DropdownMenu
                {...{...materialOptions, validationError: warnings.metal}}
              />

              <DropdownMenu
                {...{...piedraOptions, validationError: warnings.rock}}
              />

              <DropdownMenu
                {...{...chainOptions, validationError: warnings.chain}}
              />

              <DropdownMenu
                {...{...intencionOptions, validationError: warnings.intention}}
              />
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
