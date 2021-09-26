/* eslint-disable react/jsx-props-no-spreading */
// import Head from 'next/head';
// import { ChakraProvider } from '@chakra-ui/react';
// import PropTypes from 'prop-types';
// import React from 'react';

// export default function App({ Component, pageProps }) {
//   return (
//     <>
//       <Head>
//         <link href="/favicon.ico" rel="icon" />
//         <title>GiftPal</title>
//       </Head>
//       <ChakraProvider>
//         <Component {...pageProps} />
//       </ChakraProvider>
//     </>
//   );
// }

import React from 'react';
import '../styles/global.css';
import PropTypes from 'prop-types';

export default function App({ Component, pageProps }) {
  return (<Component {...pageProps} />);
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.shape().isRequired,
};
