import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faCloudUploadAlt from '@fortawesome/fontawesome-free-solid/faCloudUploadAlt';

import { STATUS } from '../constants/myself';
import Profile from './profile';

const List = styled.ul`
  margin: 0 10px;
`;

const Item = styled.li`
  display: inline;
  margin: 0 10px;
`;

const Navigation = ({
  status,
  location,
  showSignInPopup,
  showSignUpPopup,
}) => (
  <div>
    {
      status === STATUS.SIGNIN ? (
        <List>
          <Item>
            <Link to={{
              pathname: '/upload',
              state: 'popup',
              callbackUrl: location.pathname + location.search,
            }}>
              <FontAwesomeIcon icon={faCloudUploadAlt} /> Upload
            </Link>
          </Item>
          <Item><Profile /></Item>
        </List>
      ) : (
        <List>
          <Item>
            <Link to={{
              pathname: '/signin',
              state: 'popup',
              callbackUrl: location.pathname + location.search,
            }}>
              Sign In
            </Link>
          </Item>
          <Item>
            <Link to={{
              pathname: '/signup',
              state: 'popup',
              callbackUrl: location.pathname + location.search,
            }}>
              Sign Up
            </Link>
          </Item>
        </List>
      )
    }
  </div>
);

function mapStateToProps(state) {
  return {
    status: state.myself.status,
    location: state.router.location,
  };
}

const NavigationContainer = connect(mapStateToProps)(Navigation);

Navigation.propTypes = {
  status: PropTypes.string.isRequired,
};

export default NavigationContainer;
