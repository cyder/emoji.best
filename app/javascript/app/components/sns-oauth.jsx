import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ButtonWrapper, Form } from './css/popup';
import FillButton from './atoms/buttons/fill-button';
import { TWITTER, FACEBOOK, GOOGLE } from '../constants/styles/color';

const Cookies = require('js-cookie');

class SnsOauth extends Component {
  constructor(props) {
    super(props);

    this.onCloseWindow = this.onCloseWindow.bind(this);
    this.openWindow = this.openWindow.bind(this);
  }

  onCloseWindow() {
    const accessToken = Cookies.get('access_token');
    if (accessToken !== undefined) {
      Cookies.remove('access_token');
      this.props.authentication(accessToken, this.props.callbackUrl);
    }
  }

  openWindow(path) {
    const params = 'width=800, height=600, location=0, status=0';
    const subWindow = window.open(path, 'emoji.best', params);
    let timer;
    const checkChild = () => {
      if (subWindow.closed) {
        this.onCloseWindow();
        clearInterval(timer);
      }
    };
    timer = setInterval(checkChild, 500);
  }

  render() {
    return (
      <Form>
        <ButtonWrapper>
          <FillButton
            onClick={() => this.openWindow('/oauth/twitter')}
            label={`${this.props.caption} with Twitter`}
            backgroundColor={TWITTER}
          />
        </ButtonWrapper>
        <ButtonWrapper>
          <FillButton
            onClick={() => this.openWindow('/oauth/facebook')}
            label={`${this.props.caption} with Facebook`}
            backgroundColor={FACEBOOK}
          />
        </ButtonWrapper>
        <ButtonWrapper>
          <FillButton
            onClick={() => this.openWindow('/oauth/google')}
            label={`${this.props.caption} with Google`}
            backgroundColor={GOOGLE}
          />
        </ButtonWrapper>
      </Form>
    );
  }
}

SnsOauth.propTypes = {
  authentication: PropTypes.func.isRequired,
  caption: PropTypes.string.isRequired,
  callbackUrl: PropTypes.string,
};

SnsOauth.defaultProps = {
  callbackUrl: undefined,
};

export default SnsOauth;
