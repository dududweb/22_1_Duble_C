import React from 'react';
import styles from 'styles/components/slider/Slider.module.scss';
import { SLIDER_DATA } from './sliderData';

function Slider() {
  return (
    <section className={styles.slider}>
      <ul className={styles.slideWrap}>
        {SLIDER_DATA.map(items => {
          return (
            <li className={styles.slideList} key={items.id}>
              <img
                className={styles.slideItems}
                src={items.imageUrl}
                alt={items.title}
              />
              <ul className={styles.bullet}>
                <li></li>
              </ul>
            </li>
          );
        })}
        {SLIDER_DATA.map(items => {
          return (
            <ul className={styles.bullet}>
              <li></li>
            </ul>
          );
        })}
      </ul>
    </section>
  );
}

export default Slider;
