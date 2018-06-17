import React from 'react';
import PropTypes from 'prop-types';

const PopupManager = ({ show }) => (
  <div>test{show}</div>
);

PopupManager.propTypes = {
  show: PropTypes.string,
};

PopupManager.defaultProps = {
  show: null,
};

export default PopupManager;
