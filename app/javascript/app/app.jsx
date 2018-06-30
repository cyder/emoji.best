import React from 'react';
import { Provider } from 'react-redux';
import { configureUrlQuery } from 'react-url-query';
import createHistory from 'history/createBrowserHistory';

import AppContainer from './containers/app';
import store from './store';

require('./components/css/main');
require('./components/css/normalize');

const history = createHistory();
configureUrlQuery({ history });

const App = () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
);

export default App;
