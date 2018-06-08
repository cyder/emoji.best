import React from 'react';

import EmojiShape from './shapes/emoji';

const Emoji = ({ name }) => (
  <div>{name}</div>
);

Emoji.propTypes = EmojiShape;

export default Emoji;
