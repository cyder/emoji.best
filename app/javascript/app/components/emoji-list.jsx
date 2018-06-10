import React from 'react';
import PropTypes from 'prop-types';

import Emoji from './emoji';
import EmojiListShape from './shapes/emoji-list';

const EmojiList = ({ emojiList, loadEmojis }) => (
  <section>
    <button onClick={loadEmojis}>LOAD</button>
    {
      emojiList.map(emoji => (
        <Emoji key={emoji.id} {...emoji} />
      ))
    }
  </section>
);

EmojiList.propTypes = {
  emojiList: EmojiListShape.isRequired,
  loadEmojis: PropTypes.func.isRequired,
};

export default EmojiList;
