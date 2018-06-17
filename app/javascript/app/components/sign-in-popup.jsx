import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.section`
  position: relative;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-wieght: bold;
  text-align: center;
  padding: 10px 0;
`;

const SignInPopup = () => (
  <Container>
    <Title>Sign Up</Title>
  </Container>
);

export default SignInPopup;
