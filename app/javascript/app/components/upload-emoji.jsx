import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faCircleNotch from '@fortawesome/fontawesome-free-solid/faCircleNotch';
import faTimes from '@fortawesome/fontawesome-free-solid/faTimes';

import { STATUS } from '../constants/upload-emoji';

const Container = styled.div`
  border: ${(props) => {
    switch (props.status) {
      case STATUS.UPLOADING:
        return 'none';
      case STATUS.UPLOAD_ERROR:
      case STATUS.SAVE_ERROR:
        return 'solid 3px #d32f2f';
      default:
        return 'solid 3px #c4c4c4';
    }
  }};
  border-radius: 10px;
  padding: 5px;
  margin-bottom: 10px;
  position: relative;
  ${props => (
    props.status === STATUS.UPLOAD_ERROR ? 'color: #d32f2f' : null
  )}
`;

const FlexBox = styled.div`
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  width: 40px;
  height: 40px;
  margin: 10px;
`;

const Icon = styled.div`
  font-size: 30px;
  width: 40px;
  height: 40px;
  margin: 10px;
  text-align: center;
  line-height: 40px;
`;

const Name = styled.div`
  width: 160px;
  margin: 5px;
  font-size: 0.9rem;
`;

const Description = styled.div`
  margin: 5px;
  font-size: 0.9rem;
  flex-grow: 1;
`;

const TextForm = styled.input`
  display: block;
  width: 100%;
  margin: 5px 0 0;
  box-sizing: border-box;
  background-color: #f5f5f5;
  border: none;
  padding: 6px 10px;
  border-radius: 5px;

  &::placeholder {
    color: #c0c0c0;
  }
`;

const DeleteButton = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  top: -12px;
  left: -12px;
  border-radius: 15px;
  background-color: #464646;

  &::after {
    display: block;
    content: '';
    position: absolute;
    top: 13px;
    left: 7px;
    width: 16px;
    height: 4px;
    background-color: #ffffff;
  }
`;

const ErrorMessage = styled.p`
  color: #d32f2f;
  text-align: center;
  margin: 5px;
  display: ${props => (
    props.status === STATUS.SAVE_ERROR ? 'block' : 'none'
  )}
`;

class UploadEmoji extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.emoji.name || '',
      description: this.props.emoji.description || '',
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isSaved !== this.props.isSaved && nextProps.isSaved) {
      const { name, description } = this.state;
      const { emoji, accessToken } = this.props;
      const { id, image } = emoji;

      if (name !== '') {
        this.props.saveEmoji(id, name, description, image, accessToken);
      } else {
        this.props.failedSaveEmoji(id, 'Please enter a name.');
      }
    }
  }

  render() {
    const {
      id,
      status,
      image,
      errorMessage,
    } = this.props.emoji;

    return (
      <Container status={status}>
        {(() => {
          switch (status) {
            case STATUS.UPLOADING:
              return (
                <FlexBox>
                  <Icon><FontAwesomeIcon icon={faCircleNotch} spin /></Icon>
                  <div>Uploading...</div>
                </FlexBox>
              );
            case STATUS.UPLOAD_ERROR:
              return (
                <FlexBox>
                  <Icon><FontAwesomeIcon icon={faTimes} /></Icon>
                  <div>{ errorMessage }</div>
                  <DeleteButton
                    onClick={() => this.props.deleteEmoji(id)}
                  />
                </FlexBox>
              );
            default:
              return (
                <div>
                  <ErrorMessage status={this.props.emoji.status}>
                    {this.props.emoji.errorMessage}
                  </ErrorMessage>
                  <FlexBox>
                    <Image src={image} />
                    <Name>
                      emoji name
                      <TextForm
                        type="text"
                        placeholder="input emoji name"
                        value={this.state.name}
                        onChange={e => this.setState({ name: e.target.value })}
                      />
                    </Name>
                    <Description>
                      description
                      <TextForm
                        type="text"
                        placeholder="input description"
                        value={this.state.description}
                        onChange={e => this.setState({ description: e.target.value })}
                      />
                    </Description>
                    <DeleteButton
                      onClick={() => this.props.deleteEmoji(id)}
                    />
                  </FlexBox>
                </div>
              );
            }
          })()
        }
      </Container>
    );
  }
}

UploadEmoji.propTypes = {
  emoji: PropTypes.shape({
    id: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    image: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    errorMessage: PropTypes.string,
  }).isRequired,
  saveEmoji: PropTypes.func.isRequired,
  deleteEmoji: PropTypes.func.isRequired,
  failedSaveEmoji: PropTypes.func.isRequired,
  isSaved: PropTypes.bool.isRequired,
  accessToken: PropTypes.string.isRequired,
};

export default UploadEmoji;
