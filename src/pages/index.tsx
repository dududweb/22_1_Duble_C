import type { NextPage } from 'next';
import Head from 'next/head';
import Nav from 'components/nav/index';
import Main from './Main';

const Home: NextPage = () => {
  return (
    <div className="main">
      <Head>
        <title>니콘내콘</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <Main />
    </div>
  );
};

export default Home;