import PropTypes from 'prop-types';

const UserShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string,
  number_of_uploaded: PropTypes.number,
  number_of_downloaded: PropTypes.number,
});

export default UserShape;
