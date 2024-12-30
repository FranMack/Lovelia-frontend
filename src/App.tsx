import {onMessage} from 'firebase/messaging';
import {Routes, useLocation} from 'react-router-dom';
import {messaging} from './config/firebase.ts'; // Import the messaging object
import {AlarmPopUp} from './ui/components/AlarmPopUp.tsx';

import {
  Footer,
  MobileFooter,
  MobileMenu,
  MobileNavbar,
  Navbar,
} from './ui/components';

import {useContext, useEffect, useState} from 'react';
import {ToastContainer} from 'react-toastify';
import {MobileMenuContext} from './context/mobileMenuContext.tsx';
import {ShopingCartContext} from './context/modalShopingCartContext.tsx';
import {TimerContext} from './context/timerContext.tsx';
import {UserContext} from './context/userContext.tsx';
import useRequestPermission from './hooks/useRequestPermission.ts';
import {
  PrivatesRoutesCollection,
  PublicRoutesCollection,
  RestrictedRoutesCollection,
} from './router';
import {ShopingCart} from './ui/components/ShopingCart.tsx';

function App() {
  const location = useLocation().pathname;

  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const {shopingCartOpen, setShopingCartItems} = useContext(ShopingCartContext);
  const {refreshME} = useContext(UserContext);

  const {activatedAlarm, setActivatedAlarm} = useContext(TimerContext);

  const [alarmUrl, setAlarmUrl] = useState<string>('');
  // Request permission to receive notifications
  useRequestPermission();

  useEffect(() => {
    const handleWindowSize = () => setWindowSize(window.innerWidth);
    window.addEventListener('resize', handleWindowSize);

    // Listen for messages when the app is in the foreground
    const unsubscribe = onMessage(messaging, payload => {
      console.log('Message received in the foreground: ', payload);
      if (payload.data) {
        setAlarmUrl(payload.data.soundUrl);
        setActivatedAlarm(true);
      }
    });

    //actualiza el shopingCartContext
    const shopingCartJSON = localStorage.getItem('shopingCart') || '[]';

    setShopingCartItems(JSON.parse(shopingCartJSON));

    //actualiza el userContext - endpont /me
    refreshME();

    return () => {
      unsubscribe();
      window.removeEventListener('resize', handleWindowSize);
    };
  }, []);

  const {menuOpen, toggleMenu, menuRef} = useContext(MobileMenuContext);

  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
  
    console.log("Elemento clickeado:", target);
  
    // Comprueba si el clic fue dentro del menú o en el ícono
    if (
      menuOpen &&
      menuRef!.current &&
      !menuRef!.current.contains(target) &&
      !target.closest('#menu-hamburguesa-icon') // Verifica si el clic ocurrió en el SVG o sus hijos
    ) {
      toggleMenu();
    }
  };

  useEffect(() => {
    if (menuOpen) {
      document.addEventListener('click', handleClickOutside);

      return () => {
        // Eliminar el event listener cuando el componente se desmontefS
        document.removeEventListener('click', handleClickOutside);
      };
    }
  }, [menuOpen]);

  return (
    <>
      <ToastContainer style={{fontSize: '1.6rem'}} />
      {location !== '/myTalisman' && windowSize >= 1024 && <Navbar />}
      {location !== '/myTalisman' && windowSize < 1024 && <MobileNavbar />}
      {shopingCartOpen && <ShopingCart />}
      <MobileMenu />
      {activatedAlarm && <AlarmPopUp alarmUrl={alarmUrl} />}

      <Routes>
        {/*RUTAS PÚBLICAS*/}
        {PublicRoutesCollection()}

        {/*RUTAs ACCESIBLES PARA USUARIOS  NO LOGUEADOS*/}
        {RestrictedRoutesCollection()}

        {/*RUTAS PRIVADAS*/}
        {PrivatesRoutesCollection()}
      </Routes>

      {location !== '/myTalisman' && windowSize >= 1024 && <Footer />}
      {location !== '/myTalisman' && windowSize < 1024 && <MobileFooter />}
    </>
  );
}

export default App;
