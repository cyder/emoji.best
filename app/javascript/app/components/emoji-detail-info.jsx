import React, { Component } from 'react';
import styled from 'styled-components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faDownload from '@fortawesome/fontawesome-free-solid/faDownload';
import PropTypes from 'prop-types';

import EmojiShape from './shapes/emoji';

const Container = styled.div`
  display: flex;
`;

const Img = styled.img`
  width: 100px;
  height: 100px;
  margin: 10px;
`;

const Info = styled.div`
  flex-grow: 1;
  margin-left: 20px;
`;

const TitleArea = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-size: 1.8rem;
  margin: 0;
`;

const UserName = styled.h2`
  font-size: 1.1rem;
  font-weight: normal;
  color: #8d8d8d;
  margin: 5px 0;
`;

const Name = styled.span`
  padding: 0 5px 0;
  word-break: break-all
`;

const Download = styled.div`
  font-size: 1.2rem;
  color: #8d8d8d;
`;

class EmojiDetailInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
    };
  }

  render() {
    const { isEditing } = this.state;
    const { emoji } = this.props;

    return (
      <Container>
        <Img alt={emoji.name} src={emoji.images.thumb_url} />
        <Info>
          <TitleArea>
            <div>
              <Title>:<Name>{ emoji.name }</Name>:</Title>
              <UserName>by { emoji.user.name }</UserName>
            </div>
            <Download>
              <FontAwesomeIcon icon={faDownload} /> {emoji.number_of_downloaded}
            </Download>
          </TitleArea>
          <p>{ emoji.description }</p>
        </Info>
      </Container>
    );
  }
}

EmojiDetailInfo.propTypes = {
  emoji: EmojiShape.isRequired,
  accessToken: PropTypes.string,
};

EmojiDetailInfo.defaultProps = {
  accessToken: null,
};

export default EmojiDetailInfo;
