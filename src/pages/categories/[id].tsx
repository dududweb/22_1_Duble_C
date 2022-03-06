import React from 'react';
import axios from 'axios';
import type { GetServerSideProps, NextPage } from 'next';
import styles from 'styles/components/store/store.module.scss';
import Storeheader from 'components/StoreHeader/Index';
import BrandSort from 'components/BrandSort/index';
import GridCardList from 'components/GridCardList/index';
import { useRouter } from 'next/router';
import { API } from 'constants/api';
import { path } from 'constants/path';

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const { id } = context.query;
  const res2 = await axios(`${API.MAIN_CATEGORIES}/${id}/nested`);

  const categoryData = res2.data;
  const conCategoryData = categoryData.conCategory1.conCategory2s;

  return {
    props: {
      conCategoryData,
    },
  };
};

interface BrandsProps {
  conCategoryData: any;
}

function Brands({ conCategoryData }: BrandsProps) {
  console.log('conCategoryData', conCategoryData);
  const router = useRouter();
  const routerUrl = router.query.id;

  return (
    <div>
      <Storeheader />
      <BrandSort />
      <section className={styles.storeSection}>
        <GridCardList data={conCategoryData} path={path.brands} />
      </section>
    </div>
  );
}

export default Brands;
