import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { DARK, GRAY_ALPHA, WHITE } from '../../../constants/styles/color';
import FaIcon from '../icons/faIcon';
import Button from './button';
import LinkButton from './link-button';


const FillButton = ({
  onClick,
  backgroundColor,
  label,
  href,
  target,
  download,
  icon,
}) => (
  <Wrapper backgroundColor={backgroundColor}>
    {
      href ? (
        <LinkButton
          onClick={onClick}
          download={download}
          target={target}
          href={href}
        >
          {label}
        </LinkButton>
      ) : (
        <Button onClick={onClick}>
          {label}
        </Button>
      )
    }
    {icon && (
      <IconWrapper>
        <FaIcon icon={icon} />
      </IconWrapper>
    )}
  </Wrapper>
);

const Wrapper = styled.div`
  position: relative;
  color: ${WHITE};
  border-radius: 1000px;
  background-color: ${props => (props.backgroundColor)};
  font-size: 1.1rem;
  line-height: 2.6rem;
  font-weight: bold;
  border: solid 3px ${GRAY_ALPHA};
  box-sizing: border-box;
  cursor: pointer;
`;

const IconWrapper = styled.div`
  font-size: 1.3rem;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 20px;
`;

FillButton.propTypes = {
  onClick: PropTypes.func,
  backgroundColor: PropTypes.string,
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  download: PropTypes.bool,
  icon: PropTypes.string,
};

FillButton.defaultProps = {
  onClick: null,
  backgroundColor: DARK,
  href: null,
  target: null,
  download: false,
  icon: null,
};

export default FillButton;
