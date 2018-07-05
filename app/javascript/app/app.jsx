import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { RouterToUrlQuery } from 'react-url-query';
import { ConnectedRouter } from 'react-router-redux';

import AppComponent from './components/app';
import store, { persistor } from './store';
import history from './history';

require('./components/css/main');
require('./components/css/normalize');

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ConnectedRouter history={history}>
        <RouterToUrlQuery>
          <AppComponent />
        </RouterToUrlQuery>
      </ConnectedRouter>
    </PersistGate>
  </Provider>
);

export default App;
