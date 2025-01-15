import {useNavigate} from 'react-router-dom';
import {useScrollReveal} from '../../hooks/useScrollReveal';
import {ButtonArrowRight} from '../../ui/components';
import {Position, Template1, Template1Options} from '../../ui/pages/Template1';
import poder from '../assets/talisman_analog_poder.webp';

const templateOptions: Template1Options = {
  image: poder,
  position: Position.Right,
  color: '#6f3289',
  backgroundColor: '#ECEA60',
};

export const TalismanAnalogic2 = () => {
  const navigate = useNavigate();
  const linkToBuyTalisman = () => {
    navigate('/buy-analogic');
  };
  const buttonRightInfo = {
    text: 'CREA TU TALISMÁN',
    color: '#6f3289',
    onClick: linkToBuyTalisman,
  };

  const animationRef = useScrollReveal<HTMLDivElement>('topReveal');
  return (
    <Template1 {...templateOptions}>
      <div
        ref={animationRef}
        className="section2-talismanAnalogic-internal-container right">
        <div className="section2-talismanAnalogic-internal-text-container">
          <h3>PERSONALIZA TU TALISMÁN</h3>

          <p>
            Puedes configurar tu propio talismán seleccionando cada elemento:{' '}
            <strong>modelo, metal, piedra, colgante e intención.</strong>
          </p>
          <p>
            {' '}
            Las piedras que empleamos son auténticas y están meticulosamente
            talladas a mano, lo que significa que{' '}
            <strong>
              cada talismán será verdaderamente único, igual que tú.
            </strong>
          </p>
          <div className="button-wrapper">
            <ButtonArrowRight {...buttonRightInfo} />
          </div>
        </div>
      </div>
    </Template1>
  );
};
