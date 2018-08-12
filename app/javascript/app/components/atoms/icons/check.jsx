import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { BLACK } from '../../../constants/styles/color';

const Check = ({ color }) => (
  <Wrapper>
    <Icon color={color} />
  </Wrapper>
);

const Wrapper = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
`;

const Icon = styled.div`
  display: block;
  position: absolute;
  top: 16px;
  left: 14px;
  width: 18px;
  height: 8px;
  border-left: 5px solid  ${props => (props.color)};
  border-bottom: 5px solid  ${props => (props.color)};
  transform: rotate(-45deg);
`;

Check.propTypes = {
  color: PropTypes.string,
};

Check.defaultProps = {
  color: BLACK,
};

export default Check;
