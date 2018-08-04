import React from 'react';
import styled from 'styled-components';

export default () => (
  <Wrapper>
    <Icon />
  </Wrapper>
);

const Wrapper = styled.div`
  position: relative;
`;

const Icon = styled.div`
  display: block;
  position: absolute;
  top: 16px;
  left: 14px;
  width: 18px;
  height: 8px;
  border-left: 5px solid #ffffff;
  border-bottom: 5px solid #ffffff;
  transform: rotate(-45deg);
`;
