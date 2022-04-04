import { useState, useEffect } from 'react';
import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import axios from 'axios';
import GridFormList from 'components/GridFormList';
import Carousel from 'components/Carousel';
import styles from 'styles/Home.module.scss';
import { API } from 'constants/api';
import { ConCategory } from 'types/interface';
import { ConItem } from 'types/productOfBrands';
import { path } from 'constants/path';
import PageHeader from 'components/common/PageHeader';
import SideMenu from 'components/SideMenu';
import ProductsCardList from 'components/Brands/ProductCardList';

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await axios(API.MAIN_CATEGORIES);
  const clearance = await axios(`${API.PRODUCT_OF_BRANDS}/soon`);

  return {
    props: {
      categoryLists: data.conCategory1s,
      clearanceData: clearance.data.conItems,
    },
  };
};

interface HomeProps {
  categoryLists: ConCategory[];
  clearanceData: ConItem[];
}

const Home: NextPage<HomeProps> = ({ categoryLists, clearanceData }) => {
  const [isClickedMenu, setIsClickedMenu] = useState(false);
  console.log(categoryLists);

  const openMenu = () => {
    setIsClickedMenu(!isClickedMenu);
  };

  return (
    <div className={styles.main}>
      <Head>
        <title>니콘내콘</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageHeader isClickedMenu={isClickedMenu} openMenu={openMenu} />
      <SideMenu isClickedMenu={isClickedMenu} openMenu={openMenu} />
      <Carousel />
      <GridFormList data={categoryLists} path={path.categories} />
      <div className={styles.eventTag}>
        <h3 className={styles.titleTag}>놓치지 마세요.</h3>
        <h2 className={styles.event}>오늘의 땡처리콘!</h2>
      </div>
      <ProductsCardList data={clearanceData} path={path.items} />
    </div>
  );
};

export default Home;
