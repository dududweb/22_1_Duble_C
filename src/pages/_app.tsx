import type { AppProps } from 'next/app';
import Head from 'next/head';
import Cafe from '../components/cafe/Index';
import Store from '../components/store/Index';
import '../../styles/globals.css';
import '../../styles/Home.module.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>니콘내콘</title>
        <Cafe />
        <Store />
        <link href="fonts/AppleSDGothicNeoL.woff" rel="stylesheet" />
        <link href="fonts/AppleSDGothicNeoM.woff" rel="stylesheet" />
        <link href="fonts/AppleSDGothicNeoB.woff" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
