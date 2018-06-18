import PropTypes from 'prop-types';

import EmojiShape from './emoji';

const EmojiListShape = PropTypes.shape({
  keyword: PropTypes.string,
  order: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(EmojiShape.isRequired).isRequired,
});

export default EmojiListShape;
