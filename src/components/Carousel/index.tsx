import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import { SLIDER_DATA } from './sliderData';
import Indicator from 'components/Indicator';
import useWindowDetect from 'hooks/useWindowDetect';

function Carousel() {
  const [currentCarousel, setCurrentCarousel] = useState<number>(1);
  const [containerWidth, setContainerWidth] = useState<number>();
  const initCarousel = 672;
  const windowSizeDetect = useWindowDetect();
  const resize = windowSizeDetect && windowSizeDetect * SLIDER_DATA.length;
  useEffect(() => {
    setContainerWidth(initCarousel * SLIDER_DATA.length);
  }, []);

  const moveCarousel = (id: number) => {
    windowSizeDetect &&
      setCurrentCarousel(id === 1 ? 0 : windowSizeDetect * (id - 1));
  };

  console.log(currentCarousel);

  return (
    <section className={styles.slider}>
      <ul
        className={styles.slideWrap}
        style={{
          width: `${
            windowSizeDetect && windowSizeDetect > initCarousel
              ? containerWidth
              : resize
          }px`,
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
