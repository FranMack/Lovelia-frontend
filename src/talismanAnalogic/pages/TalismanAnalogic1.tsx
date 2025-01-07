import {FrontPage2, FrontPage2Options} from '../../ui/pages/FrontPage2';
import background from '../assets/portada_talisman_analogico.webp';

const frontPageInfo: FrontPage2Options = {
  image: background,
  title: 'TALISMÁN ANALÓGICO',
  secundaryTitle: '',
  color: '#EDC7B9',
};

export const TalismanAnalogic1 = () => {
  return <FrontPage2 {...frontPageInfo} />;
};
