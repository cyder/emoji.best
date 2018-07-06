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
  background-color: #65cce9;
  border: solid 3px #dfdfdf;
  border-radius: 22px;
`;

class SnsOauth extends Component {
  constructor(props) {
    super(props);

    this.onCloseWindow = this.onCloseWindow.bind(this);
    this.openWindow = this.openWindow.bind(this);
  }

  onCloseWindow() {
    const accessToken = Cookies.get('access_token');
    Cookies.remove('access_token');
    this.props.check(accessToken);
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
        <Button onClick={() => this.openWindow('/oauth/twitter')}>
          { this.props.caption } with Twitter
        </Button>
      </Container>
    );
  }
}

SnsOauth.propTypes = {
  check: PropTypes.func.isRequired,
  caption: PropTypes.string.isRequired,
};

export default SnsOauth;
