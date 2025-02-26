import {useContext, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {RightNextIcon} from '../../assets/icons/icons';
import {ShopingCartContext, UserContext} from '../../context';
import {TimerContext} from '../../context/timerContext';
import {Button} from '../../ui/components/Button';
import {PopUp} from '../../ui/components/PopUp';
import {ejDigitalTalisman} from '../assets/ejDigitalTalisman';
import {
  addProductToShoppingCart,
  addProductToShoppingCartDB,
} from '../helpers/shoppingCartFunctions';
import { CurrencyModal } from '../components/CurrencyModal';
import { CurrencyContext } from '../../context/currencyContext';

const precio = '10,00';

function BuyDigitalTalisman() {
  window.scrollTo(0, 0);
  const [index, setIndex] = useState<number>(0);

  const [popUp, setPopUp] = useState<boolean>(false);
  const togglePopUp = () => {
    setPopUp(!popUp);
  };

  const nextIndex = () => {
    if (index < ejDigitalTalisman.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };
  const previousIndex = () => {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(ejDigitalTalisman.length - 1);
    }
  };

  const navigate = useNavigate();

  const linkTo = () => {
    navigate('/portal-usuario');
  };

  const {shopingCartOpen, toggleMenu, addItemToCart} =
    useContext(ShopingCartContext);

  const {email} = useContext(UserContext);

  const handleBuyTalisman = async () => {
    const shopingCartNewItem = {
      model: 'Digital',
      metal: 'Digital',
      rock: 'Digital',
      chain: 'Digital',
      intention: 'Digital',
      image: ejDigitalTalisman[0].image,
      quantity: 1,
    };

    const newProduct = email
      ? await addProductToShoppingCartDB(shopingCartNewItem)
      : await addProductToShoppingCart(shopingCartNewItem);

    addItemToCart(newProduct);

    toggleMenu();

    return;
  };

  const {activatedAlarm} = useContext(TimerContext);
  const {currency}=useContext(CurrencyContext)
  return (
    <main
      className={
        activatedAlarm || shopingCartOpen ? 'viewport-background' : ''
      }>
        { !currency &&  <CurrencyModal/>}
      <section className="buyDigitalTalisman-container efectoReveal">
        
        {popUp && (
          <PopUp
            linkTo={linkTo}
            closePopUp={togglePopUp}
            buttonText="Continuar"
            text="Para adquirir tu talismán digital debes estar logueado."
          />
        )}
        <div
          style={{opacity: popUp ? '0.4' : '1'}}
          className="buyDigitalTalisman-internal-container">
          <img src={ejDigitalTalisman[index].image} alt="talisman digital" />
          <div className="buyDigitalTalisman-internal-bullet-container left">
            {ejDigitalTalisman.map((item, i) => {
              return (
                <div
                  className={index === i ? 'bullet-visible' : 'bullet'}
                  key={i}>
                  <img src={item.image} alt={item.title} />
                </div>
              );
            })}
          </div>
          <div
            onClick={previousIndex}
            className="buyDigitalTalisman-internal-arrow-container left">
            <RightNextIcon />
          </div>
          <div
            onClick={nextIndex}
            className="buyDigitalTalisman-internal-arrow-container">
            <RightNextIcon />
          </div>
        </div>

        <div
          className="buyDigitalTalisman-internal-container right"
          style={{opacity: popUp ? '0.4' : '1'}}>
          <div className="buyDigitalTalisman-internal-center-container">
            <h2>Inicio /Tienda /Talismán Digital</h2>

            <h3>Talismán Digital</h3>
            <h5>{`$${precio}`}</h5>

            <h6>Descripción y detalles</h6>
            <p>
              El Talismán Digital es una animación 3D única por cada usuario,
              cuidadosamente diseñada para reflejar el ADN energético de cada
              individuo en el momento de su nacimiento.
            </p>

            <div className="info-que-incluye-container">
              <p>¿Que incluye?</p>
              <ul>
                <li>Meditación Visual</li>
                <li>Tu Sonido</li>
                <li>Activación</li>
                <li>ADN Energético</li>
                <li>Acceso a Meditaciones Lovelia</li>
                <li>Timer</li>
                <li>Banco de sonidos</li>
              </ul>
            </div>
            <h6>Importante:</h6>
            <div className="info-requerida-container">
              <p>Para generar tu talismán necesitaremos:</p>
              <ul>
                <li>Nombre completo</li>
                <li>Lugar, fecha, y hora de nacimiento</li>
              </ul>
            </div>
          </div>

          <div className="buttons-container">
            <Button onClick={handleBuyTalisman} text={`Agregar al carrito`} />
          </div>
        </div>
      </section>
    </main>
  );
}

export default BuyDigitalTalisman;
