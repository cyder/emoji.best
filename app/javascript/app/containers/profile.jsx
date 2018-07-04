import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faUser from '@fortawesome/fontawesome-free-solid/faUser';

import UserShape from '../components/shapes/user';

const Container = styled.span`
  position: relative;
`;

const Icon = styled.span`
`;

const Popup = styled.div`
  position: absolute;
  min-width: 240px;
  background-color: #ffffff;
  right: 0;
  color: #212121;
  border-radius: 10px;
  border: solid 3px #dfdfdf;
  line-height: normal;
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
  text-align: right;
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

const Profile = ({ user }) => (
  <Container>
    <Icon>
      <FontAwesomeIcon icon={faUser} />
    </Icon>
    <Popup >
      <Name>{ user.name }</Name>
      <Email>{ user.email }</Email>
      <Hr />
      <Info><Number>{ user.number_of_uploaded }</Number> Upload</Info>
      <Info><Number>{ user.number_of_downloaded }</Number> Download</Info>
      <Hr />
      <Button>Edit Profile</Button>
      <Button>Sign Out</Button>
    </Popup>
  </Container>
);

function mapStateToProps(state) {
  return { user: state.myself.user };
}

function mapDispatchProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

const ProfileContainer = connect(mapStateToProps, mapDispatchProps)(Profile);

Profile.propTypes = {
  user: UserShape.isRequired,
};

export default ProfileContainer;
