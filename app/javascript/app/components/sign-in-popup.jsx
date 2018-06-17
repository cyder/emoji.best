import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  Title,
  Form,
  TextForm,
  Button,
  Message,
  SwitchButton,
  CloseButton,
} from './css/popup';

const SignInPopup = ({ closePopup, showSignUpPopup }) => (
  <Container>
    <Title>Sign In</Title>
    <Form>
      <TextForm type="email" placeholder="Email" />
      <TextForm type="password" placeholder="Password" />
      <Button>Sign In</Button>
    </Form>
    <Message>
      Not a member?
      <SwitchButton onClick={showSignUpPopup}>Sign Up</SwitchButton>
    </Message>
    <CloseButton onClick={closePopup} />
  </Container>
);

SignInPopup.propTypes = {
  closePopup: PropTypes.func.isRequired,
  showSignUpPopup: PropTypes.func.isRequired,
};

export default SignInPopup;
