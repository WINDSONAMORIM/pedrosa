import React, { Fragment } from 'react';
import { GlobalStyle } from './config';
import { AppRoutes } from './routes';

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <AppRoutes />
    </Fragment>
  );
}

export default App;
