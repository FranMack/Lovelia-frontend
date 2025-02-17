import {useCallback, useContext, useEffect, useRef, useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {LoginIcon, ShopingIcon} from '../../assets/icons/icons';
import {CurrencyContext} from '../../context/currencyContext';
import {ShopingCartContext} from '../../context/modalShopingCartContext';
import {UserContext} from '../../context/userContext';
import {numberOfProducts} from '../../utils/numberOfProducts';
import logoYellow from '../assets/logo-lovelia-yellow.webp';
import logo from '../assets/lovelia-logo.webp';
import {CurrencySelector} from './CurrencySelector';
import {NavbarDropDown} from './NavbarDropDown';

export function Navbar() {
  const {shopingCartOpen, toggleMenu, shopingCartItems} =
    useContext(ShopingCartContext);
  const {email, name, lastname, subscription, talismanActivated} =
    useContext(UserContext);

  const navigate = useNavigate();
  const location = useLocation().pathname.slice(1);

  const [buttonFocusPosition, setButtonFocusPosition] = useState(location);
  const [hoverPosition, setHoverPosition] = useState('');
  const [scrollPosition, setScrollPosition] = useState(0);

  // Update the focused button position on route change
  useEffect(() => {
    setButtonFocusPosition(location);
  }, [location]);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const linkToSection = useCallback(
    (
      sectionPath: string,
      event: React.MouseEvent<HTMLDivElement> | React.SyntheticEvent,
    ) => {
      event.stopPropagation();
      navigate(sectionPath);
    },
    [navigate],
  );

  const timeoutRef = useRef<NodeJS.Timeout | null>(null); // Referencia al temporiza

  const handleMouseOver = useCallback((position: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setHoverPosition(position);
  }, []);

  const handleMouseLeave = useCallback(() => {
    // Configurar un temporizador para cerrar el menú
    timeoutRef.current = setTimeout(() => {
      setHoverPosition('');
    }, 300); // Tiempo de espera (300ms)
  }, []);

  const navbarButtons = [
    {title: 'Home', path: [''], buttonOptions: []},
    {
      title: 'Talismán',
      path: ['talisman-landing', 'talisman-digital', 'talisman-analogico'],
      buttonOptions: [
        {buttonName: 'Talismán Digital', path: 'talisman-digital'},
        {buttonName: 'Talismán Analógico', path: 'talisman-analogico'},
      ],
    },
    {title: 'Meditaciones', path: ['meditations'], buttonOptions: []},
    {
      title: 'Intenciones',
      path: ['intenciones'],
      buttonOptions: [
        {buttonName: 'Amor incondicional', path: 'intenciones/2'},
        {buttonName: 'Abundancia', path: 'intenciones/3'},
        {buttonName: 'Aquí y ahora', path: 'intenciones/4'},
        {buttonName: 'Potencial infinito', path: 'intenciones/5'},
        {buttonName: 'Coraje', path: 'intenciones/6'},
        {buttonName: 'Yo verdadero', path: 'intenciones/7'},
        {buttonName: 'Gratitud', path: 'intenciones/8'},
        {buttonName: 'Sabiduría de la Incertidumbre', path: 'intenciones/1'},
      ],
    },
    {
      title: 'Tienda',
      path: [
        'tienda',
        'comprar-talisman-digital',
        'comprar-talisman-analogico',
      ],
      buttonOptions: [
        {buttonName: 'Talismán Digital', path: 'buy-digital'},
        {buttonName: 'Talismán Analógico', path: 'buy-analogic'},
      ],
    },
    {title: 'Blog', path: ['blog'], buttonOptions: []},
    {title: 'Contacto', path: ['contacto'], buttonOptions: []},
  ];

  if (email && subscription && talismanActivated) {
    navbarButtons[1].buttonOptions.unshift({
      buttonName: 'Mi talismán',
      path: 'myTalisman',
    });
  }

  const sectionWithYellowLogo = [
    'intenciones',
    'portal-usuario',
    ...Array.from({length: 8}, (_, i) => `activacion/${i + 1}`),
  ];

  const {currency} = useContext(CurrencyContext);

  return (
    <nav
      className={`navbar-container ${scrollPosition > 10 && 'navbar-move'} ${
        shopingCartOpen ? 'viewport-background' : ''
      }`}
      onMouseLeave={handleMouseLeave}>
      <div onClick={() => navigate('/')} className="navbar-logo-container">
        <img
          src={sectionWithYellowLogo.includes(location) ? logoYellow : logo}
          alt="Logo-Lovelia"
        />
      </div>
      <ul className="navbar-menu">
        {currency && (
          <li className="navbar-menu-icon">
            <CurrencySelector />
          </li>
        )}

        {navbarButtons.map((button, i) => (
          <div
            key={i}
            className="navbar-button-menu-container"
            onMouseEnter={() => handleMouseOver(button.path[0])}
            onMouseLeave={handleMouseLeave}>
            <li
              onMouseMove={() => handleMouseOver(button.path[0])}
              onMouseEnter={() => handleMouseOver(button.path[0])}
              onClick={event => linkToSection(button.path[0], event)}
              className={
                button.path.includes(buttonFocusPosition)
                  ? 'navbar-button-focus-style'
                  : 'navbar-button-style'
              }>
              {button.title}
            </li>
            {hoverPosition === button.path[0] &&
              button.buttonOptions.length > 0 && (
                <NavbarDropDown
                  buttonOptions={button.buttonOptions}
                  handleMouseOver={() => handleMouseOver(button.path[0])}
                  handleMouseLeave={handleMouseLeave}
                />
              )}
          </div>
        ))}

        <li onClick={toggleMenu} className="navbar-menu-icon shoping-icon">
          <ShopingIcon />
          {shopingCartItems.length > 0 && (
            <div className="number-items-container">
              <h2>{numberOfProducts(shopingCartItems)}</h2>
            </div>
          )}
        </li>

        {!name ? (
          <li
            onClick={event => linkToSection('portal-usuario', event)}
            className={
              [
                'portal-usuario',
                'forget-password',
                'login',
                'register',
                'profile',
              ].includes(buttonFocusPosition)
                ? 'navbar-svg-focus-style navbar-menu-icon'
                : 'navbar-menu-icon'
            }>
            <LoginIcon />
          </li>
        ) : (
          <div
            className="navbar-user-container"
            onMouseEnter={() => handleMouseOver('login')}
            onMouseLeave={handleMouseLeave}>
            <div
              onClick={event => linkToSection('login', event)}
              className={
                ['login', 'register', 'profile'].includes(buttonFocusPosition)
                  ? 'navbar-user-avatar-focus-style navbar-user-avatar'
                  : 'navbar-user-avatar'
              }>
              <h5>{`${name[0]}${lastname[0]}`.toUpperCase()}</h5>
            </div>
            {hoverPosition === 'login' && (
              <NavbarDropDown
                buttonOptions={[
                  {buttonName: 'Perfil', path: 'profile'},
                  {buttonName: 'Salir', path: 'logout'},
                ]}
                handleMouseOver={() => handleMouseOver('login')}
                handleMouseLeave={handleMouseLeave}
              />
            )}
          </div>
        )}
      </ul>
    </nav>
  );
}
