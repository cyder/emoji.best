import React from 'react';
import styled from 'styled-components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faDownload from '@fortawesome/fontawesome-free-solid/faDownload';
import PropTypes from 'prop-types';

import Tags from './tags';
import EmojiDetailInfo from './emoji-detail-info';
import { CloseButton } from '../components/css/popup';
import EmojiShape from './shapes/emoji';

const Content = styled.div`
  max-width: 660px;
  width: 80vw;
  padding: 40px 40px 20px;
  border-bottom: 2px solid #eeeeee;
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
  text-align: center;
  line-height: 38px;
`;

const DownloadCheckBox = styled.div`
  width: 50px;
  height: 50px;
  background-color: ${props => (props.isAddedToCart ? '#464646' : '#dfdfdf')};
  border-radius: 25px;
  position: absolute;
  top: -20px;
  right: -20px;

  &::after {
    display: block;
    content: '';
    position: absolute;
    top: 16px;
    left: 14px;
    width: 18px;
    height: 8px;
    border-left: 5px solid #ffffff;
    border-bottom: 5px solid #ffffff;
    transform: rotate(-45deg);
  }
`;

const EmojiPopup = ({
  emoji,
  editEmoji,
  deleteEmoji,
  onClose,
  addTag,
  deleteTag,
  accessToken,
  isAddedToCart,
  deleteEmojiFromDownloadCart,
  addEmojiToDownloadCart,
  push,
}) => (
  <article>
    <Content>
      <EmojiDetailInfo
        emoji={emoji}
        accessToken={accessToken}
        editEmoji={editEmoji}
        deleteEmoji={deleteEmoji}
        push={push}
      />
      <Tags
        emoji={emoji}
        push={push}
        deleteTag={deleteTag}
        addTag={addTag}
        accessToken={accessToken}
      />
    </Content>
    <DownloadButton
      href={emoji.images.slack_url}
      target="_blank"
      download
    >
      <FontAwesomeIcon icon={faDownload} /> download
    </DownloadButton>
    <DownloadCheckBox
      isAddedToCart={isAddedToCart}
      onClick={() => (
        isAddedToCart ? deleteEmojiFromDownloadCart(emoji) : addEmojiToDownloadCart(emoji)
      )}
    />
    <CloseButton onClick={onClose} />
  </article>
);

EmojiPopup.propTypes = {
  onClose: PropTypes.func.isRequired,
  emoji: EmojiShape.isRequired,
  editEmoji: PropTypes.func.isRequired,
  deleteEmoji: PropTypes.func.isRequired,
  isAddedToCart: PropTypes.bool.isRequired,
  addEmojiToDownloadCart: PropTypes.func.isRequired,
  deleteEmojiFromDownloadCart: PropTypes.func.isRequired,
  push: PropTypes.func.isRequired,
  addTag: PropTypes.func.isRequired,
  deleteTag: PropTypes.func.isRequired,
  accessToken: PropTypes.string,
};

EmojiPopup.defaultProps = {
  accessToken: null,
};

export default EmojiPopup;
