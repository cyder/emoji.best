import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import SnsOauth from '../components/sns-oauth';
import * as MyselfActions from '../actions/myself';
import PopupBackground from '../components/popup-background';
import FillButton from '../components/atoms/buttons/fill-button';

import {
  Wrapper,
  Container,
  Title,
  OrContainer,
  Or,
  Form,
  TextForm,
  ButtonWrapper,
  Message,
  SwitchLink,
  CloseButton,
  ErrorMessage,
} from '../components/css/popup';
import HeadTitle from '../components/atoms/head/head-title';

class SignInPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
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
    this.props.signIn(
      this.state.email,
      this.state.password,
      this.props.history.location.callbackUrl,
    );
  }

  render() {
    return (
      <Wrapper>
        <HeadTitle pageTitle="Sign In" />
        <Container>
          <Title>Sign In</Title>
          <SnsOauth
            caption="Sign in"
            authentication={this.props.authentication}
            callbackUrl={this.props.history.location.callbackUrl}
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
            <ButtonWrapper>
              <FillButton onClick={this.submit} >Sign In</FillButton>
            </ButtonWrapper>
          </Form>
          <Message>
            Not a member?
            <SwitchLink to={{ pathname: '/signup', state: 'popup' }} replace>
              Sign Up
            </SwitchLink>
          </Message>
          <CloseButton onClick={this.onClose} />
        </Container>
        <PopupBackground onClose={this.onClose} />
      </Wrapper>
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

const SignInPopupContainer = connect(mapStateToProps, mapDispatchProps)(SignInPopup);

SignInPopup.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
    location: PropTypes.shape({
      state: PropTypes.string,
      callbackUrl: PropTypes.string,
    }).isRequired,
  }).isRequired,
  authentication: PropTypes.func.isRequired,
  signIn: PropTypes.func.isRequired,
  clearError: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
};

SignInPopup.defaultProps = {
  errorMessage: null,
};

export default SignInPopupContainer;
