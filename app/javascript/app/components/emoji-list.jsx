import React from 'react';

import Emoji from './emoji';
import EmojiListShape from './shapes/emoji-list';

const EmojiList = ({ emojiList }) => (
  <section>
    {
      emojiList.map(emoji => (
        <Emoji key={emoji.id} {...emoji} />
      ))
    }
  </section>
);

EmojiList.propTypes = {
  emojiList: EmojiListShape.isRequired,
};

export default EmojiList;
