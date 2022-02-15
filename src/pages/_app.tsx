import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../../styles/globals.css';
import '../../styles/Home.module.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>니콘내콘</title>
        <link href="fonts/AppleSDGothicNeoL.woff" rel="stylesheet" />
        <link href="fonts/AppleSDGothicNeoM.woff" rel="stylesheet" />
        <link href="fonts/AppleSDGothicNeoB.woff" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
