import React from 'react';
import PropTypes from 'prop-types';
import CircleButton from '../../atoms/buttons/circle-button';
import Check from '../../atoms/icons/check';
import Color from '../../../constants/styles/color';

const DownloadCheckbox = ({ isChecked, onClick }) => (
  <CircleButton
    isChecked={isChecked}
    onClick={onClick}
    backgroundColor={isChecked ? Color.DARK : Color.GRAY}
  >
    <Check />
  </CircleButton>
);

DownloadCheckbox.propTypes = {
  isChecked: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default DownloadCheckbox;
