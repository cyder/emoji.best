import React from 'react';
import { Provider } from 'react-redux';
import { RouterToUrlQuery } from 'react-url-query';
import { BrowserRouter as Router } from 'react-router-dom';
import AppContainer from './containers/app';
import store from './store';

require('./components/css/main');
require('./components/css/normalize');

const App = () => (
  <Provider store={store}>
    <Router>
      <RouterToUrlQuery>
        <AppContainer />
      </RouterToUrlQuery>
    </Router>
  </Provider>
);

export default App;
