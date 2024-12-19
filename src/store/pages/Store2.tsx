import {useNavigate} from 'react-router';
import {Button, LazyImage} from '../../ui/components';
import {infoTalismanes} from '../assets/talismansInfoExample';

export const Store2 = () => {
  const navigate = useNavigate();
  const linkTo = (path: string) => {
    navigate(path);
  };
  return (
    <section className="section2-store-container">
      <div className="section2-grid-container">
        {infoTalismanes.map((item, i) => {
          return (
            <div key={i} className={`section2-grid-item item${i + 1}`}>
              <div
                
                className="shadow-container">
                <Button onClick={() => linkTo(item.path)} text="Ver más" />
              </div>
              <figure>
              <LazyImage src={item.image} alt={item.title} />
              </figure>
              <h4>{item.title}</h4>
            </div>
          );
        })}
      </div>
    </section>
  );
};
