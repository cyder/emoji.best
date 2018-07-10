import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faCloudUploadAlt from '@fortawesome/fontawesome-free-solid/faCloudUploadAlt';

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

const Navigation = ({ status }) => (
  <Container>
    {
      status === STATUS.SIGNIN ? (
        <List>
          <Item>
            <Link to={{ pathname: '/upload', state: 'popup' }}>
              <FontAwesomeIcon icon={faCloudUploadAlt} /> Upload
            </Link>
          </Item>
          <Item><Profile /></Item>
        </List>
      ) : (
        <List>
          <Item><Link to={{ pathname: '/signin', state: 'popup' }}>Sign In</Link></Item>
          <Item><Link to={{ pathname: '/signup', state: 'popup' }}>Sign Up</Link></Item>
        </List>
      )
    }
  </Container>
);

function mapStateToProps(state) {
  return { status: state.myself.status };
}

const NavigationContainer = connect(mapStateToProps)(Navigation);

Navigation.propTypes = {
  status: PropTypes.string.isRequired,
};

export default NavigationContainer;
