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
  z-index: 99;
`;


class PopupBackground extends Component {
  constructor(props) {
    super(props);

    this.onKeydown = this.onKeydown.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.onKeydown, false);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeydown, false);
  }

  onKeydown(event) {
    const escapeKeyCode = 27;
    if (event.keyCode === escapeKeyCode) {
      this.props.onClose();
    }
  }

  render() {
    return (
      <Background onClick={this.props.onClose} />
    );
  }
}

PopupBackground.propTypes = {
  onClose: PropTypes.func.isRequired,
};


export default PopupBackground;
