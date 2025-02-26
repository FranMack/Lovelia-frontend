import sabiduría from '../../intentions/assets/imagen-intensiones1.webp';
import amorIncondicional from '../../intentions/assets/imagen-intensiones2.webp';
import abundancia from '../../intentions/assets/imagen-intensiones3.webp';
import aquiYahora from '../../intentions/assets/imagen-intensiones4.webp';
import potencialInfinito from '../../intentions/assets/imagen-intensiones5.webp';
import Coraje from '../../intentions/assets/imagen-intensiones6.webp';
import yoVerdadero from '../../intentions/assets/imagen-intensiones7.webp';
import gratitud from '../../intentions/assets/imagen-intensiones8.webp';

import elPoderDeLaIntencionImage1 from '../assets/blognote-poder-intencion.webp';
import paraQueMeditamos1 from '../assets/Para que meditamos (1).webp';

interface ArticlesBlog {
  id: number;
  tittle: string;
  author: string;
  date: string;
  image: string;
}

export const articlesBlog: ArticlesBlog[] = [
  {
    id: 3,
    tittle: 'Amor incondicional',
    author: 'Lovelia',
    date: 'Abril 04, 2024',
    image: amorIncondicional,
  },
  {
    id: 4,
    tittle: 'Abundancia',
    author: 'Lovelia',
    date: 'Abril 04, 2024',
    image: abundancia,
  },
  {
    id: 5,
    tittle: 'Yo verdadero',
    author: 'Lovelia',
    date: 'Abril 04, 2024',
    image: yoVerdadero,
  },
  {
    id: 6,
    tittle: 'Gratitud',
    author: 'Lovelia',
    date: 'Abril 04, 2024',
    image: gratitud,
  },
  {
    id: 7,
    tittle: 'Potencial Infinito',
    author: 'Lovelia',
    date: 'Abril 04, 2024',
    image: potencialInfinito,
  },
  {
    id: 8,
    tittle: 'Coraje',
    author: 'Lovelia',
    date: 'Abril 04, 2024',
    image: Coraje,
  },
  {
    id: 9,
    tittle: 'Sabiduría de la incertidumbre',
    author: 'Lovelia',
    date: 'Abril 04, 2024',
    image: sabiduría,
  },
  {
    id: 10,
    tittle: 'Aquí y Ahora',
    author: 'Lovelia',
    date: 'Abril 04, 2024',
    image: aquiYahora,
  },
  {
    id: 1,
    tittle: 'El Poder de la Intención',
    author: 'Lovelia',
    date: 'Abril 04, 2024',
    image: elPoderDeLaIntencionImage1,
  },
  {
    id: 2,
    tittle: '¿Para qué meditamos?',
    author: 'Lovelia',
    date: 'Abril 04, 2024',
    image: paraQueMeditamos1,
  },
];

export const moreArticles: ArticlesBlog[] = [
  {
    id: 9,
    tittle: 'Sabiduría de la incertidumbre',
    author: 'Lovelia',
    date: 'Abril 04, 2024',
    image: sabiduría,
  },
  {
    id: 10,
    tittle: 'Aquí y Ahora',
    author: 'Lovelia',
    date: 'Abril 04, 2024',
    image: aquiYahora,
  },
  {
    id: 1,
    tittle: 'El Poder de la Intención',
    author: 'Lovelia',
    date: 'Abril 04, 2024',
    image: elPoderDeLaIntencionImage1,
  },
  {
    id: 2,
    tittle: '¿Para qué meditamos?',
    author: 'Lovelia',
    date: 'Abril 04, 2024',
    image: paraQueMeditamos1,
  },
];
