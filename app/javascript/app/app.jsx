import React from 'react';
import { Provider } from 'react-redux';

import AppContainer from './containers/app';
import store from './store';

require('./components/css/normalize');

const App = () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
);

export default App;
