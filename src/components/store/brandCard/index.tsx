import React from 'react';
import styles from 'styles/components/store/brandCard.module.scss';
import Link from 'next/link';
import { ConCategory } from 'types/interface';

interface dataProps {
  data: ConCategory[];
}

function BrandCard({ data }: dataProps) {
  return (
    <div className={styles.storeContainer}>
      {data?.map(list => {
        const { id, name, imageUrl } = list;
        return (
          <Link href="/" key={id}>
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
