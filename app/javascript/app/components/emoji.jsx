import React from 'react';

import EmojiShape from './shapes/emoji';

const Emoji = ({ name }) => (
  <article>{name}</article>
);

Emoji.propTypes = EmojiShape;

export default Emoji;
