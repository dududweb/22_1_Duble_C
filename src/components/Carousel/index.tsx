import React, { useState } from 'react';
import styles from './styles.module.scss';
import { SLIDER_DATA } from './sliderData';
import Indicator from 'components/Indicator';

function Carousel() {
  const [currentCarousel, setCurrentCarousel] = useState<number>(1);
  const containerWidth = 672 * SLIDER_DATA.length;
  const moveCarousel = (px: number) => {
    setCurrentCarousel(px === 1 ? 0 : 672 * px);
    console.log(currentCarousel);
    console.log(px);
  };

  return (
    <section className={styles.slider}>
      <ul
        className={styles.slideWrap}
        style={{
          width: `${containerWidth}px`,
          transform: `translateX(${-currentCarousel}px)`,
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
          return <Indicator selectId={items.id} moveCarousel={moveCarousel} />;
        })}
      </ul>
    </section>
  );
}

export default Carousel;
