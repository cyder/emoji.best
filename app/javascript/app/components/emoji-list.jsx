import React from 'react';
import styled from 'styled-components';

import Emoji from './emoji';
import EmojiListShape from './shapes/emoji-list';

const Container = styled.section`
  margin: 0 auto;
  max-width: 1000px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const EmojiList = ({ emojiList }) => (
  <Container>
    {
      emojiList.map(emoji => (
        <Emoji key={emoji.id} {...emoji} />
      ))
    }
  </Container>
);

EmojiList.propTypes = {
  emojiList: EmojiListShape.isRequired,
};

export default EmojiList;
