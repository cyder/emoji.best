import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


const CircleButton = ({ onClick, backgroundColor, children }) => (
  <Button
    onClick={onClick}
    backgroundColor={backgroundColor}
  >
    { children }
  </Button>
);

const Button = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: ${props => (props.backgroundColor)};
`;

CircleButton.propTypes = {
  onClick: PropTypes.func,
  backgroundColor: PropTypes.string,
  children: PropTypes.node,
};

CircleButton.defaultProps = {
  onClick: null,
  backgroundColor: '#000000',
  children: undefined,
};

export default CircleButton;
