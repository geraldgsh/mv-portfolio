/* eslint-disable react/jsx-props-no-spreading, react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import * as gtag from '../lib/gtag';
import '../styles/style.scss';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = url => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <div>
      <Head>
        <title>Gerald Goh</title>
      </Head>
      <div>
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
