import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faUser from '@fortawesome/fontawesome-free-solid/faUser';

const Profile = () => (
  <FontAwesomeIcon icon={faUser} />
);

function mapStateToProps(state) {
  return { status: state.myself.status };
}

function mapDispatchProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

const ProfileContainer = connect(mapStateToProps, mapDispatchProps)(Profile);

Profile.propTypes = {
};

export default ProfileContainer;
