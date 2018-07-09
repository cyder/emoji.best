import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as PopupManagerActions from '../actions/popup-manager';
import * as MyselfActions from '../actions/myself';

import {
  Title,
  Form,
  TextForm,
  Button,
  Message,
  SwitchButton,
  CloseButton,
  ErrorMessage,
} from '../components/css/popup';

class SignUpPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      passwordConfirm: '',
    };

    this.submit = this.submit.bind(this);
  }

  componentWillUnmount() {
    this.props.clearError();
  }

  submit() {
    this.props.signUp(
      this.state.name,
      this.state.email,
      this.state.password,
      this.state.passwordConfirm,
    );
  }

  render() {
    return (
      <div>
        <Title>Sign Up</Title>
        <Form>
          <ErrorMessage isShow={this.props.errorMessage !== null}>
            {this.props.errorMessage}
          </ErrorMessage>
          <TextForm
            type="name"
            placeholder="Username"
            onChange={e => this.setState({ name: e.target.value })}
          />
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
          <TextForm
            type="password"
            placeholder="Password (Confirm)"
            onChange={e => this.setState({ passwordConfirm: e.target.value })}
          />
          <Button onClick={this.submit}>Sign Up</Button>
        </Form>
        <Message>
          Already a member?
          <SwitchButton onClick={this.props.showSignInPopup}>Sign In</SwitchButton>
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

const SignUpPopupContainer = connect(mapStateToProps, mapDispatchProps)(SignUpPopup);

SignUpPopup.propTypes = {
  closePopup: PropTypes.func.isRequired,
  showSignInPopup: PropTypes.func.isRequired,
  signUp: PropTypes.func.isRequired,
  clearError: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
};

SignUpPopup.defaultProps = {
  errorMessage: null,
};

export default SignUpPopupContainer;
