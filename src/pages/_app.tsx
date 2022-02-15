import type { AppProps } from 'next/app';
import Head from 'next/head';
import NavLayout from 'components/nav/NavLayout';
import '../../styles/globals.css';
import '../../styles/Home.module.scss';
import Main from './Main';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>니콘내콘</title>
        <link href="fonts/AppleSDGothicNeoL.woff" rel="stylesheet" />
        <link href="fonts/AppleSDGothicNeoM.woff" rel="stylesheet" />
        <link href="fonts/AppleSDGothicNeoB.woff" rel="stylesheet" />
      </Head>
      <NavLayout>
        <Component {...pageProps} />
      </NavLayout>
      <Main />
    </>
  );
}

export default MyApp;
