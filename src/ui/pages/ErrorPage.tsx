import { useNavigate } from 'react-router';
import {PulgIcon} from '../../assets/icons/icons';
import {Button} from '../components';
export const ErrorPage = () => {


    const navigate=useNavigate()
    const linkTo=()=>{
        navigate("/")
    }
  return (
    <div className="error-page-container">
      <div className="image-container">
        <PulgIcon />
      </div>

      <h1>Oops!!! Algo salio mal</h1>
      <h2>Haz click aqui para volver al home</h2>

      <Button text="VOLVER AL HOME" onClick={linkTo} />
    </div>
  );
};
