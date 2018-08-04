import React from 'react';
import PropTypes from 'prop-types';
import CircleButton from '../../atoms/buttons/circle-button';
import Check from '../../atoms/icons/check';

const DownloadCheckbox = ({ isChecked, onClick }) => (
  <CircleButton
    isChecked={isChecked}
    onClick={onClick}
    backgroundColor={isChecked ? '#464646' : '#dfdfdf'}
  >
    <Check />
  </CircleButton>
);

DownloadCheckbox.propTypes = {
  isChecked: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default DownloadCheckbox;
