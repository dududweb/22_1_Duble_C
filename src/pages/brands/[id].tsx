import React from 'react';
import styles from 'styles/components/store/storeGridLayout.module.scss';
import ProductsCardList from 'components/ProductCardList';
import StoreHeader from 'components/StoreHeader';
import { useRouter } from 'next/router';
import { API } from 'constants/api';
import { path } from 'constants/path';
import axios from 'axios';
import type { GetServerSideProps, NextPage } from 'next';

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const { id } = context.query;
  const res = await axios(`${API.PRODUCT_OF_BRANDS}?conCategory2Id=${id}`);
  const res2 = await axios(`${API.BRAND_NAME}/${id}`);

  const categoryData = res.data;
  const conCategoryData = categoryData.conItems;
  const brandInfoData = res2.data;
  const brandInfo = brandInfoData.conCategory2;

  return {
    props: {
      conCategoryData,
      brandInfo,
    },
  };
};

interface ProductListProps {
  conCategoryData: any;
  brandInfo: any;
}

function ProductList({ conCategoryData, brandInfo }: ProductListProps) {
  console.log(conCategoryData);
  console.log('brandInfo', brandInfo);

  return (
    <div>
      <StoreHeader title={brandInfo.name} />
      <div className={styles.count}>{conCategoryData.length}개의 상품</div>
      <section className={styles.storeSection}>
        {conCategoryData && (
          <ProductsCardList data={conCategoryData} path={path.items} />
        )}
      </section>
    </div>
  );
}

export default ProductList;
