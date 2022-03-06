import React from 'react';
import styles from 'styles/components/store/store.module.scss';
import ProductsCardList from 'components/ProductCardList';
import { useRouter } from 'next/router';
import { API } from 'constants/api';
import axios from 'axios';
import type { GetServerSideProps, NextPage } from 'next';

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const { id } = context.query;
  const res = await axios(`${API.PRODUCT_OF_BRANDS}?conCategory2Id=${id}`);
  const res2 = await axios(`${API.BRAND_NAME}/70`);

  const categoryData = res.data;
  const conCategoryData = categoryData.conItems;
  const data = res2;
  const brandName = data;

  return {
    props: {
      conCategoryData,
      brandName,
    },
  };
};

interface ProductListProps {
  conCategoryData: any;
  brandName: any;
}

function ProductList({ conCategoryData }: ProductListProps) {
  console.log(conCategoryData);
  // console.log('brandName', brandName);

  return (
    <div>
      <div className={styles.count}>00개의 상품</div>
      <section className={styles.storeSection}>
        {conCategoryData && <ProductsCardList data={conCategoryData} />}
      </section>
    </div>
  );
}

export default ProductList;
