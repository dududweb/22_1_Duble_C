import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>니콘내콘</title>
        <link href="../public/fonts/AppleSDGothicNeoL.woff" rel="stylesheet" />
        <link href="../public/fonts/AppleSDGothicNeoM.woff" rel="stylesheet" />
        <link href="../public/fonts/AppleSDGothicNeoB.woff" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
