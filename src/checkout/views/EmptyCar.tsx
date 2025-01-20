import { useNavigate } from 'react-router';
import {ShopingIcon} from '../../assets/icons/icons';
import { Button } from '../../ui/components';

export const EmptyCar = () => {


    const navigate=useNavigate()
    const linkTo=()=>{
        navigate("/tienda")
    }
  return (
    <div className="error-page-container">
      <div className="image-container">
        <ShopingIcon />
      </div>

      <h1>Tu carrito se encuentra vacío.</h1>
      <h2>Haz click aquí para volver a la tienda.</h2>

      <Button text="IR A TIENDA" onClick={linkTo} />
    </div>
  );
};
