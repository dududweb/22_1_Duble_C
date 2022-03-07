import React from 'react';
import styles from 'styles/components/store/items.module.scss';
import StoreHeader from 'components/StoreHeader';
import { GetServerSideProps } from 'next';
import axios from 'axios';
import { API } from 'constants/api';

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const { id } = context.query;
  const { data } = await axios(`https://api2.ncnc.app/con-items/${id}`);

  return {
    props: {
      detailData: data.conItem,
    },
  };
};

interface ItemsProps {
  detailData: any;
}

function Items({ detailData }: ItemsProps) {
  console.log(detailData);
  return (
    <div>
      <StoreHeader />
      <section className={styles.itemsContainer}>디테일페이지입니다.</section>
    </div>
  );
}

export default Items;
