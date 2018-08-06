import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { BLACK } from '../../../constants/styles/color';


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
  cursor: pointer;
`;

CircleButton.propTypes = {
  onClick: PropTypes.func,
  backgroundColor: PropTypes.string,
  children: PropTypes.node,
};

CircleButton.defaultProps = {
  onClick: null,
  backgroundColor: BLACK,
  children: undefined,
};

export default CircleButton;
