import React from 'react';
import styles from 'styles/components/store/brandCard.module.scss';
import Link from 'next/link';
import { dataProps } from '../../../types/interface';

function BrandCard(props: dataProps) {
  const { data, NEXT_URL } = props;
  return (
    <div className={styles.storeContainer}>
      {data.map(list => {
        const { id, name, imageUrl } = list;
        return (
          <Link href={NEXT_URL + id} key={id}>
            <a className={styles.storeCard}>
              <img
                className={styles.storeLogo}
                src={imageUrl}
                alt={`${name}logo`}
              />
              <p className={styles.storeName}>{name}</p>
            </a>
          </Link>
        );
      })}
    </div>
  );
}

export default BrandCard;
