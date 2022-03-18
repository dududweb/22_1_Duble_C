import React from 'react';
import axios from 'axios';
import type { GetServerSideProps, NextPage } from 'next';
import styles from 'styles/components/store/storeGridLayout.module.scss';
import NavOfCategories from 'components/NavOfCategories';
import PageHeader from 'components/PageHeader';
import GridFormList from 'components/GridFormList';
import { useRouter } from 'next/router';
import { API } from 'constants/api';
import { path } from 'constants/path';
import { Categories } from 'types/categories';
import { ConCategory } from 'types/interface';
import { ConItem } from 'types/productOfBrands';

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const { id } = context.query;
  const { data } = await axios(`${API.MAIN_CATEGORIES}?conCategory1Id=${id}`);
  const res2 = await axios(`${API.MAIN_CATEGORIES}/${id}/nested`);
  const clearance = await axios(`${API.PRODUCT_OF_BRANDS}/soon`);

  const categoryData = res2.data;
  const conCategoryData = categoryData.conCategory1.conCategory2s;

  return {
    props: {
      categoryLists: data.conCategory1s,
      conCategoryData,
      clearanceData: clearance.data.conItems,
    },
  };
};

interface BrandsProps {
  conCategoryData: Categories[];
  categoryLists: ConCategory[];
  clearanceData: ConItem[];
}

function Categories({
  conCategoryData,
  categoryLists,
  clearanceData,
}: BrandsProps) {
  const router = useRouter();
  const { id } = router.query;
  const findCategoryName = categoryLists.find(el => el.id == id);

  return (
    <>
      {findCategoryName && <PageHeader title={findCategoryName.name} />}
      <NavOfCategories categoryLists={categoryLists} urlId={id} />
      <section className={styles.storeSection}>
        <GridFormList
          data={conCategoryData}
          path={path.brands}
          urlId={id}
          clearanceData={clearanceData}
        />
      </section>
    </>
  );
}

export default Categories;
