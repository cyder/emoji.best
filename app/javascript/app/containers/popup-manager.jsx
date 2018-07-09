import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import SignInPopup from '../containers/sign-in-popup';
import SignUpPopup from '../containers/sign-up-popup';
import { Background, Container } from '../components/css/popup';
import { POPUP } from '../constants/popup-manager';

const selectPopup = (show) => {
  switch (show) {
    case POPUP.SIGN_UP:
      return (<SignUpPopup />);
    case POPUP.SIGN_IN:
      return (<SignInPopup />);
    default:
      return null;
  }
};

const PopupManager = ({ popupManager }) => (
  <Background isShow={popupManager !== null}>
    <Container>
      {selectPopup(popupManager)}
    </Container>
  </Background>
);

function mapStateToProps(state) {
  return { popupManager: state.popupManager };
}

const PopupManagerContainer = connect(mapStateToProps)(PopupManager);

PopupManager.propTypes = {
  popupManager: PropTypes.string,
};

PopupManager.defaultProps = {
  popupManager: null,
};

export default PopupManagerContainer;
