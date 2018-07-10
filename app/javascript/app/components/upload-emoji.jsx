import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faCircleNotch from '@fortawesome/fontawesome-free-solid/faCircleNotch';

import { STATUS } from '../constants/upload-emoji';

const Container = styled.div`
  display: flex;
  align-items: center;
  border: ${props => (
    props.status !== STATUS.UPLOADING ? 'solid 3px #c4c4c4' : 'none'
  )};
  border-radius: 10px;
  padding: 5px;
  margin-bottom: 10px;
  position: relative;
`;

const Image = styled.img`
  width: 40px;
  height: 40px;
  margin: 10px;
`;

const LoadingIcon = styled.div`
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
      const { emoji, accessToken } = this.props;
      const { id, image } = emoji;
      const { name, description } = this.state;
      this.props.saveEmoji(id, name, description, image, accessToken);
    }
  }

  render() {
    const { id, status, image } = this.props.emoji;

    return (
      <div>
        {(() => {
          switch (status) {
            case STATUS.UPLOADING:
              return (
                <Container status={status}>
                  <LoadingIcon><FontAwesomeIcon icon={faCircleNotch} spin /></LoadingIcon>
                  <div>Uploading...</div>
                </Container>
              );
            default:
              return (
                <Container status={status}>
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
                </Container>
              );
            }
          })()
        }
      </div>
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
  }).isRequired,
  saveEmoji: PropTypes.func.isRequired,
  deleteEmoji: PropTypes.func.isRequired,
  isSaved: PropTypes.bool.isRequired,
  accessToken: PropTypes.string.isRequired,
};

export default UploadEmoji;