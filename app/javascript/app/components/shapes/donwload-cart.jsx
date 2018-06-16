import PropTypes from 'prop-types';

import EmojiShape from './emoji';

const DownloadCartShape = PropTypes.arrayOf(PropTypes.shape(EmojiShape).isRequired);

export default DownloadCartShape;
