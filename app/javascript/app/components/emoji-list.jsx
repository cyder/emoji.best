import React from 'react';

import Emoji from './emoji';

const EmojiList = ({ emojiList }) => (
  <section>
    {
      emojiList.map(emoji => (
        <Emoji key={emoji.id} {...emoji} />
      ))
    }
  </section>
);

export default EmojiList;
