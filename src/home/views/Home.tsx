import {useContext, useEffect} from 'react';
import {useNavigate} from 'react-router';
import {ShopingCartContext} from '../../context';
import {TimerContext} from '../../context/timerContext';
import {Home1, Home2, Home3, Home4, Home5, Home6} from '../pages';

const Home = () => {
  const navigation = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('checkoutPath')) {
      localStorage.removeItem('checkoutPath');
      navigation('/checkout/digital');
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const {activatedAlarm} = useContext(TimerContext);
  const {shopingCartOpen} = useContext(ShopingCartContext);
  return (
    <main
      className={
        activatedAlarm || shopingCartOpen ? 'viewport-background' : ''
      }>
      <Home1 />
      <Home2 />
      <Home4 />
      <Home5 />
      <Home6 />
      <Home3 />
      {/*<Home7 />*/}
    </main>
  );
};

export default Home;
