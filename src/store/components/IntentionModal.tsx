import { useMemo } from 'react';
import { intentionsImages } from '../assets/intentionsPictures';

interface Props {
  intention: string;
  metal: string;
}

export const IntentionModal = ({ intention, metal }: Props) => {
  const intentionPath = useMemo(() => {
    return (
      intentionsImages.find(
        (item) =>
          item.title.toLowerCase() === intention.toLowerCase() && item.metal === metal
      ) || { path: '', title: '', metal: '' }
    );
  }, [intention, metal]);

  return (
    <div className="intentionModal-container efectoRevealTalisman">
      <img src={intentionPath.path} alt={intentionPath.title} />
    </div>
  );
};