import PropTypes from 'prop-types';

import EmojiShape from './emoji';

const EmojiListShape = {
  keyword: PropTypes.string,
  order: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.shape(EmojiShape).isRequired).isRequired,
};

export default EmojiListShape;
