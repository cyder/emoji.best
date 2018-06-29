import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as PopupManagerActions from '../actions/popup-manager';
import * as UserActions from '../actions/user';

import {
  Container,
  Title,
  Form,
  TextForm,
  Button,
  Message,
  SwitchButton,
  CloseButton,
} from '../components/css/popup';

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

function mapStateToProps(state) {
  return { user: state.user };
}

function mapDispatchProps(dispatch) {
  return bindActionCreators({
    ...PopupManagerActions,
    ...UserActions,
  }, dispatch);
}

const SignInPopupContainer = connect(mapStateToProps, mapDispatchProps)(SignInPopup);

SignInPopup.propTypes = {
  closePopup: PropTypes.func.isRequired,
  showSignUpPopup: PropTypes.func.isRequired,
};

export default SignInPopupContainer;
