import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import DownloadCartShape from './shapes/download-cart';
import EmojiImg from './atoms/emojis/emoji-img';
import DownloadIcon from './atoms/icons/download';
import LabelAndIconButton from './molecules/buttons/label-and-icon-button';

const Container = styled.section`
  display: ${props => (props.list.length === 0 ? 'none' : 'block')};
  background-color: rgba(255, 255, 255, 0.8);
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 370px;
  border: solid 3px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

const List = styled.div`
  max-height: 260px;
  padding: 30px 50px 15px;
  overflow-y: scroll;
  display: grid;
  grid-template-columns: repeat(3, 70px);
  grid-gap: 30px;
`;

const Emoji = styled.div`
  position: relative;
`;

const ImgWrapper = styled.div`
  width: 50px;
  height: 50px;
  padding: 5px;
  background-color: #ffffff;
  border: solid 5px #dfdfdf;
  border-radius: 10px;
`;

const DeleteButton = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  top: -10px;
  left: -10px;
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

const Message = styled.p`
  text-align: center;
  font-size: 1.1rem;
  color: #909090;
  font-weight: bold;
  margin: 0;
`;

const DownloadButtonWrapper = styled.div`
  display: block;
  width: 240px;
  margin: 15px auto;
`;

const DownloadCart = ({
  cart,
  deleteEmojiFromDownloadCart,
  downloadEmojis,
}) => (
  <Container list={cart.list} >
    <List>
      {
        cart.list.map(emoji => (
          <Emoji key={emoji.id}>
            <ImgWrapper>
              <EmojiImg src={emoji.images.thumb_url} alt={emoji.name} />
            </ImgWrapper>
            <DeleteButton onClick={() => deleteEmojiFromDownloadCart(emoji)} />
          </Emoji>
        ))
      }
    </List>
    <Message>choose {cart.list.length} emojis</Message>
    <DownloadButtonWrapper>
      <LabelAndIconButton
        label="download"
        icon={<DownloadIcon />}
        href="#"
        onClick={(e) => {
          e.preventDefault();
          downloadEmojis(cart.list);
        }}
        target="_blank"
        download
      />
    </DownloadButtonWrapper>
  </Container>
);

export default DownloadCart;

DownloadCart.propTypes = {
  cart: DownloadCartShape.isRequired,
  deleteEmojiFromDownloadCart: PropTypes.func.isRequired,
  downloadEmojis: PropTypes.func.isRequired,
};
