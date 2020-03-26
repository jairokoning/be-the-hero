import React from 'react';

import { ToastContainer } from 'react-toastify'

import GlobalStyle from './styles/global'

import Routes from './routes';

function App() {
  return (
    <>
      <GlobalStyle />
      <ToastContainer autoClose={3000} />
      <Routes />
    </>
  );
}

export default App;
