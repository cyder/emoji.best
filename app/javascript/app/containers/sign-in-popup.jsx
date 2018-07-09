import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import SnsOauth from '../components/sns-oauth';
import * as PopupManagerActions from '../actions/popup-manager';
import * as MyselfActions from '../actions/myself';

import {
  Title,
  OrContainer,
  Or,
  Form,
  TextForm,
  Button,
  Message,
  SwitchButton,
  CloseButton,
  ErrorMessage,
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

  componentWillUnmount() {
    this.props.clearError();
  }

  submit() {
    this.props.signIn(this.state.email, this.state.password);
  }

  render() {
    return (
      <div>
        <Title>Sign In</Title>
        <SnsOauth
          caption="Sign in"
          check={this.props.check}
        />
        <OrContainer><Or>OR</Or></OrContainer>
        <Form>
          <ErrorMessage isShow={this.props.errorMessage !== null}>
            {this.props.errorMessage}
          </ErrorMessage>
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
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.myself.errorMessage };
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
  check: PropTypes.func.isRequired,
  signIn: PropTypes.func.isRequired,
  clearError: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
};

SignInPopup.defaultProps = {
  errorMessage: null,
};

export default SignInPopupContainer;
