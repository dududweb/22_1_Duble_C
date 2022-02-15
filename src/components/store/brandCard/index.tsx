import React from 'react';
import styles from 'styles/components/store/brandCard.module.scss';
import Link from 'next/link';
import { ConCategory } from 'types/interface';
import { useRouter } from 'next/router';

interface dataProps {
  data: ConCategory[];
}

function BrandCard({ data }: dataProps) {
  const router = useRouter();
  console.log(router);
  return (
    <div className={styles.storeContainer}>
      {data?.map(list => {
        const { id, name, imageUrl } = list;
        return (
          <Link href="" as="" key={id}>
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
