import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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

const EmojiList = ({ emojis, searchEmojis }) => (
  <Container>
    <h2>
      {(emojis.keyword == null || emojis.keyword === '') ?
        'All Emojis' :
        `Search results : ${emojis.keyword}`}
    </h2>
    <select onChange={e => searchEmojis(emojis.keyword, e.target.value)}>
      <option value="new">New</option>
      <option value="popular">Popular</option>
    </select>
    <Emojis>
      {
        emojis.list.map(emoji => (
          <Emoji key={emoji.id} {...emoji} />
        ))
      }
    </Emojis>
  </Container>
);

EmojiList.propTypes = PropTypes.shape({
  emojis: EmojiListShape,
  searchEmojis: PropTypes.func.isRequired,
}).isRequired;

export default EmojiList;
