import {useNavigate} from 'react-router';
import {Button} from '../components';
export const NotFoundPage = () => {
  const navigate = useNavigate();
  const linkTo = () => {
    navigate('/');
  };
  return (
    <div className="notFound-page-container">

      <div className='notFound-text-container'>
      <h1>404</h1>
      <h2>Not Found</h2>
      <h3>No se ha encontrado la URL solicitada</h3>
      </div>

      <Button text="VOLVER AL HOME" onClick={linkTo} />
    </div>
  );
};
