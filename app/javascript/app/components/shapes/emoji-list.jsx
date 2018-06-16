import PropTypes from 'prop-types';

import EmojiShape from './emoji';

const EmojiListShape = {
  list: PropTypes.arrayOf(PropTypes.shape(EmojiShape).isRequired).isRequired,
  addEmojiToDownloadCart: PropTypes.func.isRequired,
};

export default EmojiListShape;
