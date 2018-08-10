import PropTypes from 'prop-types';

import UserShape from './user';

const EmojiShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  images: PropTypes.shape({
    slack_url: PropTypes.string.isRequired,
    thumb_url: PropTypes.string.isRequired,
  }).isRequired,
  tags: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  user: UserShape.isRequired,
  number_of_downloaded: PropTypes.number.isRequired,
});

export default EmojiShape;
