import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.section`
  position: relative;
`;

const Title = styled.h2`
  font-size: 1.4rem;
  font-wieght: bold;
  text-align: center;
  padding: 15px 0;
  margin: 0;
  border-bottom: 2px solid #f0f0f0;
`;

const Form = styled.div`
  width: 300px;
  padding: 10px 100px;
`;

const TextForm = styled.input`
  display: block;
  width: 100%;
  margin 12px 0;
  box-sizing: border-box;
  background-color: #f5f5f5;
  border: none;
  padding: 8px 12px;
  border-radius: 5px;

  &::placeholder {
    color: #c0c0c0;
  }
`;

const Button = styled.button`
  display: block;
  width: 100%;
  height: 44px;
  margin: 20px 0 10px;
  color: #ffffff;
  background-color: #464646;
  border: solid 3px #dfdfdf;
  border-radius: 22px;
`;

const Message = styled.p`
  margin: 0 20px;
  padding: 20px 0;
  border-top: 2px solid #f0f0f0;
  text-align: center;
`;

const SwitchButton = styled.span`
  text-decoration: underline;
  margin: 0 10px;
`;

const CloseButton = styled.div`
  position: absolute;
  top: 10px;
  left: 5px;
  width: 32px;
  height: 32px;

  &::after, &::before {
    display: block;
    content: "";
    position: absolute;
    top: 0;
    left: 15px
    width: 5px;
    height: 33px;
    border-radius: 2px;
    background-color: #c4c4c4;
  }

  &::after {
    transform: rotate(45deg);
  }

  &::before {
    transform: rotate(-45deg);
  }
`;

const SignUpPopup = ({ closePopup, showSignInPopup }) => (
  <Container>
    <Title>Sign Up</Title>
    <Form>
      <TextForm type="name" placeholder="Username" />
      <TextForm type="email" placeholder="Email" />
      <TextForm type="password" placeholder="Password" />
      <TextForm type="password" placeholder="Password (Confirm)" />
      <Button>Sign Up</Button>
    </Form>
    <Message>
      Already a member?
      <SwitchButton onClick={showSignInPopup}>Sign In</SwitchButton>
    </Message>
    <CloseButton onClick={closePopup} />
  </Container>
);

SignUpPopup.propTypes = {
  closePopup: PropTypes.func.isRequired,
  showSignInPopup: PropTypes.func.isRequired,
};

export default SignUpPopup;
