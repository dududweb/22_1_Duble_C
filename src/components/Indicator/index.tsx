import React from 'react';
import styles from './styles.module.scss';

interface IndicatorProps {
  selectId: number;
  moveCarousel: (px: number) => void;
  isSelected: boolean;
}

function Indicator({ selectId, moveCarousel, isSelected }: IndicatorProps) {
  const handleIndicator = () => {
    moveCarousel(selectId);
  };

  return (
    <li
      className={isSelected ? styles.bulletItemSelected : styles.bulletItem}
      onClick={handleIndicator}
    ></li>
  );
}

export default Indicator;
