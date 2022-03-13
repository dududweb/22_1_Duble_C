import React from 'react';
import type { GetServerSideProps, NextPage } from 'next';
import { API } from 'constants/api';
import { path } from 'constants/path';
import axios from 'axios';
import PageHeader from 'components/PageHeader';

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

function Contacts() {
  return (
    <div>
      <PageHeader title="마이페이지" />
      <div>test</div>
    </div>
  );
}

export default Contacts;
