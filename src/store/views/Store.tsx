import {useContext, useEffect} from 'react';
import {ShopingCartContext} from '../../context';
import {TimerContext} from '../../context/timerContext';
import {Store1, Store2, Store2b, Store3} from '../pages';

const Store = () => {
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
      <Store1 />
      <Store2 />
      <Store2b />
      <Store3 />
    </main>
  );
};
export default Store;
