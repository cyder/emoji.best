import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Button from './button';
import { BLACK } from '../../../constants/styles/color';


const CircleButton = ({ onClick, backgroundColor, children }) => (
  <ButtonWrapper backgroundColor={backgroundColor} >
    <Button onClick={onClick} >
      { children }
    </Button>
  </ButtonWrapper>
);

const ButtonWrapper = styled.div`
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
  backgroundColor: BLACK,
  children: undefined,
};

export default CircleButton;
