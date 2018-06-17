import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Background = styled.div`
  display: ${props => (props.isShow ? 'block' : 'none')}
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
`;

const Container = styled.div`
  background-color: #ffffff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  border-radius: 10px;
`;

const selectPopup = (show) => {
  switch (show) {
    case 'sign_up':
      return 'sign_up';
    case 'sign_in':
      return 'sign_in';
    default:
      return null;
  }
};

const PopupManager = ({ show }) => (
  <Background isShow={show !== null}>
    <Container>
      {selectPopup(show)}
    </Container>
  </Background>
);

PopupManager.propTypes = {
  show: PropTypes.string,
};

PopupManager.defaultProps = {
  show: null,
};

export default PopupManager;
