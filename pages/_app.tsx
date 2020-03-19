import App from 'next/app';
import Head from 'next/head';
import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { Provider } from '../components/Provider';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
  
  * {
    box-sizing: border-box;
  }
`;

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Provider>
        <GlobalStyle />
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Head>
          <title>Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </Provider>
    );
  }
}
