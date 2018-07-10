import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as PopupManagerActions from '../actions/popup-manager';
import * as MyselfActions from '../actions/myself';

import {
  Background,
  Container,
  Title,
  Form,
  TextForm,
  Button,
  Message,
  SwitchLink,
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
    this.props.signIn(this.state.email, this.state.password);
  }

  render() {
    return (
      <Background>
        <Container>
          <Title>Sign In</Title>
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
            <SwitchLink to={{ pathname: '/signup', state: 'popup' }} replace>
              Sign Up
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
    ...PopupManagerActions,
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
    }).isRequired,
  }).isRequired,
  showSignUpPopup: PropTypes.func.isRequired,
  signIn: PropTypes.func.isRequired,
  clearError: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
};

SignInPopup.defaultProps = {
  errorMessage: null,
};

export default SignInPopupContainer;
