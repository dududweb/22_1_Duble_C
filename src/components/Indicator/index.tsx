import React from 'react';
import { Carousel } from 'types/carousel';

interface IndicatorProps {
  selectId: number;
  moveCarousel: (px: number) => void;
}

function Indicator({ selectId, moveCarousel }: IndicatorProps) {
  const handleIndicator = () => {
    moveCarousel(selectId);
  };
  return <li onClick={handleIndicator}></li>;
}

export default Indicator;
