import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Cookies = require('js-cookie');

export const Container = styled.div`
  width: 300px;
  padding: 20px 100px 10px;
`;

export const Button = styled.button`
  display: block;
  width: 100%;
  height: 44px;
  margin: 10px 0;
  color: #ffffff;
  border: solid 3px #dfdfdf;
  border-radius: 22px;
`;

export const TwitterButton = styled(Button)`
  background-color: #65cce9;
`;

export const FacebookButton = styled(Button)`
  background-color: #4e83b7;
`;

export const GoogleButton = styled(Button)`
  background-color: #d47b5f;
`;

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
      this.props.check(accessToken);
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
      <Container>
        <TwitterButton onClick={() => this.openWindow('/oauth/twitter')}>
          { this.props.caption } with Twitter
        </TwitterButton>
        <FacebookButton onClick={() => this.openWindow('/oauth/facebook')}>
          { this.props.caption } with Facebook
        </FacebookButton>
        <GoogleButton onClick={() => this.openWindow('/oauth/google')}>
          { this.props.caption } with Google
        </GoogleButton>
      </Container>
    );
  }
}

SnsOauth.propTypes = {
  check: PropTypes.func.isRequired,
  caption: PropTypes.string.isRequired,
};

export default SnsOauth;
