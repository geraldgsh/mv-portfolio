/* eslint-disable react/jsx-props-no-spreading, react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import { Fragment } from 'react';
import '../styles/style.scss';
import Head from 'next/head';
import Router from 'next/router'

import * as gtag from '../lib/gtag'

// Notice how we track pageview when route is changed
Router.events.on('routeChangeComplete', (url) => gtag.pageview(url))

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Gerald Goh</title>
      </Head>
      <Fragment>
        <Component {...pageProps} />
      </Fragment>
    </div>
  );
}

export default MyApp;
