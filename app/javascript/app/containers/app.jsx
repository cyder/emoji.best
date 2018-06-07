import React from 'react';
import { connect } from 'react-redux';

const App = () => (
  <div>Hello React</div>
);

function mapStateToProps(state) {
  return {
    state,
  };
}

const AppContainer = connect(mapStateToProps)(App);

export default AppContainer;
