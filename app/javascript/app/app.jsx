import React from 'react';
import PropTypes from 'prop-types';

const Hello = props => (
  <div>Hello {props.name}!</div>
);

Hello.defaultProps = {
  name: 'David',
};

Hello.propTypes = {
  name: PropTypes.string,
};


const App = () => (
  <Hello name="React" />
);

export default App;
