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
