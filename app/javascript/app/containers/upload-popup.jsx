import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';
import styled from 'styled-components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faCloudUploadAlt from '@fortawesome/fontawesome-free-solid/faCloudUploadAlt';
import faCircleNotch from '@fortawesome/fontawesome-free-solid/faCircleNotch';

import { STATUS } from '../constants/upload-emoji';
import UploadEmoji from '../components/upload-emoji';
import * as UploadEmojiActions from '../actions/upload-emoji';
import PopupBackground from '../components/popup-background';

import {
  Wrapper,
  Container,
  Title,
  CloseButton,
} from '../components/css/popup';
import HeadTitle from '../components/atoms/head/head-title';
import FillButton from '../components/atoms/buttons/fill-button';

const UploadContainer = styled(Container)`
  width: 80vw;
  max-width: 660px;
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

const UploadButtonWrapper = styled.div`
  width: 240px;
  margin: 0 auto 20px;
`;

const FlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Icon = styled.div`
  font-size: 30px;
  width: 40px;
  height: 40px;
  margin: 10px;
  text-align: center;
  line-height: 40px;
`;

class UploadPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSaved: false,
    };

    this.onClose = this.onClose.bind(this);
    this.onDrop = this.onDrop.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillMount() {
    if (this.props.accessToken === null) {
      this.props.history.replace('/signin');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isFinished) {
      const callbackUrl = nextProps.history.location.callbackUrl || '/';
      this.props.history.push(callbackUrl);
    }
  }

  onDrop(files) {
    files.forEach(file => this.props.uploadEmoji(file, this.props.accessToken));
  }

  onClose() {
    if (this.props.history.location.state === undefined) {
      this.props.history.push('/');
    } else {
      this.props.history.goBack();
    }
  }

  onSubmit() {
    this.setState({ isSaved: true });
  }

  render() {
    const {
      emojis,
      saveEmoji,
      failedSaveEmoji,
      deleteEmoji,
      accessToken,
    } = this.props;
    const saving = emojis.find(item => item.status === STATUS.SAVING) !== undefined;

    return (
      <Wrapper>
        <HeadTitle pageTitle="Upload" />
        <UploadContainer>
          <Title>Upload</Title>
          <EmojiDropzone
            onDrop={accepted => this.onDrop(accepted)}
          >
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
                  failedSaveEmoji={failedSaveEmoji}
                />
              ))
            }
          </Emojis>
          <UploadMessage>choose {emojis.length} emojis</UploadMessage>
          <UploadButtonWrapper>
            {
              saving ?
                <FlexBox>
                  <Icon><FontAwesomeIcon icon={faCircleNotch} spin /></Icon>
                  <div>Uploading...</div>
                </FlexBox> :
                <FillButton onClick={this.onSubmit} >
                    Upload
                </FillButton>
            }
          </UploadButtonWrapper>
          <CloseButton onClick={this.onClose} />
        </UploadContainer>
        <PopupBackground onClose={this.onClose} />
      </Wrapper>
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
    ...UploadEmojiActions,
  }, dispatch);
}

const UploadPopupContainer = connect(mapStateToProps, mapDispatchProps)(UploadPopup);

UploadPopup.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
    replace: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
    location: PropTypes.shape({
      state: PropTypes.string,
      callbackUrl: PropTypes.string,
    }).isRequired,
  }).isRequired,
  uploadEmoji: PropTypes.func.isRequired,
  saveEmoji: PropTypes.func.isRequired,
  failedSaveEmoji: PropTypes.func.isRequired,
  deleteEmoji: PropTypes.func.isRequired,
  emojis: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  isFinished: PropTypes.bool.isRequired,
  accessToken: PropTypes.string,
};

UploadPopup.defaultProps = {
  accessToken: null,
};

export default UploadPopupContainer;
