import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import SignInPopup from '../components/sign-in-popup';
import SignUpPopup from '../components/sign-up-popup';
import * as PopupManagerActions from '../actions/popup-manager';
import { SIGN_IN_POPUP, SIGN_UP_POPUP } from '../constants/popup-manager';

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

const selectPopup = (
  show,
  closePopup,
  showSignInPopup,
  showSignUpPopup,
) => {
  switch (show) {
    case SIGN_UP_POPUP:
      return (
        <SignUpPopup
          closePopup={closePopup}
          showSignInPopup={showSignInPopup}
        />
      );
    case SIGN_IN_POPUP:
      return (
        <SignInPopup
          closePopup={closePopup}
          showSignUpPopup={showSignUpPopup}
        />
      );
    default:
      return null;
  }
};

const PopupManager = ({
  popupManager,
  closePopup,
  showSignInPopup,
  showSignUpPopup,
}) => (
  <Background isShow={popupManager !== null}>
    <Container>
      {selectPopup(popupManager, closePopup, showSignInPopup, showSignUpPopup)}
    </Container>
  </Background>
);

function mapStateToProps(state) {
  return state;
}

function mapDispatchProps(dispatch) {
  return bindActionCreators({
    ...PopupManagerActions,
  }, dispatch);
}

const PopupManagerContainer = connect(mapStateToProps, mapDispatchProps)(PopupManager);

PopupManager.propTypes = {
  popupManager: PropTypes.string,
  closePopup: PropTypes.func.isRequired,
  showSignInPopup: PropTypes.func.isRequired,
  showSignUpPopup: PropTypes.func.isRequired,
};

PopupManager.defaultProps = {
  popupManager: null,
};

export default PopupManagerContainer;
