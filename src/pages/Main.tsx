import type { GetStaticProps } from 'next';
import axios from 'axios';
import { GetCategoryData } from 'types';

const Main = ({ conCategory1s }: GetCategoryData) => {
  console.log(conCategory1s);
  return <div className="main">메인페이지데이터체크</div>;
};

export const getStaticProps: GetStaticProps = async () => {
  const conCategory1s = await axios('https://api2.ncnc.app/con-category1s');

  return {
    props: {
      conCategory1s,
    },
  };
};

export default Main;
