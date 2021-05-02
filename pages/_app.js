import React from 'react';
import '../styles/globals.css';
import { wrapper } from '../redux';

const MyApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default wrapper.withRedux(MyApp);
