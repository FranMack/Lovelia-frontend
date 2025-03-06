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
            INTENCIONAR CON TU TALISMÁN
          </h2>
          <p>
            Puedes intencionar con tu talismán para <strong>conectarte</strong> con tu <strong>energía</strong>  y
            <strong> propósito</strong> personal. Eres tú quien elige la intención que deseas
            integrar en tu vida, y puedes modificarla siempre que lo necesites,
            repitiendo el <strong>ritual</strong> que hemos diseñado para guiarte en este
            proceso.
          </p>
        </div>
        <div className="button-container">
          <Button text="QUIERO MI TALISMÁN" onClick={linkTo} />
        </div>
      </div>
    </Template1>
  );
};
