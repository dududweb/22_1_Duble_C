import React from 'react';
import styles from 'styles/components/store/brandCard.module.scss';
import Link from 'next/link';
import { ConCategory } from 'types/interface';

interface CardProps {
  data: ConCategory[];
  NEXT_URL: string;
}

function BrandCard({ data, NEXT_URL }: CardProps) {
  return (
    <div className={styles.storeContainer}>
      {data.map(list => {
        return (
          <Link href={NEXT_URL + list.id} key={list.id}>
            <a className={styles.storeCard}>
              <img
                className={styles.storeLogo}
                src={list.imageUrl}
                alt={`${list.name}logo`}
              />
              <p className={styles.storeName}>{list.name}</p>
            </a>
          </Link>
        );
      })}
    </div>
  );
}

export default BrandCard;
