import React from 'react';
import axios from 'axios';
import type { GetStaticProps, NextPage } from 'next';
import styles from 'styles/components/store/store.module.scss';
import Storeheader from 'components//storeheader/Index';
import BrandSort from 'components/brandSort/index';
import GridCardList from 'components/gridCardList/index';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { API } from 'constants/api';

export const getStaticProps: GetStaticProps = async (context: any) => {
  const { router } = context.query.id;
  const { data } = await axios(`${API.MAIN_CATEGORIES}${router}/nested`);
  return {
    props: {
      categoryLists: data.conCategory1s,
    },
  };
};

function Brands() {
  const router = useRouter();
  const { id } = router.query;
  const NEXT_URL = `/brand/${id}/list/`;

  const [filterBrand, setFilterBrand] = useState([]);
  useEffect(() => {
    axios(`https://api2.ncnc.app/con-category1s/${id}/nested`).then(res =>
      setFilterBrand(res.data.conCategory1.conCategory2s),
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
