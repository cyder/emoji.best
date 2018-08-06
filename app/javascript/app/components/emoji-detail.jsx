import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Tags from './tags';
import EmojiDetailInfo from './emoji-detail-info';
import { CloseButton } from '../components/css/popup';
import EmojiShape from './shapes/emoji';
import DownloadCheckbox from './molecules/buttons/download-checkbox';
import FillButton from './atoms/buttons/fill-button';
import { DOWNLOAD } from '../constants/styles/icon';

const Content = styled.div`
  max-width: 660px;
  width: 80vw;
  padding: 40px 40px 20px;
  border-bottom: 2px solid #eeeeee;
`;

const DownloadButtonWrapper = styled.div`
  width: 240px;
  margin: 15px auto;
`;

const DownloadCheckboxWrapper = styled.div`
  position: absolute;
  top: -20px;
  right: -20px;
`;

const EmojiPopup = ({
  emoji,
  editEmoji,
  deleteEmoji,
  onClose,
  addTag,
  deleteTag,
  myself,
  isAddedToCart,
  deleteEmojiFromDownloadCart,
  addEmojiToDownloadCart,
  push,
}) => (
  <article>
    <Content>
      <EmojiDetailInfo
        emoji={emoji}
        myself={myself}
        editEmoji={editEmoji}
        deleteEmoji={deleteEmoji}
        push={push}
      />
      <Tags
        emoji={emoji}
        push={push}
        deleteTag={deleteTag}
        addTag={addTag}
        accessToken={myself.accessToken}
      />
    </Content>
    <DownloadButtonWrapper>
      <FillButton
        label="download"
        icon={DOWNLOAD}
        href={`/api/v1/emojis/${emoji.id}/download`}
        download
      />
    </DownloadButtonWrapper>
    <DownloadCheckboxWrapper>
      <DownloadCheckbox
        isChecked={isAddedToCart}
        onClick={() => (
          isAddedToCart ? deleteEmojiFromDownloadCart(emoji) : addEmojiToDownloadCart(emoji)
        )}
      />
    </DownloadCheckboxWrapper>
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
  myself: PropTypes.shape({
    accessToken: PropTypes.string,
  }).isRequired,
};

export default EmojiPopup;
