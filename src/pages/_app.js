/* eslint-disable react/jsx-props-no-spreading, react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import '../styles/style.scss';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
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
