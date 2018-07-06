import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  width: 300px;
  padding: 20px 100px 10px;
`;

export const Button = styled.button`
  display: block;
  width: 100%;
  height: 44px;
  margin: 10px 0;
  color: #ffffff;
  background-color: #65cce9;
  border: solid 3px #dfdfdf;
  border-radius: 22px;
`;

const SnsOauth = () => (
  <Container>
    <Button>Sign in with Twitter</Button>
  </Container>
);

export default SnsOauth;
