import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faCloudUploadAlt from '@fortawesome/fontawesome-free-solid/faCloudUploadAlt';

import * as PopupManagerActions from '../actions/popup-manager';
import { STATUS } from '../constants/myself';
import Profile from './profile';

const Container = styled.nav`
  position: absolute;
  top: 0;
  right: 0;
  font-size: 1.2rem;
  line-height: 3.6rem;
`;

const List = styled.ul`
  margin: 0 10px;
`;

const Item = styled.li`
  display: inline;
  margin: 0 10px;
`;

const Navigation = ({
  status,
  showSignInPopup,
  showSignUpPopup,
}) => (
  <Container>
    {
      status === STATUS.SIGNIN ? (
        <List>
          <Item><FontAwesomeIcon icon={faCloudUploadAlt} /> Upload</Item>
          <Item><Profile /></Item>
        </List>
      ) : (
        <List>
          <Item onClick={showSignInPopup}>Sign In</Item>
          <Item onClick={showSignUpPopup}>Sign Up</Item>
        </List>
      )
    }
  </Container>
);

function mapStateToProps(state) {
  return { status: state.myself.status };
}

function mapDispatchProps(dispatch) {
  return bindActionCreators(PopupManagerActions, dispatch);
}

const NavigationContainer = connect(mapStateToProps, mapDispatchProps)(Navigation);

Navigation.propTypes = {
  status: PropTypes.string.isRequired,
  showSignInPopup: PropTypes.func.isRequired,
  showSignUpPopup: PropTypes.func.isRequired,
};

export default NavigationContainer;
