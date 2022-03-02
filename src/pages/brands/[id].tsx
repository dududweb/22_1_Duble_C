import React from 'react';
import axios from 'axios';
import type { GetServerSideProps, NextPage } from 'next';
import styles from 'styles/components/store/store.module.scss';
import Storeheader from 'components//storeheader/Index';
import BrandSort from 'components/brandSort/index';
import GridCardList from 'components/gridCardList/index';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { API } from 'constants/api';

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const id = context.query.id;

  const res1 = await axios(`${API.MAIN_CATEGORIES}`);
  const categoriesData = res1.data;
  const conCategoriesData = categoriesData.conCategory1s;

  const res2 = await axios(`${API.MAIN_CATEGORIES}${id}/nested`);

  const categoryData = res2.data;
  const conCategoryData = categoryData.conCategory1.conCategory2s;

  return {
    props: {
      conCategoriesData,
      conCategoryData,
    },
  };
};

interface BrandsProps {
  conCategoriesData: any;
  conCategoryData: any;
}

function Brands({ conCategoriesData, conCategoryData }: BrandsProps) {
  console.log('conCategoriesData', conCategoriesData);
  console.log('conCategoryData', conCategoryData);
  const router = useRouter();
  const routerUrl = router.query.id;
  const NEXT_URL = `/brand/${routerUrl}/list/`;

  const [filterBrand, setFilterBrand] = useState([]);
  useEffect(() => {
    axios(`https://api2.ncnc.app/con-category1s/${routerUrl}/nested`).then(
      res => setFilterBrand(res.data.conCategory1.conCategory2s),
    );
  }, []);

  return (
    <div>
      <Storeheader />
      <BrandSort />
      <section className={styles.storeSection}>
        <GridCardList data={filterBrand} path={NEXT_URL} />
      </section>
    </div>
  );
}

export default Brands;
