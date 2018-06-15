import PropTypes from 'prop-types';

const EmojiShape = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  images: PropTypes.shape({
    large_url: PropTypes.string.isRequired,
    slack_url: PropTypes.string.isRequired,
    thumb_url: PropTypes.string.isRequired,
  }).isRequired,
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  number_of_downloaded: PropTypes.number.isRequired,
};

export default EmojiShape;
