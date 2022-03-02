import React from 'react';
import styles from 'styles/components/store/store.module.scss';
import ProductsCard from 'components/productCard';
import type { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { API } from 'constants/api';
import axios from 'axios';

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const { id } = context.query;
  const res2 = await axios(`${API.MAIN_CATEGORIES}/${id}/nested`);

  const categoryData = res2.data;
  const conCategoryData = categoryData.conCategory1.conCategory2s.conItems;

  return {
    props: {
      conCategoryData,
    },
  };
};

interface ProductListProps {
  conCategoryData: any;
}

function ProductList({ conCategoryData }: ProductListProps) {
  console.log('test', conCategoryData);
  const router = useRouter();
  return (
    <div>
      <div className={styles.count}>00개의 상품</div>
      <section className={styles.storeSection}>
        <ProductsCard />
      </section>
    </div>
  );
}

export default ProductList;
