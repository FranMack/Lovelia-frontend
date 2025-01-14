import {useNavigate} from 'react-router';
import {useScrollReveal} from '../../hooks/useScrollReveal';
import {Button} from '../../ui/components';
import {Position, Template1, Template1Options} from '../../ui/pages/Template1';
import activation from '../assets/talisman_digital_activacion.webp';

const templateOptions: Template1Options = {
  image: activation,
  position: Position.Right,
  color: '#ffff',
  backgroundColor: '#82B74D',
};

export const TalismanDigital4 = () => {
  const navigate = useNavigate();
  const linkTo = () => {
    navigate('/buy-digital');
  };

  const animationRef = useScrollReveal<HTMLDivElement>('topReveal');
  return (
    <Template1 {...templateOptions}>
      <div
        ref={animationRef}
        className="talismanDigitalTemplate-container right">
        <div className="talismanDigitalTemplate-internal-text-container">
          <h2>
            (3)
            <br />
            ACTIVACIÓN
          </h2>
          <p>
            La activación de tu talismán es un ritual para que puedas{' '}
            <strong>
              conectarte profundamente con tu intención y energía personal.
            </strong>{' '}
            Al activar tu talismán, eres tú quien elige tu propia intención, un
            propósito o deseo que deseas manifestar en tu vida. Esta intención
            es completamente personal, y lo más significativo es que puedes
            cambiarla siempre que lo necesites.
          </p>
          <p>
            A través de este proceso, te embarcarás en un viaje introspectivo
            que fortalecerá tu conexión con tu ser interior, facilitando que tu
            intención se manifieste en tu vida diaria. Es una experiencia que te
            permite dirigir tu energía de manera consciente, reafirmando tu
            capacidad de transformar tus intenciones en realidades.
          </p>
        </div>
        <div className="button-container">
          <Button text="QUIERO MI TALISMÁN" onClick={linkTo} />
        </div>
      </div>
    </Template1>
  );
};
