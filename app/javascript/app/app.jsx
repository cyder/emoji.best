import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { RouterToUrlQuery } from 'react-url-query';
import { BrowserRouter as Router } from 'react-router-dom';

import AppContainer from './containers/app';
import store, { persistor } from './store';

require('./components/css/main');
require('./components/css/normalize');

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <RouterToUrlQuery>
          <AppContainer />
        </RouterToUrlQuery>
      </Router>
    </PersistGate>
  </Provider>
);

export default App;
