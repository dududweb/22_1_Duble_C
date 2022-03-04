import React from 'react';
import styles from 'styles/components/store/store.module.scss';
import ProductsCard from 'components/productCard';
import { useRouter } from 'next/router';
import { API } from 'constants/api';
import axios from 'axios';
import type { GetServerSideProps, NextPage } from 'next';

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const { id } = context.query;
  const res = await axios(`${API.PRODUCT_OF_BRANDS}?conCategory2Id=${id}`);
  const conCategoryData = res.data.categoryData.conItems;

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
  console.log(conCategoryData);

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
