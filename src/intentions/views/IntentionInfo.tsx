import {useContext, useEffect, useRef, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {PlayIcon, StopIcon} from '../../assets/icons/icons';
import {ShopingCartContext} from '../../context';
import {TimerContext} from '../../context/timerContext';
import {ButtonArrowRight} from '../../ui/components/ButtonArrowRight';
import {infoIntenciones} from '../assets/infoIntentions';

function IntentionInfo() {
  const navigate = useNavigate();
  const {id} = useParams();

  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (id) {
      setPage(parseInt(id));
    }

    if (meditationRef.current) {
      meditationRef.current.currentTime = 0;
      meditationRef.current.pause();
      setIsPlaying(false);
    }
  }, [id]);

  const handlerPage = (direction: string) => {
    if (direction === 'next') {
      if (page < infoIntenciones.length) {
        navigate(`/intenciones/${page + 1}`);
      }
    } else {
      if (page > 1) {
        navigate(`/intenciones/${page - 1}`);
      }
    }
  };

  const {activatedAlarm} = useContext(TimerContext);
  const {shopingCartOpen} = useContext(ShopingCartContext);

  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const [timeProgress, setTimeProgress] = useState(0);

  const meditationRef = useRef<HTMLAudioElement | null>(null);

  const playMeditation = () => {
    if (meditationRef.current) {
      setIsPlaying(true);
      meditationRef.current.play();
    }
  };

  const stopMeditation = () => {
    if (meditationRef.current) {
      meditationRef.current.pause();
      setTimeProgress(meditationRef.current.currentTime);
      setIsPlaying(false);
    }
  };

  const restartMeditation = () => {
    if (meditationRef.current) {
      meditationRef.current.currentTime = 0;
      setTimeProgress(0);
      meditationRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <>
      <main
        className={
          activatedAlarm || shopingCartOpen ? 'viewport-background' : ''
        }>
        <audio
          preload="metadata"
          src={infoIntenciones[page - 1].meditationURL}
          ref={meditationRef}
        />
        <section className="intencionesDescription-container">
          <div className="intencionesDescription-info-container leftReveal">
            <div className="intencionesDescription-top-buttons-container">
              {page > 1 ? (
                <ButtonArrowRight
                  text="Atras"
                  color="#6f3289"
                  onClick={() => handlerPage('previous')}
                />
              ) : (
                <div></div>
              )}
              {page < 8 && (
                <ButtonArrowRight
                  text="Siguiente"
                  color="#6f3289"
                  onClick={() => handlerPage('next')}
                />
              )}
            </div>
            <article>
              <h3>{page && infoIntenciones[page - 1].title}</h3>

              {page &&
                infoIntenciones[page - 1].description.map((parrafo, i) => {
                  return <p key={i}>{parrafo}</p>;
                })}
            </article>
            <div className="intencionesDescription-buttons-container">
              {isPlaying ? (
                <button
                  title="Doble click para reiniciar"
                  onClick={stopMeditation}
                  onDoubleClick={restartMeditation}>
                  <div className="icon-container">{<StopIcon />}</div> Pausar
                  meditación
                </button>
              ) : (
                <button
                  title="Doble click para reiniciar"
                  onClick={playMeditation}
                  onDoubleClick={restartMeditation}>
                  <div className="icon-container">{<PlayIcon />}</div>{' '}
                  {timeProgress && !isPlaying
                    ? 'Continuar meditación'
                    : 'Iniciar meditación'}
                </button>
              )}
            </div>
          </div>
          <div className="intencionesDescription-image-container rightReveal">
            {page && <img src={infoIntenciones[page - 1].image} alt="" />}
          </div>
        </section>
      </main>
    </>
  );
}

export default IntentionInfo;
