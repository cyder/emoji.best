import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Emoji from './emoji';
import EmojiListShape from './shapes/emoji-list';
import DownloadCartShape from './shapes/donwload-cart';

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

const EmojiList = ({
  list,
  cart,
  addEmojiToDownloadCart,
  deleteEmojiFromDownloadCart,
}) => (
  <Container>
    <h2>All Emojis</h2>
    <Emojis>
      {
        list.map(emoji => (
          <Emoji
            key={emoji.id}
            emoji={emoji}
            isAddedToCart={cart.some(value => value.id === emoji.id)}
            addEmojiToDownloadCart={addEmojiToDownloadCart}
            deleteEmojiFromDownloadCart={deleteEmojiFromDownloadCart}
          />
        ))
      }
    </Emojis>
  </Container>
);

EmojiList.propTypes = {
  list: EmojiListShape.isRequired,
  cart: DownloadCartShape.isRequired,
  addEmojiToDownloadCart: PropTypes.func.isRequired,
  deleteEmojiFromDownloadCart: PropTypes.func.isRequired,
};

export default EmojiList;
