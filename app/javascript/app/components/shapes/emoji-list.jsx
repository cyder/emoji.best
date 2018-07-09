import PropTypes from 'prop-types';

import EmojiShape from './emoji';

const EmojiListShape = PropTypes.shape({
  status: PropTypes.string.isRequired,
  lastPage: PropTypes.number.isRequired,
  keyword: PropTypes.string,
  order: PropTypes.string,
  list: PropTypes.arrayOf(EmojiShape.isRequired).isRequired,
});

export default EmojiListShape;
