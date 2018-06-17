import React from 'react';
import styled from 'styled-components';

import Emoji from './emoji';
import EmojiListShape from './shapes/emoji-list';

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

const EmojiList = ({ keyword, list }) => (
  <Container>
    <h2>
      {(keyword == null || keyword === '') ?
        'All Emojis' :
        `Search results : ${keyword}`}
    </h2>
    <Emojis>
      {
        list.map(emoji => (
          <Emoji key={emoji.id} {...emoji} />
        ))
      }
    </Emojis>
  </Container>
);

EmojiList.propTypes = EmojiListShape;

export default EmojiList;
