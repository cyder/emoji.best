import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export const Background = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
`;


class PopupBackground extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Background />
    );
  }
}

PopupBackground.propTypes = {
};


export default PopupBackground;
