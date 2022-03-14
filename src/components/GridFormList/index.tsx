import React from 'react';
import styles from './styles.module.scss';
import Link from 'next/link';
import { ConCategory } from 'types/interface';
import { ConItem } from 'types/productOfBrands';
import ProductsCardList from 'components/ProductCardList';
import { path } from 'constants/path';

interface CardProps {
  data: ConCategory[];
  path: string;
  urlId?: string | string[];
  clearanceData?: ConItem[];
}

function GridFormList({ data, path, urlId, clearanceData }: CardProps) {
  return (
    <>
      {urlId === '1' ? (
        <div className={styles.clearanceWrap}>
          <ProductsCardList data={clearanceData} path={'/items/'} />
        </div>
      ) : (
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
      )}
    </>
  );
}

export default GridFormList;
