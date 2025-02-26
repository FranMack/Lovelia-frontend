import axios from 'axios';
import {useContext, useEffect, useState} from 'react';
import {useSearchParams} from 'react-router-dom';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {LoginIcon, RightNextIcon} from '../../assets/icons/icons';
import {envs} from '../../config';
import {ShopingCartContext, UserContext} from '../../context';
import {TalismanModelContext} from '../../context/talismanModelContext';
import {TimerContext} from '../../context/timerContext';
import {useOpenModal} from '../../hooks/useOpenModal';
import {Button} from '../../ui/components/Button';
import { IntentionModal } from '../components/IntentionModal';
import {
  chainOptions,
  intencionOptions,
  metalOptions,
  modelOptions,
  piedraOptions,
} from '../assets/buyAnalogTalismanInfo';
import soldOuT from '../assets/soldout.png';
import {DropdownMenu} from '../components/DropdownMenu';
import {
  addProductToShoppingCart,
  addProductToShoppingCartDB,
} from '../helpers/shoppingCartFunctions';

import { CurrencyModal } from '../components/CurrencyModal';
import { CurrencyContext } from '../../context/currencyContext';
import { formatPrice } from '../helpers/priceFormater';

interface Product {
  model: string;
  metal: string;
  rock: string;
  chain: string;
  price_AR: number;
  price_MX: number;
  price_RM: number;
  stock: number;
  images: string[]; // Array de URLs como strings
  id: string; // Identificador único (asumimos que es un string)
}

function BuyAnalogTalisman() {
  const [searchParams] = useSearchParams();

  const initialValue: Product = {
    model: searchParams.get('model') ?? '',
    metal: '',
    rock: '',
    chain: '',
    price_AR:0,
    price_MX:0,
    price_RM:0,
    stock: 0,
    images: [],
    id: '',
  };

  const {email} = useContext(UserContext);
  const {toggleMenu, addItemToCart} = useContext(ShopingCartContext);

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
    optionModel,
    optionMetal,
    optionRock,
    optionChain,
    optionIntention,
    setOptionModel,
    setOptionMetal,
    setOptioChain,
    setOptionRock,
    setOptionIntention,
  } = useContext(TalismanModelContext);

  const addToShopingCart = async () => {
    if (!hasStock) {
      toast.warning('Producto no disponible');
      return;
    }

    const isPulsera =
      optionModel === 'Pulsera' && optionMetal && optionIntention;
    const isTalisman =
      optionModel &&
      optionMetal &&
      optionRock &&
      optionChain &&
      optionIntention;

    if (isPulsera || isTalisman) {
      const shopingCartNewItem = {
        model: optionModel,
        metal: optionMetal,
        rock: isPulsera ? '' : optionRock,
        chain: isPulsera ? '' : optionChain,
        intention: optionIntention,
        image: product.images[0],
        quantity: 1,
      };

      const newProduct = email
        ? await addProductToShoppingCartDB(shopingCartNewItem)
        : await addProductToShoppingCart(shopingCartNewItem);

      addItemToCart(newProduct);

      // Reset form fields
      resetForm();
      return;
    }

    // Handle validation warnings
    setWarnings({
      model: !optionModel,
      rock: !optionRock,
      chain: !optionChain,
      metal: !optionMetal,
      intention: !optionIntention,
    });
    setAddedToCart(true);
    toast.warning('Debe completar todos los campos del talismán');
  };

  const resetForm = () => {
    setOptionModel('');
    setOptionMetal('');
    setOptioChain('');
    setOptionRock('');
    setOptionIntention('');
    toggleMenu();
    setAddedToCart(false);
    setProduct(listOfProducts[0]);
    setWarnings({
      model: false,
      rock: false,
      chain: false,
      metal: false,
      intention: false,
    });
  };

  const {activatedAlarm} = useContext(TimerContext);
  const {shopingCartOpen} = useContext(ShopingCartContext);
  const [product, setProduct] = useState<Product>(initialValue);
  const [listOfProducts, setListOfProducts] = useState<Product[]>([]);

  const [hasStock, setHasStock] = useState(true);

  const handleHasStock = async (product_id: string) => {
    const product = await axios.post(
      `${envs.API_DOMAIN}/api/v1/product/has-stock`,
      {product_id},
    );

    setHasStock(product.data);
  };

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

    setOptionModel(searchParams.get('model') ?? '');
    axios
      .get(`${envs.API_DOMAIN}/api/v1/product/get-list-of-products`)
      .then(response => {
        setListOfProducts(response.data);
        setProduct(response.data[0]);
      })
      .catch(error => {
        console.log(error);
      });
  }, [searchParams]);

  useEffect(() => {
    if (optionModel === 'Pulsera') {
      const metal = optionMetal ? optionMetal : 'Aleación bañada en oro';
      const filter = listOfProducts.find(item => {
        if (validationError) {
          setWarnings({
            model: !optionModel,
            rock: !optionRock,
            chain: !optionChain,
            metal: !optionMetal,
            intention: !optionIntention,
          });
        }
        if (item.model === 'Pulsera' && item.metal === metal) {
          handleHasStock(item.id);
          return item;
        }
      });

      if (filter) {
        setProduct(filter);
      }
    } else if (optionModel || optionRock || optionChain || optionMetal) {
      const model = optionModel ? optionModel : 'Aura';
      const metal = optionMetal ? optionMetal : 'Aleación bañada en oro';
      const rock = optionRock ? optionRock : 'Labradorita';
      const chain = optionChain ? optionChain : 'Cadena';

      if (validationError) {
        setWarnings({
          model: !optionModel,
          rock: !optionRock,
          chain: !optionChain,
          metal: !optionMetal,
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
          handleHasStock(item.id);
          return item;
        }
      });

      if (filter) {
        setProduct(filter!);
      }

      return;
    }
  }, [optionModel, optionRock, optionChain, optionMetal, optionIntention]);

  // para renderizar el producto correspondiente a las query params
  useEffect(() => {
    if (listOfProducts.length === 0) return;

    // Leer los valores de las query params
    const queryModel = searchParams.get('model');
    const queryMetal = searchParams.get('metal');
    const queryRock = searchParams.get('rock');
    const queryChain = searchParams.get('chain');

    // Filtrar el producto basado en las query params
    const filteredProduct = listOfProducts.find(item => {
      return (
        (!queryModel || item.model === queryModel) &&
        (!queryMetal || item.metal === queryMetal) &&
        (!queryRock || item.rock === queryRock) &&
        (!queryChain || item.chain === queryChain)
      );
    });

    if (filteredProduct) {
      setProduct(filteredProduct);
    } else {
      toast.warning(
        'No se encontraron productos con las opciones seleccionadas',
      );
    }
  }, [searchParams, listOfProducts]);

    const {currency}=useContext(CurrencyContext)

  return (
    <main
      className={
        activatedAlarm || shopingCartOpen ? 'viewport-background' : ''
      }>
        { !currency &&  <CurrencyModal/>}
      <section className="custonTalisman-container efectoReveal">
     
        <div className="custonTalisman-internal-container left">
          {(optionIntention && optionMetal) && <IntentionModal intention={optionIntention} metal={optionMetal}/>}
          {!hasStock && (
            <div className="sold-out-container efectoReveal">
              <img src={soldOuT} alt="sold-out" />
            </div>
          )}
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
            <h2>Inicio /Tienda /Talismánes Fisicos</h2>

            <h3>Tu Talismán</h3>
            <h5>
              {optionModel && optionRock && optionChain && optionMetal
                ? `Precio: ${formatPrice(currency, product.price_AR, product.price_MX, product.price_RM)}`
                : 'Elije el modelo, metal, piedra, colgante e intención '}
            </h5>

            <div className="options-container">
              <DropdownMenu
                {...{
                  ...modelOptions,
                  validationError: warnings.model,
                  initialValue: searchParams.get('model') ?? '',
                }}
              />

              <DropdownMenu
                {...{
                  ...metalOptions,
                  validationError: warnings.metal,
                  initialValue: searchParams.get('metal') ?? '',
                }}
              />

              {optionModel !== 'Pulsera' && (
                <DropdownMenu
                  {...{
                    ...piedraOptions,
                    validationError: warnings.rock,
                    initialValue: searchParams.get('rock') ?? '',
                  }}
                />
              )}

              {optionModel !== 'Pulsera' && (
                <DropdownMenu
                  {...{
                    ...chainOptions,
                    validationError: warnings.chain,
                    initialValue: searchParams.get('chain') ?? '',
                  }}
                />
              )}

              <DropdownMenu
                {...{
                  ...intencionOptions,
                  validationError: warnings.intention,
                }}
              />
            </div>

            <div className="buttons-container">
              <div className="info-container">
              <div className="icons-container">
                  <LoginIcon />
                  <LoginIcon />
                  <LoginIcon />
                  <LoginIcon />
                </div>
                <ul >
                  <li>Hecho a mano para ti</li>
                  <li>Metales de Alta calidad</li>
                  <li>Piedras naturales</li>
                </ul>
            
              </div>
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
