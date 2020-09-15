/* eslint-disable react/jsx-props-no-spreading, react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import { Fragment } from 'react'
import '../styles/style.scss';
import Head from 'next/head';
import * as gtag from 'common/src/lib/gtag'

// Notice how we track pageview when route is changed
Router.events.on('routeChangeComplete', (url) => gtag.pageview(url))

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>Gerald Goh</title>
      </Head>
      <div>
        <Component {...pageProps} />
      </div>
    </Fragment>
  );
}

export default MyApp;
