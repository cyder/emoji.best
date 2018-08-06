import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { DARK, GRAY, WHITE } from '../../../constants/styles/color';


const FillButton = ({
  onClick,
  backgroundColor,
  label,
  href,
  target,
  download,
}) => (
  <Button
    onClick={onClick}
    backgroundColor={backgroundColor}
    download={download}
    target={target}
    href={href}
  >
    { label }
  </Button>
);

const Button = styled.a`
  display: block;
  border-radius: 1000px;
  background-color: ${props => (props.backgroundColor)};
  cursor: pointer;
  font-size: 1.1rem;
  line-height: 2.6rem;
  font-weight: bold;
  text-align: center;
  border: solid 3px ${GRAY};
  color: ${WHITE};
`;

FillButton.propTypes = {
  onClick: PropTypes.func,
  backgroundColor: PropTypes.string,
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  download: PropTypes.bool,
};

FillButton.defaultProps = {
  onClick: null,
  backgroundColor: DARK,
  href: null,
  target: null,
  download: false,
};

export default FillButton;
