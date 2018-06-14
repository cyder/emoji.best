import React from 'react';

import EmojiShape from './shapes/emoji';

const Emoji = emoji => (
  <article>
    <img alt={emoji.name} src={emoji.images.thumb_url} />
    <h1>:{emoji.name}:</h1>
    <hr />
    <span>by {emoji.user.name}</span>
    <span>{emoji.number_of_downloaded}</span>
  </article>
);

Emoji.propTypes = EmojiShape;

export default Emoji;
