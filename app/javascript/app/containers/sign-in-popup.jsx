import React, { Component } from 'react';
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

class SignInPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };

    this.submit = this.submit.bind(this);
  }

  submit() {
    this.props.signIn(this.state.email, this.state.password);
  }

  render() {
    return (
      <Container>
        <Title>Sign In</Title>
        <Form>
          <TextForm
            type="email"
            placeholder="Email"
            onChange={e => this.setState({ email: e.target.value })}
          />
          <TextForm
            type="password"
            placeholder="Password"
            onChange={e => this.setState({ password: e.target.value })}
          />
          <Button onClick={this.submit}>Sign In</Button>
        </Form>
        <Message>
          Not a member?
          <SwitchButton onClick={this.props.showSignUpPopup}>Sign Up</SwitchButton>
        </Message>
        <CloseButton onClick={() => this.props.closePopup()} />
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return { myself: state.myself };
}

function mapDispatchProps(dispatch) {
  return bindActionCreators({
    ...PopupManagerActions,
    ...MyselfActions,
  }, dispatch);
}

const SignInPopupContainer = connect(mapStateToProps, mapDispatchProps)(SignInPopup);

SignInPopup.propTypes = {
  closePopup: PropTypes.func.isRequired,
  showSignUpPopup: PropTypes.func.isRequired,
  signIn: PropTypes.func.isRequired,
};

export default SignInPopupContainer;
