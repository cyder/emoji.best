import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = ({ onClick, children }) => (
  <Wrapper onClick={onClick} >
    { children }
  </Wrapper>
);

const Wrapper = styled.button`
  display: block;
  background-color: transparent;
  border: none;
  width: 100%;
  height: 100%;
  padding: 0;
  color: inherit;
  line-height: inherit;
  cursor: pointer;
  text-align: center;
`;

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
};

Button.defaultProps = {
  onClick: null,
  children: undefined,
};

export default Button;
