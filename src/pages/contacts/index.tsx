import React from 'react';
import type { GetServerSideProps, NextPage } from 'next';
import { API } from 'constants/api';
import { path } from 'constants/path';
import axios from 'axios';
import PageHeader from 'components/PageHeader';

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const { id } = context.query;
  const { data } = await axios('https://api2.ncnc.app/qa-types');

  const categoryData = data.qaTypes;

  return {
    props: {
      categoryData,
    },
  };
};

function Contacts({ categoryData }: any) {
  console.log(categoryData);
  return (
    <div>
      <PageHeader title="고객센터" />
      <div>test</div>
    </div>
  );
}

export default Contacts;
