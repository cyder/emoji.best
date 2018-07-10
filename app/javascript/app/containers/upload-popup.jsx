import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';
import styled from 'styled-components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faCloudUploadAlt from '@fortawesome/fontawesome-free-solid/faCloudUploadAlt';

import UploadEmoji from '../components/upload-emoji';
import * as PopupManagerActions from '../actions/popup-manager';
import * as UploadEmojiActions from '../actions/upload-emoji';

import { Title, CloseButton } from '../components/css/popup';

const Container = styled.div`
  width: 80vw;
  max-width: 660px;
  position: relative;;
`;

const EmojiDropzone = styled(Dropzone)`
  width: auto;
  margin-bottom: 20px;
  border: 3px dashed #c4c4c4;
  border-radius: 10px;
  color: #c4c4c4;
  text-align: center;
  padding: 40px 20px;
  margin: 20px 5% 10px;
`;

const DropzoneMessage = styled.p`
  font-size: 1.2rem;
  margin: 0 0 10px;
`;

const Emojis = styled.div`
  max-height: 40vh;
  overflow-y: auto;
  padding: 10px 5% 0;
  margin-bottom: 10px;
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
  margin-bottom: 20px;
`;

class UploadPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSaved: false,
    };

    this.onDrop = this.onDrop.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.emojis.length === 0 && this.state.isSaved) {
      this.props.closePopup();
    }
  }

  onDrop(files) {
    files.forEach(file => this.props.uploadEmoji(file, this.props.accessToken));
  }

  onSubmit() {
    this.setState({ isSaved: true });
  }

  render() {
    const {
      emojis,
      saveEmoji,
      deleteEmoji,
      accessToken,
    } = this.props;

    return (
      <Container>
        <Title>Upload</Title>
        <EmojiDropzone onDrop={accepted => this.onDrop(accepted)}>
          <UploadIcon><FontAwesomeIcon icon={faCloudUploadAlt} /></UploadIcon>
          <DropzoneMessage>Drag and drop or click here</DropzoneMessage>
        </EmojiDropzone>
        <Emojis>
          {
            emojis.map(emoji => (
              <UploadEmoji
                key={emoji.id}
                emoji={emoji}
                saveEmoji={saveEmoji}
                deleteEmoji={deleteEmoji}
                isSaved={this.state.isSaved}
                accessToken={accessToken}
              />
            ))
          }
        </Emojis>
        <UploadMessage>choose {emojis.length} emojis</UploadMessage>
        <UploadButton onClick={this.onSubmit}>Upload</UploadButton>
        <CloseButton onClick={() => this.props.closePopup()} />
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state.uploadEmoji,
    accessToken: state.myself.accessToken,
  };
}

function mapDispatchProps(dispatch) {
  return bindActionCreators({
    ...PopupManagerActions,
    ...UploadEmojiActions,
  }, dispatch);
}

const UploadPopupContainer = connect(mapStateToProps, mapDispatchProps)(UploadPopup);

UploadPopup.propTypes = {
  closePopup: PropTypes.func.isRequired,
  uploadEmoji: PropTypes.func.isRequired,
  saveEmoji: PropTypes.func.isRequired,
  deleteEmoji: PropTypes.func.isRequired,
  emojis: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  accessToken: PropTypes.string.isRequired,
};

export default UploadPopupContainer;
