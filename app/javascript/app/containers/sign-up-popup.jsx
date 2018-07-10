import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import SnsOauth from '../components/sns-oauth';
import * as MyselfActions from '../actions/myself';

import {
  Background,
  Container,
  Title,
  OrContainer,
  Or,
  Form,
  TextForm,
  Button,
  Message,
  SwitchLink,
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

    this.onClose = this.onClose.bind(this);
    this.submit = this.submit.bind(this);
  }

  componentWillUnmount() {
    this.props.clearError();
  }

  onClose() {
    if (this.props.history.location.state === undefined) {
      this.props.history.push('/');
    } else {
      this.props.history.goBack();
    }
  }

  submit() {
    this.props.signUp(
      this.state.name,
      this.state.email,
      this.state.password,
      this.state.passwordConfirm,
      this.props.history.location.callbackUrl,
    );
  }

  render() {
    return (
      <Background>
        <Container>
          <Title>Sign Up</Title>
          <SnsOauth
            caption="Sign up"
            authentication={this.props.authentication}
          />
          <OrContainer><Or>OR</Or></OrContainer>
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
            <SwitchLink to={{ pathname: '/signin', state: 'popup' }} replace>
              Sign In
            </SwitchLink>
          </Message>
          <CloseButton onClick={this.onClose} />
        </Container>
      </Background>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.myself.errorMessage };
}

function mapDispatchProps(dispatch) {
  return bindActionCreators({
    ...MyselfActions,
  }, dispatch);
}

const SignUpPopupContainer = connect(mapStateToProps, mapDispatchProps)(SignUpPopup);

SignUpPopup.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
    location: PropTypes.shape({
      state: PropTypes.string,
      callbackUrl: PropTypes.string,
    }).isRequired,
  }).isRequired,
  authentication: PropTypes.func.isRequired,
  signUp: PropTypes.func.isRequired,
  clearError: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
};

SignUpPopup.defaultProps = {
  errorMessage: null,
};

export default SignUpPopupContainer;
