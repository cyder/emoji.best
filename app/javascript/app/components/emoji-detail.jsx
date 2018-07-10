import React from 'react';
import styled from 'styled-components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faDownload from '@fortawesome/fontawesome-free-solid/faDownload';
import PropTypes from 'prop-types';

import Tags from './tags';
import { CloseButton } from '../components/css/popup';
import EmojiShape from './shapes/emoji';

const Content = styled.div`
  max-width: 660px;
  width: 80vw;
  padding: 40px 40px 20px;
  border-bottom: 2px solid #eeeeee;
`;

const FlexBox = styled.div`
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

const DownloadButton = styled.a`
  display: block;
  width: 200px;
  height: 38px;
  margin: 15px auto;
  color: #ffffff;
  background-color: #464646;
  font-size: 1rem;
  border: solid 3px #dfdfdf;
  border-radius: 25px;
  font-weight: bold;
  text-decoration: none;
  text-align: center;
  line-height: 38px;
`;

const EmojiPopup = ({
  emoji,
  onClose,
  push,
  deleteTag,
  accessToken,
}) => (
  <article>
    <Content>
      <FlexBox>
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
      </FlexBox>
      {
        emoji.tags.length > 0 ? (
          <Tags
            tags={emoji.tags}
            push={push}
            deleteTag={deleteTag}
            accessToken={accessToken}
          />
        ) : null
      }
    </Content>
    <DownloadButton
      href={emoji.images.slack_url}
      target="_blank"
      download
    >
      <FontAwesomeIcon icon={faDownload} /> download
    </DownloadButton>
    <CloseButton onClick={onClose} />
  </article>
);

EmojiPopup.propTypes = {
  onClose: PropTypes.func.isRequired,
  emoji: EmojiShape.isRequired,
  push: PropTypes.func.isRequired,
  deleteTag: PropTypes.func.isRequired,
  accessToken: PropTypes.string,
};

EmojiPopup.defaultProps = {
  accessToken: undefined,
};

export default EmojiPopup;
