import React from 'react';
import styles from 'styles/components/store/brandCard.module.scss';

const ARR = [
  {
    id: 'store_1',
    name: '스타벅스',
    img: '/images/icon/back.svg',
  },
  {
    id: 'store_2',
    name: '스타벅스',
    img: '/images/icon/back.svg',
  },
  {
    id: 'store_3',
    name: '스타벅스',
    img: '/images/icon/back.svg',
  },
  {
    id: 'store_4',
    name: '스타벅스',
    img: '/images/icon/back.svg',
  },
  {
    id: 'store_5',
    name: '스타벅스',
    img: '/images/icon/back.svg',
  },
  {
    id: 'store_6',
    name: '스타벅스',
    img: '/images/icon/back.svg',
  },
  {
    id: 'store_7',
    name: '스타벅스',
    img: '/images/icon/back.svg',
  },
  {
    id: 'store_8',
    name: '스타벅스',
    img: '/images/icon/back.svg',
  },
  {
    id: 'store_9',
    name: '스타벅스',
    img: '/images/icon/back.svg',
  },
  {
    id: 'store_10',
    name: '스타벅스',
    img: '/images/icon/back.svg',
  },
  {
    id: 'store_11',
    name: '스타벅스',
    img: '/images/icon/back.svg',
  },
];

function BrandCard() {
  return (
    <div className={styles.storeContainer}>
      {ARR.map(list => {
        const { id, name, img } = list;
        return (
          <div className={styles.storeCard} key={id}>
            <img className={styles.storeLogo} src={img} alt={`${name}logo`} />
            <p className={styles.storeName}>{name}</p>
          </div>
        );
      })}
    </div>
  );
}

export default BrandCard;
