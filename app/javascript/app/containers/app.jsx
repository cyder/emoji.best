import React from 'react';
import { connect } from 'react-redux';

import Header from '../components/header';

const App = () => (
  <Header />
);

function mapStateToProps(state) {
  return {
    state,
  };
}

const AppContainer = connect(mapStateToProps)(App);

export default AppContainer;
