/* eslint-disable react/jsx-props-no-spreading */
import { ChakraProvider } from '@chakra-ui/react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import React from 'react';
import '../styles/global.css';
import theme from '../theme';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>GiftPal</title>
      </Head>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.shape().isRequired,
};
