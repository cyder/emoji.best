import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as PopupManagerActions from '../actions/popup-manager';
import * as MyselfActions from '../actions/myself';

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
    <CloseButton onClick={() => closePopup()} />
  </Container>
);

function mapStateToProps(state) {
  return { myself: state.myself };
}

function mapDispatchProps(dispatch) {
  return bindActionCreators({
    ...PopupManagerActions,
    ...MyselfActions,
  }, dispatch);
}

const SignUpPopupContainer = connect(mapStateToProps, mapDispatchProps)(SignUpPopup);

SignUpPopup.propTypes = {
  closePopup: PropTypes.func.isRequired,
  showSignInPopup: PropTypes.func.isRequired,
};

export default SignUpPopupContainer;
