import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faUser from '@fortawesome/fontawesome-free-solid/faUser';
import faCloudUploadAlt from '@fortawesome/fontawesome-free-solid/faCloudUploadAlt';

import * as PopupManagerActions from '../actions/popup-manager';
import UserShape from '../components/shapes/user';

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
  user,
  showSignInPopup,
  showSignUpPopup,
}) => (
  <Container>
    {
      user === null ? (
        <List>
          <Item onClick={showSignInPopup}>Sign In</Item>
          <Item onClick={showSignUpPopup}>Sign Up</Item>
        </List>
      ) : (
        <List>
          <Item><FontAwesomeIcon icon={faCloudUploadAlt} /> Upload</Item>
          <Item><FontAwesomeIcon icon={faUser} /></Item>
        </List>
      )
    }
  </Container>
);

function mapStateToProps(state) {
  return { user: state.myself.user };
}

function mapDispatchProps(dispatch) {
  return bindActionCreators(PopupManagerActions, dispatch);
}

const NavigationContainer = connect(mapStateToProps, mapDispatchProps)(Navigation);

Navigation.propTypes = {
  user: UserShape,
  showSignInPopup: PropTypes.func.isRequired,
  showSignUpPopup: PropTypes.func.isRequired,
};

Navigation.defaultProps = {
  user: null,
};

export default NavigationContainer;
