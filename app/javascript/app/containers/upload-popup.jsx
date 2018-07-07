import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';
import styled from 'styled-components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faCloudUploadAlt from '@fortawesome/fontawesome-free-solid/faCloudUploadAlt';

import * as PopupManagerActions from '../actions/popup-manager';
import * as MyselfActions from '../actions/myself';

import { Title, CloseButton } from '../components/css/popup';

const Container = styled.div`
  width: 80vw;
  max-width: 660px;
  position: relative;;
`;

const Content = styled.div`
  padding: 20px 5%;
`;

const EmojiDropzone = styled(Dropzone)`
  width: auto;
  margin-bottom: 20px;
  border: 3px dashed #c4c4c4;
  border-radius: 10px;
  color: #c4c4c4;
  text-align: center;
  padding: 40px 20px;
`;

const DropzoneMessage = styled.p`
  font-size: 1.2rem;
  margin: 0 0 10px;
`;

const UploadIcon = styled.div`
  font-size: 4rem;
  margin-bottom: 10px;
`;

const UploadMessage = styled.p`
  text-align: center;
  font-size: 1rem;
  color: #909090;
  font-weight: bold;
  margin: 0 0 10px;
`;

const UploadButton = styled.button`
  display: block;
  width: 240px;
  height: 44px;
  margin: auto;
  color: #ffffff;
  background-color: #464646;
  font-size: 1.1rem;
  border: solid 3px #dfdfdf;
  border-radius: 25px;
  font-weight: bold;
  text-decoration: none;
  text-align: center;
`;

class UploadPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Container>
        <Title>Upload</Title>
        <Content>
          <EmojiDropzone>
            <UploadIcon><FontAwesomeIcon icon={faCloudUploadAlt} /></UploadIcon>
            <DropzoneMessage>Drag and drop or click here</DropzoneMessage>
          </EmojiDropzone>
          <UploadMessage>choose 0 emojis</UploadMessage>
          <UploadButton>Upload</UploadButton>
        </Content>
        <CloseButton onClick={() => this.props.closePopup()} />
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return { };
}

function mapDispatchProps(dispatch) {
  return bindActionCreators({
    ...PopupManagerActions,
  }, dispatch);
}

const UploadPopupContainer = connect(mapStateToProps, mapDispatchProps)(UploadPopup);

UploadPopup.propTypes = {
  closePopup: PropTypes.func.isRequired,
};

export default UploadPopupContainer;
