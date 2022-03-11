import React from 'react';
import axios from 'axios';
import type { GetServerSideProps, NextPage } from 'next';
import styles from 'styles/components/store/storeGridLayout.module.scss';
import StoreHeader from 'components/StoreHeader/index';
import NavOfCategories from 'components/NavOfCategories';
import GridCardList from 'components/GridCardList';
import { useRouter } from 'next/router';
import { API } from 'constants/api';
import { path } from 'constants/path';

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const { id } = context.query;
  const { data } = await axios(`${API.MAIN_CATEGORIES}?conCategory1Id=${id}`);
  const res2 = await axios(`${API.MAIN_CATEGORIES}/${id}/nested`);

  const categoryData = res2.data;
  const conCategoryData = categoryData.conCategory1.conCategory2s;

  return {
    props: {
      categoryLists: data.conCategory1s,
      conCategoryData,
    },
  };
};

interface BrandsProps {
  conCategoryData: any;
  categoryLists: any;
}

function Categories({ conCategoryData, categoryLists }: BrandsProps) {
  console.log('conCategoryData', conCategoryData);
  console.log('name', categoryLists);
  const router = useRouter();
  const { id } = router.query;
  const findCategoryName = categoryLists.find((el: any) => el.id == id);
  console.log('findCategoryName', findCategoryName);

  return (
    <>
      <StoreHeader title={findCategoryName.name} />
      <NavOfCategories categoryLists={categoryLists} />
      <section className={styles.storeSection}>
        <GridCardList data={conCategoryData} path={path.brands} />
      </section>
    </>
  );
}

export default Categories;
