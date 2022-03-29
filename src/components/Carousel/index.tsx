import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import { SLIDER_DATA } from './sliderData';
import Indicator from 'components/Carousel/Indicator';

function Carousel() {
  const [currentCarousel, setCurrentCarousel] = useState<number>(1);
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const [touchPosition, setTouchPosition] = useState(null);
  const [isSwipe, setIsSwipe] = useState<boolean>(false);
  const slideCount = SLIDER_DATA.length;

  const moveCarousel = (id: number) => {
    setContainerWidth(id === 1 ? 0 : (100 / slideCount) * (id - 1));
    setCurrentCarousel(id);
  };

  const handleTouchStart = (e: any) => {
    const touchStart = e.touches[0].clientX;
    setTouchPosition(touchStart);
  };

  const handleTouchEnd = (e: any) => {
    const touchEnd = e.changedTouches[0].clientX;
    if (touchPosition && touchPosition > touchEnd) {
      setCurrentCarousel(prev => prev + 1);
      next();
      // setContainerWidth(
      //   currentCarousel === 1 ? 0 : (100 / slideCount) * currentCarousel,
      // );
      // console.log('currentCarousel >>> 다음', currentCarousel);
    } else {
      setCurrentCarousel(prev => prev - 1);
      prev();
    }
  };

  const next = () => {
    setContainerWidth(
      currentCarousel === 1 ? 0 : (100 / slideCount) * currentCarousel,
    );
  };

  const prev = () => {
    setContainerWidth(
      currentCarousel === 1 ? 0 : (100 / slideCount) * currentCarousel,
    );
  };

  return (
    <section className={styles.slider}>
      <ul
        className={styles.slideWrap}
        style={{
          width: `${slideCount * 100}%`,
          transform: `translateX(${-containerWidth}%)`,
        }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
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
