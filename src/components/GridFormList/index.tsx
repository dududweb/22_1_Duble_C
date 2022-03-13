import React from 'react';
import styles from './styles.module.scss';
import Link from 'next/link';
import { ConCategory } from 'types/interface';

interface CardProps {
  data: ConCategory[];
  path: string;
}

function GridFormList({ data, path }: CardProps) {
  return (
    <div className={styles.storeContainer}>
      {data.map(list => {
        return (
          <Link href={`${path}${list.id}`} key={list.id}>
            <a className={styles.storeCard}>
              <div className={styles.card}>
                <img
                  className={styles.storeLogo}
                  src={list.imageUrl}
                  alt={`${list.name}logo`}
                />
                <p className={styles.storeName}>{list.name}</p>
              </div>
            </a>
          </Link>
        );
      })}
    </div>
  );
}

export default GridFormList;
