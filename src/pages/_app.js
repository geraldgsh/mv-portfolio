/* eslint-disable react/jsx-props-no-spreading, react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import '../styles/style.scss';
import Head from 'next/head';
import Layout from '../components/layout';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Gerald Goh</title>
      </Head>
      <div>
        <Component {...pageProps} />
      </div>
    </Layout>
  );
}

export default MyApp;
