/* eslint-disable react/jsx-props-no-spreading, react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import '../styles/style.scss';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-178007015-1"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){
            dataLayer.push(arguments)
          }
          gtag('js', new Date());
          gtag('config', 'UA-178007015-1');
        </script>
        <title>Gerald Goh</title>
      </Head>
      <div>
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
