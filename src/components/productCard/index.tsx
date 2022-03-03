import React from 'react';
import styles from 'styles/components/store/productCard.module.scss';
import type { GetServerSideProps, NextPage } from 'next';
import { API } from 'constants/api';
import axios from 'axios';

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const { conCategoryId } = context.query;
  console.log('context', context);
  const res = await axios(`${API.MAIN_CATEGORIES}/67/nested`);

  const categoryData = res.data;
  const conCategoryData = categoryData.conCategory1.conCategory2s;

  return {
    props: {
      conCategoryData,
    },
  };
};

interface ProductCardProps {
  id: string | string[];
}

function ProductsCard({ id }: ProductCardProps) {
  console.log(id);
  return (
    <section className={styles.itemContainer}>
      <div className={styles.itemImage}>
        <img src="/images/icon/Back.svg" alt="img" />
      </div>
      <div>
        <div className={styles.productName}>카페아메리카노T</div>
        <div>
          <span className={styles.sales}>20%</span>
          <span className={styles.price}>10,000원</span>
          <span className={styles.disablePrice}>12,000원</span>
        </div>
      </div>
    </section>
  );
}

export default ProductsCard;
