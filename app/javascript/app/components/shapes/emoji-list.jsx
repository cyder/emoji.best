import PropTypes from 'prop-types';

import EmojiShape from './emoji';

const EmojiListShape = PropTypes.arrayOf(PropTypes.shape(EmojiShape).isRequired);

export default EmojiListShape;
