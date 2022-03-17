import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import { SLIDER_DATA } from './sliderData';
import Indicator from 'components/Indicator';
import useWindowDetect from 'hooks/useWindowDetect';

function Carousel() {
  const [currentCarousel, setCurrentCarousel] = useState<number>(1);
  const [containerWidth, setContainerWidth] = useState<number>(672);
  const slideCount = SLIDER_DATA.length;

  const moveCarousel = (id: number) => {
    setContainerWidth(id === 1 ? 0 : (100 / slideCount) * (id - 1));
  };

  console.log(currentCarousel);
  console.log(containerWidth);
  return (
    <section className={styles.slider}>
      <ul
        className={styles.slideWrap}
        style={{
          width: `${slideCount * 100}%`,
          transform: `translateX(${-containerWidth}%)`,
        }}
      >
        {SLIDER_DATA.map(items => {
          return (
            <li className={styles.slideList} key={items.id}>
              <img
                className={styles.slideItems}
                src={items.imageUrl}
                alt={items.title}
              />
            </li>
          );
        })}
      </ul>
      <ul className={styles.bullet}>
        {SLIDER_DATA.map(items => {
          return (
            <Indicator
              selectId={items.id}
              moveCarousel={moveCarousel}
              isSelected={items.id === currentCarousel}
            />
          );
        })}
      </ul>
    </section>
  );
}

export default Carousel;
