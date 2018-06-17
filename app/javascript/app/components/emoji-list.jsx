import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Emoji from './emoji';
import EmojiListShape from './shapes/emoji-list';
import DownloadCartShape from './shapes/download-cart';

const Container = styled.section`
  padding: 0 2%;
  margin: 0 auto;
  max-width: 1000px;
`;

const Emojis = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 50px 5%;
`;

const isAddedToCart = (cartList, emoji) => (
  cartList.some(value => value.id === emoji.id)
);

const EmojiList = ({
  emojis,
  cart,
  addEmojiToDownloadCart,
  deleteEmojiFromDownloadCart,
}) => (
  <Container>
    <h2>
      {(emojis.keyword == null || emojis.keyword === '') ?
        'All Emojis' :
        `Search results : ${emojis.keyword}`}
    </h2>
    <Emojis>
      {
        emojis.list.map(emoji => (
          <Emoji
            key={emoji.id}
            emoji={emoji}
            isAddedToCart={isAddedToCart(cart.list, emoji)}
            addEmojiToDownloadCart={addEmojiToDownloadCart}
            deleteEmojiFromDownloadCart={deleteEmojiFromDownloadCart}
          />
        ))
      }
    </Emojis>
  </Container>
);

EmojiList.propTypes = {
  emojis: EmojiListShape.isRequired,
  cart: DownloadCartShape.isRequired,
  addEmojiToDownloadCart: PropTypes.func.isRequired,
  deleteEmojiFromDownloadCart: PropTypes.func.isRequired,
};

export default EmojiList;
