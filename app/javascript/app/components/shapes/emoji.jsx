import PropTypes from 'prop-types';

import UserShape from './user';

const EmojiShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  images: PropTypes.shape({
    large_url: PropTypes.string.isRequired,
    slack_url: PropTypes.string.isRequired,
    thumb_url: PropTypes.string.isRequired,
  }).isRequired,
  user: UserShape.isRequired,
  number_of_downloaded: PropTypes.number.isRequired,
});

export default EmojiShape;
