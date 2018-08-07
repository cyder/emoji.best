import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faDownload from '@fortawesome/fontawesome-free-solid/faDownload';

import EmojiShape from './shapes/emoji';
import DownloadCheckbox from './molecules/buttons/download-checkbox';
import EmojiImg from './atoms/emojis/emoji-img';

const Container = styled.article`
  position: relative;
`;

const DetailLink = styled(Link)`
  display: block;
  color: inherit;
  text-decoration: none;
  padding: 0 5px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 5px 0 0 #e7e7e7;
`;

const TitleArea = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 2px solid #eeeeee;
`;

const Title = styled.h1`
  margin-left: 5px;
  font-size: 1.2rem;
  min-width: 0;
`;

const Name = styled.span`
  padding: 0 5px 0;
  word-break: break-all
`;

const ImgWrapper = styled.div`
  width: 50px;
  height: 50px;
`;

const Menus = styled.div`
  padding: 10px;
  color: #909090;
  display: flex;
  justify-content: space-between;
`;

const DownloadCheckboxWrapper = styled.div`
  position: absolute;
  top: -20px;
  right: -20px;
`;

const Emoji = ({
  emoji,
  isAddedToCart,
  addEmojiToDownloadCart,
  deleteEmojiFromDownloadCart,
}) => (
  <Container>
    <DetailLink to={{ pathname: `/emoji/${emoji.id}`, state: 'popup' }} >
      <TitleArea>
        <ImgWrapper>
          <EmojiImg src={emoji.images.thumb_url} />
        </ImgWrapper>
        <Title>:<Name>{emoji.name}</Name>:</Title>
      </TitleArea>
      <Menus>
        <div>by {emoji.user.name}</div>
        <div><FontAwesomeIcon icon={faDownload} /> {emoji.number_of_downloaded}</div>
      </Menus>
    </DetailLink>
    <DownloadCheckboxWrapper>
      <DownloadCheckbox
        isChecked={isAddedToCart}
        onClick={() => (
          isAddedToCart ? deleteEmojiFromDownloadCart(emoji) : addEmojiToDownloadCart(emoji)
        )}
      />
    </DownloadCheckboxWrapper>
  </Container>
);

Emoji.propTypes = {
  emoji: EmojiShape.isRequired,
  isAddedToCart: PropTypes.bool.isRequired,
  addEmojiToDownloadCart: PropTypes.func.isRequired,
  deleteEmojiFromDownloadCart: PropTypes.func.isRequired,
};

export default Emoji;
