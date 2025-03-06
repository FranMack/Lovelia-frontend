import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {ObliqueArrow} from '../../assets/icons/icons';
import talismanDigital from '../../store/assets/ejemplo1_talisman_digital.webp';
import {ButtonTransparent, LazyImage} from '../../ui/components';
import talismanAnalogico from '../assets/intencionaConNuestrosTalismanes.webp';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export const Home4 = () => {
  const navigate = useNavigate();

  const [selectedTalisman, setSelectedTalisman] = useState<string>('analogic');
  const handleSelectedTalisman = () => {
    if (selectedTalisman === 'digital') {
      setSelectedTalisman('analogic');
      return;
    } else {
      setSelectedTalisman('digital');
      return;
    }
  };

  const linkTo = () => {
    if (selectedTalisman === 'digital') {
      navigate('/talisman-digital');
    } else {
      navigate('/talisman-analogico');
    }
  };

  const buttonInfo = {
    text: 'VER MÁS',
    onClick: linkTo,
  };


   const animationRefTop = useScrollReveal<HTMLDivElement>("topReveal");

  return (
    <section className="section4-home-container">
      <div ref={animationRefTop} className="section4-home-center-container">
        <div className="section4-home-internal-container">
          <div className="section4-home-internal-text-container">
            <h2>
              Intenciona con nuestros
              <br />
              talismanes.
            </h2>
            <div
              className={`section4-home-option-container ${
                selectedTalisman === 'analogic' ? 'focus-talisman' : ''
              }`}>
              <h3 onClick={handleSelectedTalisman}>
                <div className="icon-container">
                  <ObliqueArrow
                    color={
                      selectedTalisman === 'analogic' ? '#6f3289' : '#ffff'
                    }
                  />
                </div>
                TALISMÁN
              </h3>
              <h3>FÍSICO</h3>
            </div>

            <div
              onClick={handleSelectedTalisman}
              className={`section4-home-option-container ${
                selectedTalisman === 'digital' ? 'focus-talisman' : ''
              }`}>
              <h3>
                <div className="icon-container">
                  <ObliqueArrow
                    color={selectedTalisman === 'digital' ? '#6f3289' : '#ffff'}
                  />
                </div>
                TALISMÁN
              </h3>
              <h3>DIGITAL</h3>
            </div>
          </div>
        </div>
        <div  className="section4-home-internal-container">
          <div className="section4-home-internal-image-container">
            <LazyImage
              src={
                selectedTalisman === 'digital'
                  ? talismanDigital
                  : talismanAnalogico
              }
              alt="digital-talisman"
            />
            <div className="button-wrapper">
              <ButtonTransparent {...buttonInfo} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
