import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faUser from '@fortawesome/fontawesome-free-solid/faUser';

import UserShape from '../components/shapes/user';
import * as MyselfActions from '../actions/myself';

const Container = styled.span`
  position: relative;
`;

const Back = styled.div`
  display: ${props => (props.isShow ? 'block' : 'none')}
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 10;
`;

const Popup = styled.div`
  display: ${props => (props.isShow ? 'block' : 'none')}
  position: absolute;
  min-width: 240px;
  background-color: #ffffff;
  right: 0;
  color: #212121;
  border-radius: 10px;
  border: solid 3px #dfdfdf;
  line-height: normal;
  z-index: 100;
`;

const Name = styled.h2`
  font-size: 1.2rem;
  margin: 10px 10px 5px;
`;

const Email = styled.div`
  font-size: 1rem;
  margin: 5px 10px;
  color: #dfdfdf;
`;

const Info = styled.div`
  font-size: 1rem;
  margin: 5px 10px;
`;

const Number = styled.span`
  font-size: 1.2rem;
`;

const Button = styled.button`
  display: block;
  background-color: transparent;
  border: none;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  margin: 10px auto;
`;

const Hr = styled.hr`
  border: solid 1px #dfdfdf;
`;

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowPopup: false,
    };
  }

  render() {
    const { user, accessToken, signOut } = this.props;
    return (
      <Container>
        <FontAwesomeIcon
          onClick={() => this.setState({ isShowPopup: true })}
          icon={faUser}
        />
        <Back
          onClick={() => this.setState({ isShowPopup: false })}
          isShow={this.state.isShowPopup}
        />
        <Popup isShow={this.state.isShowPopup}>
          <Name>{ user.name }</Name>
          <Email>{ user.email }</Email>
          <Info><Number>{ user.number_of_uploaded }</Number> Upload</Info>
          <Hr />
          <Button onClick={() => signOut(accessToken)} >Sign Out</Button>
        </Popup>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return { ...state.myself };
}

function mapDispatchProps(dispatch) {
  return bindActionCreators({ ...MyselfActions }, dispatch);
}

const ProfileContainer = connect(mapStateToProps, mapDispatchProps)(Profile);

Profile.propTypes = {
  user: UserShape.isRequired,
  accessToken: PropTypes.string.isRequired,
  signOut: PropTypes.func.isRequired,
};

export default ProfileContainer;
